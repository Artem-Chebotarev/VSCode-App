import Editor from '@monaco-editor/react';
import {debounce} from 'lodash';
import React, {FC, useCallback, useState} from 'react';
import { supportedExtensions } from '../../../constants/supportedExtentions';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { updateFileCode } from '../../../store/reducers/filesReducer/filesReducer';
import UserFile from '../../../types/UserFile';
import { Loader } from '../Loader/Loader';

interface CustomMonacoEditorProps {
  activeFile: UserFile;
}

export const CustomMonacoEditor:FC<CustomMonacoEditorProps> = (props) => {
  const {
    activeFile: {id: fileId, extension, code: originalCode},
  } = props;
  const [code, setCode] = useState(originalCode);
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);
  const language = supportedExtensions[extension];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSave = useCallback(
    debounce((fileId: string, newCode: string) => {
      dispatch(updateFileCode({fileId, newCode}));
    }, 1000),
    []
  );

  const onChange = (newCode = '') => {
    setCode(newCode);
    debouncedSave(fileId, newCode);
  };

  return (
    <Editor
      width="100%"
      height="100%"
      language={language}
      theme={darkMode ? 'vs-dark' : 'vs-light'}
      value={code}
      loading={<Loader />}
      onChange={onChange}
    />
  );
};
