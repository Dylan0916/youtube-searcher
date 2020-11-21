import React from 'react';

import PageBtn from './PageBtn';
import { S } from './styles';

const MAX_PAGE = 3;
const pageList = Array.from({ length: MAX_PAGE }, (_, index) => index + 1);

function Pagination() {
  return (
    <S.Container>
      {pageList.map(item => (
        <PageBtn key={item} page={item} />
      ))}
    </S.Container>
  );
}

export default Pagination;
