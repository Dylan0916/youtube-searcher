import { createAsyncAction } from 'typesafe-actions';

import { GetVideoListResponse } from '../../types/getVideoList';

export interface GetVideoListPayload {
  page: number;
  queryText: string;
}

export interface GetVideoListSuccessPayload {
  data: GetVideoListResponse;
}

export interface GetVideoListFailurePayload {
  error: Error;
}

export const getVideoListAction = createAsyncAction(
  'MY/GET_VIDEO_LIST',
  'MY/GET_VIDEO_LIST_SUCCESS',
  'MY/GET_VIDEO_LIST_FAILURE'
)<
  GetVideoListPayload,
  GetVideoListSuccessPayload,
  GetVideoListFailurePayload
>();
