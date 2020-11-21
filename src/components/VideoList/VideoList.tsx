import React from 'react';
import { useSelector } from 'react-redux';

import { makeVideoList } from '../../store/selectors/VideoListSelector';
import Pagination from '../Pagination';
import VideoItem from '../VideoItem';
import { S } from './styles';

function VideoList() {
  const videoList = useSelector(makeVideoList());

  if (videoList.length === 0) {
    return null;
  }

  return (
    <S.Container>
      <S.ListWrapper>
        {videoList.map(id => (
          <VideoItem key={id} id={id} />
        ))}
      </S.ListWrapper>

      <Pagination />
    </S.Container>
  );
}

export default VideoList;
