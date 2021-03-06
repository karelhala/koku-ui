import { RootState } from '../rootReducer';
import { stateKey } from './exportReducer';

export const selectExportState = (state: RootState) => state[stateKey];

export const selectExport = (state: RootState) =>
  selectExportState(state).export;

export const selectExportFetchStatus = (state: RootState) =>
  selectExportState(state).exportFetchStatus;

export const selectExportError = (state: RootState) =>
  selectExportState(state).exportError;
