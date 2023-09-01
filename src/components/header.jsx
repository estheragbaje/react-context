import { ThemeContext } from '../App';
import { useContext } from 'react';

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h2>The theme is {theme} </h2>
      <button onClick={toggleTheme}>switch theme</button>
    </div>
  );
}
