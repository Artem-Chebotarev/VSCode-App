import {createSlice} from '@reduxjs/toolkit';
import UserFile from '../../../types/UserFile';

interface FilesState {
  userFiles: UserFile[];
  activeFile: string[];
  editorActiveFile: string | null;
}

const initialState: FilesState = {
  userFiles: [],
  activeFile: [],
  editorActiveFile: null,
};

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {},
});

export const filesReducer = filesSlice.reducer;
