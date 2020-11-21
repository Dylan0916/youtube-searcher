import styled from 'styled-components';

export const S = {
  Container: styled.div`
    width: 100%;
    max-width: 1080px;
    margin: 5px auto 10px;
  `,
  ListWrapper: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    @media (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
      padding: 0 10px;
    }
  `,
};
