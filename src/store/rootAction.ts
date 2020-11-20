import { ActionType } from 'typesafe-actions';

import { getVideoListAction } from './actions/getVideoListAction';

export const actionsList = {
  getVideoListAction,
};

export type RootAction = ActionType<typeof actionsList>;
