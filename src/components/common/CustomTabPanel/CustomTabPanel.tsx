import {makeStyles} from '@material-ui/core';
import React, { FC } from 'react';
import UserFile from '../../../types/UserFile';
import { CustomMonacoEditor } from '../CustomMonacoEditor/CustomMonacoEditor';

interface CustomTabPanelProps {
  activeFile: UserFile;
  editorActiveFile: string | null;
}

export const CustomTabPanel: FC<CustomTabPanelProps> = (props) => {
  const classes = useStyles();
  const {activeFile, editorActiveFile} = props;
  const {id: activeFileId} = activeFile;
  return (
    <div className={classes.root} role="tabpanel" hidden={editorActiveFile !== activeFileId}>
      <CustomMonacoEditor activeFile={activeFile} />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
  },
}));
