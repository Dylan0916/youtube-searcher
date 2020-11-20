import axios from 'axios';

import { API_KEY } from '../constants/apiKey';
import { GetVideoListResponse } from '../types/getVideoList';

const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3';
const VIDEO_MAX = 20;

export function getVideos(queryText: string) {
  return axios.get<GetVideoListResponse>(`${YOUTUBE_API}/search`, {
    params: {
      part: 'snippet',
      q: queryText,
      key: API_KEY,
      type: 'video',
      maxResults: VIDEO_MAX,
    },
  });
}
