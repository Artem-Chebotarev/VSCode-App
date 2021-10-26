import {makeStyles} from '@material-ui/core';
import React, {FC} from 'react';
import {SignOut} from '../SignOut/SignOut';

export const AuthenticatedButtons: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>Open Workspace</div>
      <SignOut />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));
