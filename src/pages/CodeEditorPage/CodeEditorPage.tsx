import {makeStyles} from '@material-ui/core';
import React, {FC} from 'react';
import EditorContainer from '../../components/EditorContainer/Editorcontainer';
import {FileViewer} from '../../components/FileViewer/FileViewer';

export const CodeEditorPage: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.fileViewer}>
        <FileViewer />
      </div>
      <div className={classes.codeEditorContainer}><EditorContainer /></div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    widht: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  fileViewer: {
    display: 'flex',
    flex: '1',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '1px dashed black',
    maxWidth: '100px',
    overflow: 'auto',
  },
  codeEditorContainer: {
    flex: '3',
    height: '100%',
  },
}));
