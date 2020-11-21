import produce from 'immer';
import { getType } from 'typesafe-actions';

import { Snippet } from '../../types/getVideoList';
import { GetVideoListSuccessPayload } from '../actions/getVideoListAction';
import { actionsList } from '../rootAction';

interface State {
  videoDetail: Record<string, Snippet>;
}

const { getVideoListAction } = actionsList;
const INIT_STATE: State = {
  videoDetail: {},
};

export const videoDetailReducer = produce((draft, action) => {
  switch (action.type) {
    case getType(getVideoListAction.success): {
      const {
        data,
        loadingType,
      } = action.payload as GetVideoListSuccessPayload;
      const items = data?.items || [];
      const formatData = items.reduce((acc, cur) => {
        const videoId = cur.id.videoId;

        return {
          ...acc,
          [videoId]: cur.snippet,
        };
      }, {});
      const newData =
        loadingType === 'loadMore'
          ? Object.assign(draft.videoDetail, formatData)
          : formatData;

      draft.videoDetail = newData;
      break;
    }
    default: {
      break;
    }
  }
}, INIT_STATE);
