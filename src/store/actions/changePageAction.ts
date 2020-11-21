import { createAction } from 'typesafe-actions';

export interface ChangePagePayload {
  page: number;
}

export const changePageAction = createAction('MY/CHANGE_PAGE')<
  ChangePagePayload
>();
