import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/rootReducer';
import { S } from './styles';

interface Props {
  id: string;
}

function VideoItem({ id }: Readonly<Props>) {
  const videoDetail = useSelector(
    (state: RootState) => state.videoDetailReducer.videoDetail
  );
  const title = videoDetail[id]?.title;
  const image = videoDetail[id]?.thumbnails.medium.url;

  if (!title || !image) {
    return null;
  }

  return (
    <S.Container>
      <S.VideoImage src={image} />
      <S.VideoTitle>{title}</S.VideoTitle>
    </S.Container>
  );
}

export default VideoItem;
