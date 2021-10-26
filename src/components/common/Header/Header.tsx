import {useAuth0} from '@auth0/auth0-react';
import {AppBar, makeStyles, Switch, Toolbar, Typography} from '@material-ui/core';
import DarkModeIcon from '@material-ui/icons/Brightness2';
import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {toggleDarkMode} from '../../../store/reducers/darkModeReducer/darkModeReducer';
import {AuthenticatedButtons} from '../AuthenticatedButtons/AuthenticatedButtons';
import {UnauthenticatedButtons} from '../UnauthenticatedButtons/UnauthenticatedButtons';

export const Header: FC = () => {
  const {isAuthenticated} = useAuth0();

  const dispatch = useAppDispatch();

  const darkMode = useAppSelector((state) => state.darkMode);

  const classes = useStyles();

  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Code Editor App
        </Typography>
        <DarkModeIcon />
        <Switch onChange={onChangeDarkMode} color="default" checked={darkMode} />
        {isAuthenticated ? <AuthenticatedButtons /> : <UnauthenticatedButtons />}
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
  },
}));
