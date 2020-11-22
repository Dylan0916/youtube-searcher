import React, { memo } from 'react';

import { S } from './styles';

interface Props {
  imageUrl: string;
  youtubeUrl: string;
  isPreConnected: boolean;
}

function ItemImage({ imageUrl, youtubeUrl, isPreConnected }: Readonly<Props>) {
  console.log(isPreConnected);

  return (
    <>
      {/* Link is "body-ok" element. Reference: https://html.spec.whatwg.org/multipage/links.html#body-ok */}
      <link rel="preload" href={imageUrl} as="image" />
      {isPreConnected && <link rel="preconnect" href={youtubeUrl} />}
      <S.VideoImageBox>
        <S.VideoImage src={imageUrl} loading="lazy" />
      </S.VideoImageBox>
    </>
  );
}

export default memo(ItemImage);
