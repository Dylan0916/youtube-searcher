import styled from 'styled-components';

export const S = {
  Container: styled.div`
    width: 100%;
    max-width: 768px;
    margin: 5px auto 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  `,
};
