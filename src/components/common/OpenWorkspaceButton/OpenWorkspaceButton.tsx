import {Button, makeStyles} from '@material-ui/core';
import React, {FC, useRef} from 'react';
import {useAppDispatch} from '../../../hooks/redux';
import {readFiles} from '../../../store/thunks/readFiles/readFiles';
import {commonColors} from '../../../theme/colors';

export const OpenWorkspaceButton: FC = () => {
  const classes = useStyles();

  const directoryInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    directoryInputRef.current?.click();
  };

  const onFilesUpload = async () => {
    try {
      const files = directoryInputRef.current?.files as FileList;
      await dispatch(readFiles(files));
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <div>
      <Button className={classes.button} onClick={handleOnClick}>
        Open Workspace
      </Button>
      <input
        type="file"
        className={classes.input}
        directory=""
        webkitdirectory=""
        ref={directoryInputRef}
        onChange={onFilesUpload}
        accept=".xls,.xlsx,.xlsb,.txt,.csv,.tsv"
      />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  button: {
    color: commonColors.white,
  },
  input: {
    display: 'none',
  },
}));

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    directory?: string;
    webkitdirectory?: string;
  }
}
