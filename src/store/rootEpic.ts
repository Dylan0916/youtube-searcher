import { combineEpics } from 'redux-observable';

import getVideoListEpic from './epics/getVideoListEpic';

export const rootEpic = combineEpics(getVideoListEpic);
