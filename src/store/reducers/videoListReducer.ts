import produce from 'immer';
import { getType } from 'typesafe-actions';

import { uniqueArray } from '../../utils/arrayHelpers';
import { GetVideoListSuccessPayload } from '../actions/getVideoListAction';
import { actionsList } from '../rootAction';

interface State {
  videoList: string[];
  page: number;
  isLoading: boolean;
  error: null;
  hasError: boolean;
}

const { getVideoListAction } = actionsList;
const INIT_STATE: State = {
  videoList: [],
  page: 1,
  isLoading: false,
  error: null,
  hasError: false,
};

export const videoListReducer = produce((draft: State, action) => {
  switch (action.type) {
    case getType(getVideoListAction.request): {
      draft.isLoading = true;
      break;
    }
    case getType(getVideoListAction.success): {
      const {
        data,
        loadingType,
      } = action.payload as GetVideoListSuccessPayload;
      const items = data?.items || [];
      const formatData = items.map(item => item?.id.videoId);
      const newData =
        loadingType === 'loadMore'
          ? draft.videoList.concat(formatData)
          : formatData;

      draft.videoList = uniqueArray(newData);
      draft.page = 1;
      draft.isLoading = false;
      draft.hasError = false;
      draft.error = null;
      break;
    }
    case getType(getVideoListAction.failure): {
      const { error } = action.payload;

      draft.isLoading = false;
      draft.hasError = true;
      draft.error = error;
      break;
    }
    default: {
      break;
    }
  }
}, INIT_STATE);
