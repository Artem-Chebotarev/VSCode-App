import {Dispatch} from 'redux';
import {removeActiveFile, setEditorActiveFile} from '../../reducers/filesReducer/filesReducer';
import {RootState} from '../../store';

const getNewActiveFile = (activeFilesIds: string[], activeFilesLength: number, fileId: string) => {
  const fileToBeRemovedIndex = activeFilesIds.indexOf(fileId);

  if (fileToBeRemovedIndex + 1 === activeFilesLength) {
    return activeFilesIds[fileToBeRemovedIndex - 1];
  }

  return activeFilesIds[fileToBeRemovedIndex + 1];
};

export const closeFile = (fileId: string) => (dispatch: Dispatch, getState: () => RootState) => {
  const state = getState();
  const {activeFiles, editorActiveFile} = state.files;
  const activeFilesLength = activeFiles.length;

  if (activeFilesLength >= 2) {
    if (editorActiveFile === fileId) {
      const newActiveFileId = getNewActiveFile(activeFiles, activeFilesLength, fileId);
      if (editorActiveFile === fileId || editorActiveFile === newActiveFileId) {
        dispatch(setEditorActiveFile(newActiveFileId));
      }
    }
  } else {
    dispatch(setEditorActiveFile(null));
  }

  dispatch(removeActiveFile(fileId));
};
