const Anthropic = require("@anthropic-ai/sdk");

module.exports = async function handler(req, res) {
  // Only accept POST
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Validate env
  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: "ANTHROPIC_API_KEY is not configured" });
  }

  // Validate body
  const { image_base64, media_type } = req.body || {};
  if (!image_base64) {
    return res.status(400).json({ error: "Missing image_base64 in request body" });
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  const mt = allowedTypes.includes(media_type) ? media_type : "image/jpeg";

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: { type: "base64", media_type: mt, data: image_base64 },
            },
            {
              type: "text",
              text: `Extract structured workout data from this Apple Fitness workout screenshot.

Return ONLY valid JSON matching this exact shape — no markdown, no explanation, no code fences:

{
  "workout_type": string or null,
  "date": "YYYY-MM-DD" or null,
  "duration": string or null,
  "distance_km": number or null,
  "calories": number or null,
  "avg_pace": string or null,
  "avg_heart_rate": number or null
}

Rules:
- If a value is not clearly visible in the screenshot, return null for that field.
- Do NOT guess or hallucinate values.
- Normalize miles to kilometers (1 mi = 1.60934 km). Round to 2 decimal places.
- Keep duration as a readable string like "35:24" or "1:02:15".
- Keep avg_pace as a readable string like "6:48 /km".
- calories should be active calories if both active and total are shown.
- For date, use the date shown on the screenshot. If only a weekday or relative date is shown, return null.
- For workout_type, use the exact label shown (e.g. "Outdoor Run", "Indoor Cycle", "Strength Training").`,
            },
          ],
        },
      ],
    });

    // Extract text content from the response
    const text =
      response.content
        ?.filter((b) => b.type === "text")
        .map((b) => b.text)
        .join("") || "";

    // Parse JSON — strip code fences if the model accidentally wraps
    const cleaned = text.replace(/```(?:json)?\s*/g, "").replace(/```\s*/g, "").trim();
    let parsed;
    try {
      parsed = JSON.parse(cleaned);
    } catch {
      return res.status(422).json({
        error: "Could not parse workout data from this screenshot. Try a clearer image.",
        raw: text,
      });
    }

    // Enforce schema — only allow known keys, coerce types
    const result = {
      workout_type:   typeof parsed.workout_type === "string" ? parsed.workout_type : null,
      date:           typeof parsed.date === "string" ? parsed.date : null,
      duration:       typeof parsed.duration === "string" ? parsed.duration : null,
      distance_km:    typeof parsed.distance_km === "number" ? Math.round(parsed.distance_km * 100) / 100 : null,
      calories:       typeof parsed.calories === "number" ? Math.round(parsed.calories) : null,
      avg_pace:       typeof parsed.avg_pace === "string" ? parsed.avg_pace : null,
      avg_heart_rate: typeof parsed.avg_heart_rate === "number" ? Math.round(parsed.avg_heart_rate) : null,
    };

    return res.status(200).json(result);
  } catch (err) {
    console.error("parse-screenshot error:", err);
    const message =
      err?.status === 401
        ? "Invalid API key — check ANTHROPIC_API_KEY in Vercel settings."
        : err?.message || "Internal server error";
    return res.status(500).json({ error: message });
  }
};
