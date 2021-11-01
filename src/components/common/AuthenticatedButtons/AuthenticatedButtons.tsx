import {makeStyles} from '@material-ui/core';
import React, {FC} from 'react';
import { OpenWorkspaceButton } from '../OpenWorkspaceButton/OpenWorkspaceButton';
import {SignOut} from '../SignOut/SignOut';

export const AuthenticatedButtons: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <OpenWorkspaceButton />
      <SignOut />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));
