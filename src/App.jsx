import { useEffect, useState } from 'react';
import { Phone } from './components/Phone.jsx';
import { Dashboard } from './screens/Dashboard.jsx';
import { ActiveWorkout } from './screens/ActiveWorkout.jsx';
import { StatsScreen } from './screens/StatsScreen.jsx';
import { LibraryScreen } from './screens/LibraryScreen.jsx';
import { HistoryScreen } from './screens/HistoryScreen.jsx';
import { CalendarScreen } from './screens/CalendarScreen.jsx';
import { MeasurementsScreen } from './screens/MeasurementsScreen.jsx';
import { ProfileScreen } from './screens/ProfileScreen.jsx';

const TOP_TABS = ['today', 'train', 'stats', 'library', 'you'];

export default function App() {
  const [tab, setTab] = useState(() => localStorage.getItem('bloom.tab') || 'today');
  const [active, setActive] = useState(false);
  const [variant, setVariant] = useState(() => localStorage.getItem('bloom.variant') || 'v2');

  useEffect(() => {
    localStorage.setItem('bloom.tab', tab);
  }, [tab]);
  useEffect(() => {
    localStorage.setItem('bloom.variant', variant);
  }, [variant]);

  const navigate = (t) => {
    setActive(false);
    setTab(t);
  };

  const renderScreen = () => {
    if (active) return <ActiveWorkout onExit={() => setActive(false)} />;
    switch (tab) {
      case 'today':
      case 'train':
        return (
          <Dashboard
            variant={variant}
            onNav={navigate}
            onStartWorkout={() => setActive(true)}
          />
        );
      case 'stats':
        return <StatsScreen />;
      case 'library':
        return <LibraryScreen />;
      case 'you':
        return (
          <ProfileScreen onSubNav={navigate} variant={variant} setVariant={setVariant} />
        );
      case 'calendar':
        return <CalendarScreen />;
      case 'history':
        return <HistoryScreen />;
      case 'body':
        return <MeasurementsScreen />;
      default:
        return (
          <Dashboard
            variant={variant}
            onNav={navigate}
            onStartWorkout={() => setActive(true)}
          />
        );
    }
  };

  const activeTab = TOP_TABS.includes(tab) ? tab : 'you';

  return (
    <Phone showNav={!active} active={activeTab} onNav={navigate}>
      {renderScreen()}
    </Phone>
  );
}
