import produce from 'immer';
import { getType } from 'typesafe-actions';

import { GetVideoListSuccessPayload } from '../actions/getVideoListAction';
import { actionsList } from '../rootAction';

interface State {
  videoList: string[];
  isLoading: boolean;
  error: null;
  hasError: boolean;
}

const { getVideoListAction } = actionsList;
const INIT_STATE: State = {
  videoList: [],
  isLoading: false,
  error: null,
  hasError: false,
};

export const videoListReducer = produce((draft, action) => {
  switch (action.type) {
    case getType(getVideoListAction.request): {
      draft.isLoading = true;
      break;
    }
    case getType(getVideoListAction.success): {
      const { data } = action.payload as GetVideoListSuccessPayload;
      const items = data?.items || [];
      const newData = items.map(item => item?.id.videoId);

      draft.videoList = newData;
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
