import React from 'react';
import { useSelector } from 'react-redux';

import { makeVideoDetailById } from '../../store/selectors/VideoDetailSelector';
import { S } from './styles';

interface Props {
  id: string;
}

function VideoItem({ id }: Readonly<Props>) {
  const videoDetail = useSelector(makeVideoDetailById(id));

  if (Object.keys(videoDetail).length === 0) {
    return null;
  }

  const title = videoDetail.title;
  const image = videoDetail.thumbnails.medium.url;

  return (
    <S.Container>
      <S.VideoImage src={image} />
      <S.VideoTitle>{title}</S.VideoTitle>
    </S.Container>
  );
}

export default VideoItem;
