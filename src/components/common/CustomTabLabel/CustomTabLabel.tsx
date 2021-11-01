import {makeStyles} from '@material-ui/core';
import React, {FC, MouseEvent} from 'react';
import UserFile from '../../../types/UserFile';
import CloseIcon from '@material-ui/icons/Close';
import {useAppDispatch} from '../../../hooks/redux';
import {ExtensionIcon} from '../../ExtensionIcon/ExtensionIcon';
import { closeFile } from '../../../store/thunks/closeFile/closeFile';

interface CustomTabLabelProps {
  activeFile: UserFile;
}

export const CustomTabLabel: FC<CustomTabLabelProps> = (props) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const {
    activeFile: {id: fileId, name: fileName, extension},
  } = props;

  const onClose = (event: MouseEvent) => {
    event.stopPropagation();
    dispatch(closeFile(fileId));
  };

  return (
    <div className={classes.root}>
      <ExtensionIcon extension={extension} />
      <div className={classes.fileName}>{fileName}</div>
      <CloseIcon className={classes.closeIcon} onClick={onClose} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'none',
  },
  fileName: {
    padding: '0px 5px',
    color: theme.font,
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    color: theme.font,
  },
}));
