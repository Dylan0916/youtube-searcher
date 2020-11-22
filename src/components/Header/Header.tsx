import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import IconSearch from './assets/icon-search.svg';
import { S } from './styles';
import { GetVideoList } from './types';

interface Props {
  storeQueryText: string;
  getVideoList: GetVideoList;
}

function Header({ storeQueryText, getVideoList }: Readonly<Props>) {
  const [queryText, setQueryText] = useState(storeQueryText);

  const onSubmit = () => {
    getVideoList({ queryText });
  };

  const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryText(e.target.value);
  };

  return (
    <S.Container>
      <S.SearchBarWrapper>
        <S.SearchInput
          type="text"
          placeholder="Search..."
          value={queryText}
          onKeyDown={onInputKeyDown}
          onChange={onInputChange}
        />
        <S.SearchButton
          src={IconSearch}
          onClick={onSubmit}
          data-testid="searchBtn"
        />
      </S.SearchBarWrapper>
    </S.Container>
  );
}

export default Header;
