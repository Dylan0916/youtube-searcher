import { createSelector } from 'reselect';

import { RootState } from '../rootReducer';

const videoListRaw = (state: RootState) => state?.videoListReducer || {};

export const makeVideoList = () => {
  return createSelector(videoListRaw, data => data.videoList || []);
};
