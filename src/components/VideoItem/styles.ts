import styled from 'styled-components';

import { textColor } from '../../constants/colors';

const IMAGE_WIDTH = 320;
const IMAGE_HEIGHT = 180;

export const S = {
  Container: styled.div`
    grid-column: span 1;
    overflow: hidden;
  `,
  VideoImageBox: styled.div`
    width: 100%;
    height: 0;
    padding-top: calc(100% / ${IMAGE_WIDTH} * ${IMAGE_HEIGHT});
  `,
  VideoImage: styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  VideoTitle: styled.p`
    color: ${textColor};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `,
};
