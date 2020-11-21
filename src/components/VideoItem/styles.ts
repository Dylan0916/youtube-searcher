import styled from 'styled-components';

import { textColor } from '../../constants/colors';

export const S = {
  Container: styled.div`
    grid-column: span 1;
    overflow: hidden;
  `,
  VideoImage: styled.img`
    width: 100%;
    object-fit: cover;
  `,
  VideoTitle: styled.p`
    color: ${textColor};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `,
};
