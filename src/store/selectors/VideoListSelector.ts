import { createSelector } from 'reselect';

import { RootState } from '../rootReducer';

const videoListRaw = (state: RootState) => state?.videoListReducer || {};

const ITEMS_PER_PAGE = 20;

export const makeVideoList = () => {
  return createSelector(videoListRaw, data => {
    const page = data?.page || 1;
    const list = data.videoList || [];

    return list.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  });
};

export const makeVideoDataByKey = (key: string) => {
  return createSelector(videoListRaw, (data: Record<string, any>) => data[key]);
};
