import axios from 'axios';

import { API_KEY } from '../constants/apiKey';
import { GetVideoListResponse } from '../types/getVideoList';

const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3';
const VIDEO_MAX = 30;

interface GetVideos {
  queryText: string;
  nextPageToken?: string;
}

export function getVideos({ queryText, nextPageToken }: GetVideos) {
  return axios.get<GetVideoListResponse>(`${YOUTUBE_API}/search`, {
    params: {
      part: 'snippet',
      q: queryText,
      key: API_KEY,
      type: 'video',
      maxResults: VIDEO_MAX,
      pageToken: nextPageToken,
    },
  });
}
