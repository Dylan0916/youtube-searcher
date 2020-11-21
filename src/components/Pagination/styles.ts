import styled from 'styled-components';

import { paginationBtnColor, textColor, white } from '../../constants/colors';

interface PageBtnProps {
  isActive: boolean;
}

export const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
  `,
  PageBtn: styled.button<PageBtnProps>`
    background-color: ${({ isActive }) =>
      isActive ? paginationBtnColor : 'transparent'};
    color: ${({ isActive }) => (isActive ? white : textColor)};
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    padding: 3px 8px;
    margin: 0 10px;
    font-size: 16px;
  `,
};
