import './App.css';
import { createContext, useState } from 'react';
import { Header } from './components/header';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className='App'
        style={{
          backgroundColor: theme === 'light' ? 'white' : 'black',
          color: theme === 'light' ? 'black' : 'white',
        }}
      >
        <Header />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
