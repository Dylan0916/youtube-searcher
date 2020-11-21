import { ActionType } from 'typesafe-actions';

import { changePageAction } from './actions/changePageAction';
import { getVideoListAction } from './actions/getVideoListAction';

export const actionsList = {
  getVideoListAction,
  changePageAction,
};

export type RootAction = ActionType<typeof actionsList>;
