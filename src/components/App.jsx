import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from '../components/Footer';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`relative min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <NavBar darkModeHandler={handleDarkModeToggle} isDarkMode={isDarkMode} />
      <div className='pb-[41.8em] md:pb-11'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
