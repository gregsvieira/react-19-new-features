import { use } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const ThemeButton = () => {
  const { theme, toggleTheme } = use(ThemeContext);
  console.log(theme);

  return (
    <button onClick={toggleTheme} className={theme}>
     Change Theme {`${theme}`}
    </button>
  )
}

export default ThemeButton;