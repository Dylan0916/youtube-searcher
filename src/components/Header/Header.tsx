import React, { ChangeEvent, useState } from 'react';

import {
  GetVideoListPayload,
  getVideoListAction,
} from '../../store/actions/getVideoListAction';
import { useActions } from '../../utils/hookHelpers';
import IconSearch from './assets/icon-search.svg';
import { S } from './styles';

type GetVideoList = (args: GetVideoListPayload) => void;

function Header() {
  const [queryText, setQueryText] = useState('');
  const getVideoList: GetVideoList = useActions(getVideoListAction.request);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryText(e.target.value);
  };

  const onSubmit = () => {
    getVideoList({ page: 1, queryText });
  };

  return (
    <S.Container>
      <S.SearchBarWrapper>
        <S.SearchInput
          type="text"
          placeholder="Search..."
          value={queryText}
          onChange={onInputChange}
        />
        <S.SearchButton src={IconSearch} onClick={onSubmit} />
      </S.SearchBarWrapper>
    </S.Container>
  );
}

export default Header;
