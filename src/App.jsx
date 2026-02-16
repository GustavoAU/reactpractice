import './index.css';
import Card from './Card';
import { useState } from 'react';
import { IMAGES_BY_THEME } from './constants';

function App() {
  const [theme, setTheme] = useState('light');
  const [bgImage, setBgImage] = useState(IMAGES_BY_THEME.light[0]);

  function handleToggle() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    const nextImages = IMAGES_BY_THEME[nextTheme];
    const randomImage = nextImages[Math.floor(Math.random() * nextImages.length)];
    setTheme(nextTheme);
    setBgImage(randomImage);
  }

  return (
    <div className={`container ${theme}`}>
      <Card
        text={theme === 'light' ? 'Light Theme' : 'Dark Theme'}
        style={{
          backgroundImage: bgImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: theme === 'light' ? '#000' : '#fff',
        }}
      />

      <label className="switch">
        <input type="checkbox" onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default App;
