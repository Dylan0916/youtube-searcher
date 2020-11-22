import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { makeVideoDetailById } from '../../store/selectors/VideoDetailSelector';
import ItemImage from './ItemImage';
import { S } from './styles';

interface Props {
  id: string;
}

function VideoItem({ id }: Readonly<Props>) {
  const videoDetail = useSelector(makeVideoDetailById(id));
  const [isPreConnected, setIsPreConnected] = useState(false);

  if (Object.keys(videoDetail).length === 0) {
    return null;
  }

  const warmConnections = () => {
    if (isPreConnected) {
      return null;
    }

    setIsPreConnected(true);
  };

  const title = videoDetail.title;
  const imageUrl = videoDetail.thumbnails.medium.url;
  const youtubeUrl = 'https://www.youtube.com';

  return (
    <S.Container
      href={`${youtubeUrl}/watch?v=${id}`}
      onPointerOver={warmConnections}
    >
      <ItemImage
        imageUrl={imageUrl}
        youtubeUrl={youtubeUrl}
        isPreConnected={isPreConnected}
      />
      <S.VideoTitle>{title}</S.VideoTitle>
    </S.Container>
  );
}

export default VideoItem;
