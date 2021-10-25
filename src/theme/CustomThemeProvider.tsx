import {createTheme, ThemeProvider} from '@material-ui/core';
import React, {FC} from 'react';
import {useAppSelector} from '../hooks/redux';
import {appColors, darkModeColors} from './colors';

interface CustomThemeProviderProps {
  children?: React.ReactChild | React.ReactNode;
}

export const CustomThemeProvider: FC<CustomThemeProviderProps> = ({children}) => {
  const darkMode = useAppSelector((state) => state.darkMode);

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: appColors.primary,
      },
    },
    background: darkMode ? darkModeColors.background : appColors.background,
    font: darkMode ? darkModeColors.font : appColors.font,
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    background: string;
    font: string;
  }

  interface ThemeOptions {
    background: string;
    font: string;
  }
}
