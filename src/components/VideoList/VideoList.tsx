import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/rootReducer';
import VideoItem from '../VideoItem';
import { S } from './styles';

function VideoList() {
  const videoList = useSelector(
    (state: RootState) => state.videoListReducer.videoList
  );

  return (
    <S.Container>
      {videoList.map(id => (
        <VideoItem key={id} id={id} />
      ))}
    </S.Container>
  );
}

export default VideoList;
