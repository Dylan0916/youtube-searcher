import styled from 'styled-components';

import { headerBgColor, white } from '../../constants/colors';

const IMAGE_PADDING = 10;

export const S = {
  Container: styled.div`
    background-color: ${headerBgColor};
    width: 100%;
    padding: 15px 0;
  `,
  SearchBarWrapper: styled.div`
    width: 100%;
    max-width: 360px;
    margin: 0 auto;

    @media (max-width: 480px) {
      max-width: 72%;
    }
  `,
  SearchInput: styled.input`
    color: ${white};
    border: none;
    background-color: transparent;
    padding: 5px 10px;
    border-bottom: solid 2px ${white};
    outline: none;
    width: 100%;

    /* Edge */
    ::-webkit-input-placeholder {
      color: ${white};
    }

    /* Internet Explorer 10-11 */
    :-ms-input-placeholder {
      color: ${white};
    }

    ::placeholder {
      color: ${white};
    }
  `,
  SearchButton: styled.img`
    width: ${16 + IMAGE_PADDING * 2}px;
    position: absolute;
    right: ${6 - IMAGE_PADDING}px;
    top: 50%;
    transform: translateY(-50%);
    padding: ${IMAGE_PADDING}px;
    cursor: pointer;
  `,
};
