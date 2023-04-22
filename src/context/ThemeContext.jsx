import { createContext, useEffect, useReducer } from 'react';

export const ThemeContext = createContext(null);

const themeReducer = (theme, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return theme === 'light' ? 'dark' : 'light';
    }

    default: {
      throw Error('Unknown action: ', action.type);
    }
  }
};

const ThemeContextProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, 'dark');

  useEffect(() => {
    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
