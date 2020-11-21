import { createSelector } from 'reselect';

import { RootState } from '../rootReducer';

const videoDetailRaw = (state: RootState) => state?.videoDetailReducer || {};

export const makeVideoDetailById = (id: string) => {
  return createSelector(videoDetailRaw, data => data.videoDetail?.[id] || {});
};
