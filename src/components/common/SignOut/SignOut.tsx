import {useAuth0} from '@auth0/auth0-react';
import {Button, makeStyles} from '@material-ui/core';
import React, {FC} from 'react';
import {commonColors} from '../../../theme/colors';

export const SignOut: FC = () => {
  const {logout} = useAuth0();

  const classes = useStyles();

  const onLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <Button className={classes.button} onClick={onLogout}>
      Sign Out
    </Button>
  );
};

const useStyles = makeStyles(() => ({
  button: {
    color: commonColors.white,
  },
}));
