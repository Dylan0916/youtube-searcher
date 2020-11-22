import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useSelector } from 'react-redux';

import useActions from '../../hooks/useActions';
import {
  GetVideoListPayload,
  getVideoListAction,
} from '../../store/actions/getVideoListAction';
import { makeVideoDataByKey } from '../../store/selectors/VideoListSelector';
import IconSearch from './assets/icon-search.svg';
import { S } from './styles';

type GetVideoList = (args: GetVideoListPayload) => void;

function Header() {
  const storeQueryText = useSelector(makeVideoDataByKey('queryText'));
  const [queryText, setQueryText] = useState(storeQueryText);
  const getVideoList: GetVideoList = useActions(getVideoListAction.request);

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
        <S.SearchButton src={IconSearch} onClick={onSubmit} />
      </S.SearchBarWrapper>
    </S.Container>
  );
}

export default Header;
