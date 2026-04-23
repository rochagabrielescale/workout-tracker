// Sample data for the prototype
export const USER = { name: 'Alex', age: 29, height: 71, bw: 178 };

export const PROGRAM = {
  name: 'PPL · Hypertrophy',
  week: 3,
  day: 18,
  total: 42,
  thisWeek: [
    { d: 'M', label: 'Push', done: true },
    { d: 'T', label: 'Pull', done: true },
    { d: 'W', label: 'Legs', done: false, rest: true },
    { d: 'T', label: 'Push', done: true },
    { d: 'F', label: 'Pull', done: false, today: true },
    { d: 'S', label: 'Legs', done: false },
    { d: 'S', label: 'Rest', done: false, rest: true },
  ],
};

export const TODAY_WORKOUT = {
  name: 'Pull Day A',
  tags: ['Back', 'Biceps', 'Rear Delts'],
  exercises: 6,
  volume: '8,240',
  estMin: 62,
};

// Active logger state
export const ACTIVE = {
  elapsed: '00:24:17',
  currentIdx: 0,
  list: [
    {
      name: 'Barbell Row',
      type: 'Barbell · Bent-over · 4 × 6-8',
      last: { date: 'APR 15', vals: '205 × 8 · 8 · 6' },
      sets: [
        { w: 135, r: 10, rpe: 'W', done: true, warmup: true },
        { w: 185, r: 8, rpe: '7', done: true },
        { w: 205, r: 8, rpe: '8', done: true },
        { w: 215, r: 6, rpe: '9', done: false },
        { w: 215, r: 6, rpe: '', done: false },
      ],
      target: 4,
    },
    {
      name: 'Lat Pulldown',
      type: 'Cable · Wide · 3 × 8-10',
      last: { date: 'APR 15', vals: '160 × 10 · 10 · 9' },
      sets: [],
      target: 3,
    },
    {
      name: 'Chest-Supp Row',
      type: 'Machine · 3 × 10-12',
      last: { date: 'APR 15', vals: '110 × 12 · 12 · 11' },
      sets: [],
      target: 3,
    },
    {
      name: 'Face Pull',
      type: 'Cable · Rope · 3 × 12-15',
      last: { date: 'APR 12', vals: '40 × 15 · 15 · 12' },
      sets: [],
      target: 3,
    },
    {
      name: 'Hammer Curl',
      type: 'DB · 3 × 10',
      last: { date: 'APR 15', vals: '35 × 10 · 10 · 9' },
      sets: [],
      target: 3,
    },
    {
      name: 'Incline DB Curl',
      type: 'DB · 3 × 12',
      last: { date: 'APR 12', vals: '25 × 12 · 12 · 11' },
      sets: [],
      target: 3,
    },
  ],
};

// Stats — 8-week volume + additional metrics
export const STATS = {
  totalVolume: 175.3, // K lb
  volumeDelta: 12.4,
  weeks: [
    { w: 'W1', v: 142 },
    { w: 'W2', v: 151 },
    { w: 'W3', v: 138 },
    { w: 'W4', v: 160 },
    { w: 'W5', v: 155 },
    { w: 'W6', v: 168 },
    { w: 'W7', v: 162 },
    { w: 'W8', v: 175, live: true },
  ],
  workouts: { val: 24, delta: 3 },
  avgWk: { val: 3.0, delta: 0.4 },
  hours: { val: 28.5, delta: 4.2 },
  big3: [
    { lift: 'Squat', rm: 315, delta: '+15' },
    { lift: 'Bench', rm: 245, delta: '+10' },
    { lift: 'Deadlift', rm: 405, delta: '+20' },
  ],
  bw: [182, 181, 180, 180, 179, 179, 178, 178],
  streak: 23,
};

// Exercise library
export const LIBRARY = [
  { name: 'Bench Press', muscle: 'Chest', eq: 'Barbell', sets: 142, rm: 245 },
  { name: 'Incline DB Press', muscle: 'Chest', eq: 'Dumbbell', sets: 98, rm: null },
  { name: 'Overhead Press', muscle: 'Shoulders', eq: 'Barbell', sets: 76, rm: 155 },
  { name: 'Lateral Raise', muscle: 'Shoulders', eq: 'Dumbbell', sets: 112, rm: null },
  { name: 'Tricep Pushdown', muscle: 'Triceps', eq: 'Cable', sets: 84, rm: null },
  { name: 'Barbell Row', muscle: 'Back', eq: 'Barbell', sets: 104, rm: 225 },
  { name: 'Lat Pulldown', muscle: 'Back', eq: 'Cable', sets: 96, rm: null },
  { name: 'Pull-Up', muscle: 'Back', eq: 'Bodyweight', sets: 72, rm: null },
  { name: 'Barbell Curl', muscle: 'Biceps', eq: 'Barbell', sets: 68, rm: null },
  { name: 'Back Squat', muscle: 'Legs', eq: 'Barbell', sets: 86, rm: 315 },
  { name: 'Romanian DL', muscle: 'Legs', eq: 'Barbell', sets: 64, rm: null },
  { name: 'Leg Press', muscle: 'Legs', eq: 'Machine', sets: 72, rm: null },
  { name: 'Deadlift', muscle: 'Back', eq: 'Barbell', sets: 48, rm: 405 },
  { name: 'Leg Curl', muscle: 'Legs', eq: 'Machine', sets: 58, rm: null },
];

// History
export const HISTORY = [
  { date: 'APR 18', day: 'FRI', name: 'Pull Day A', dur: 62, vol: '8,240', prs: 1 },
  { date: 'APR 17', day: 'THU', name: 'Push Day A', dur: 58, vol: '7,920', prs: 0 },
  { date: 'APR 15', day: 'TUE', name: 'Pull Day A', dur: 65, vol: '8,100', prs: 2 },
  { date: 'APR 14', day: 'MON', name: 'Push Day A', dur: 61, vol: '7,650', prs: 1 },
  { date: 'APR 12', day: 'SAT', name: 'Legs Day', dur: 74, vol: '10,820', prs: 0 },
  { date: 'APR 10', day: 'THU', name: 'Push Day B', dur: 55, vol: '7,400', prs: 0 },
  { date: 'APR 09', day: 'WED', name: 'Pull Day B', dur: 63, vol: '8,180', prs: 1 },
];

// Calendar — 5 weeks, keyed by day-of-month
export const CAL_MONTH = 'APRIL 2026';
export const CAL_DAYS = (() => {
  const arr = [];
  for (let i = 1; i <= 30; i++) {
    let type = null;
    if ([1, 3, 6, 8, 10, 12, 14, 15, 17, 18].includes(i)) type = 'done';
    if (i === 18) type = 'today';
    if ([5, 7, 13].includes(i)) type = 'rest';
    if ([20, 21, 22, 24, 27, 29].includes(i)) type = 'planned';
    arr.push({ d: i, type });
  }
  return arr;
})();

// Tutorials
export const TUTORIALS = [
  { title: 'Bench Press — Bar Path', cat: 'Form', dur: '4:12', muscle: 'Chest' },
  { title: 'Row Variations Compared', cat: 'Technique', dur: '6:45', muscle: 'Back' },
  { title: 'Squat Depth & Brace', cat: 'Form', dur: '8:20', muscle: 'Legs' },
  { title: 'Programming PPL', cat: 'Theory', dur: '11:02', muscle: 'All' },
  { title: 'RPE — How to Gauge', cat: 'Theory', dur: '5:30', muscle: 'All' },
  { title: 'Deadlift Setup', cat: 'Form', dur: '7:15', muscle: 'Back' },
];

// Measurements — last 12 weeks of bodyweight-style tracking
export const MEASUREMENTS = {
  bw: {
    val: 178.2,
    unit: 'LB',
    delta: -3.8,
    series: [182, 181.5, 181, 180.5, 180, 180, 179.5, 179, 178.8, 178.5, 178.4, 178.2],
  },
  bf: {
    val: 14.2,
    unit: '%',
    delta: -1.6,
    series: [15.8, 15.6, 15.4, 15.2, 15, 14.9, 14.7, 14.6, 14.5, 14.4, 14.3, 14.2],
  },
  chest: { val: 42.5, unit: 'IN', delta: +0.5 },
  arm: { val: 15.2, unit: 'IN', delta: +0.3 },
  waist: { val: 32.0, unit: 'IN', delta: -0.8 },
  thigh: { val: 24.1, unit: 'IN', delta: +0.4 },
};
