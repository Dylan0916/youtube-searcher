import produce from 'immer';
import { getType } from 'typesafe-actions';

import { uniqueArray } from '../../utils/arrayHelpers';
import { ChangePagePayload } from '../actions/changePageAction';
import { GetVideoListSuccessPayload } from '../actions/getVideoListAction';
import { actionsList } from '../rootAction';

interface State {
  queryText: string;
  videoList: string[];
  page: number;
  isLoading: boolean;
  error: null;
  hasError: boolean;
}

const { getVideoListAction, changePageAction } = actionsList;
const INIT_STATE: State = {
  queryText: '',
  videoList: [],
  page: 1,
  isLoading: false,
  error: null,
  hasError: false,
};

export const videoListReducer = produce((draft: State, action) => {
  switch (action.type) {
    case getType(getVideoListAction.request): {
      const { queryText } = action.payload;

      draft.queryText = queryText;
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

    case getType(changePageAction): {
      const { page } = action.payload as ChangePagePayload;

      draft.page = page;
      break;
    }
    default: {
      break;
    }
  }
}, INIT_STATE);
