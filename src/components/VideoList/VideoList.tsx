import React from 'react';
import { useSelector } from 'react-redux';

import { makeVideoList } from '../../store/selectors/VideoListSelector';
import VideoItem from '../VideoItem';
import { S } from './styles';

function VideoList() {
  const videoList = useSelector(makeVideoList());

  return (
    <S.Container>
      {videoList.map(id => (
        <VideoItem key={id} id={id} />
      ))}
    </S.Container>
  );
}

export default VideoList;
