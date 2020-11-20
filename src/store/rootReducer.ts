import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';

import { videoDetailReducer } from './reducers/videoDetailReducer';
import { videoListReducer } from './reducers/videoListReducer';

export const rootReducer = combineReducers({
  videoDetailReducer,
  videoListReducer,
});

export type RootState = StateType<typeof rootReducer>;
