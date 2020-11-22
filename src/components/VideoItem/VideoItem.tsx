import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { makeVideoDetailById } from '../../store/selectors/VideoDetailSelector';
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
    <>
      {/* Link is "body-ok" element. Reference: https://html.spec.whatwg.org/multipage/links.html#body-ok */}
      <link rel="preload" href={imageUrl} as="image" />
      {isPreConnected && <link rel="preconnect" href={youtubeUrl} />}

      <S.Container
        href={`${youtubeUrl}/watch?v=${id}`}
        onPointerOver={warmConnections}
      >
        <S.VideoImageBox>
          <S.VideoImage src={imageUrl} loading="lazy" />
        </S.VideoImageBox>
        <S.VideoTitle>{title}</S.VideoTitle>
      </S.Container>
    </>
  );
}

export default VideoItem;
