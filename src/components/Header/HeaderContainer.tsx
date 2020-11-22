import React from 'react';
import { useSelector } from 'react-redux';

import useActions from '../../hooks/useActions';
import { getVideoListAction } from '../../store/actions/getVideoListAction';
import { makeVideoDataByKey } from '../../store/selectors/VideoListSelector';
import Header from './Header';
import { GetVideoList } from './types';

function HeaderContainer() {
  const queryText = useSelector(makeVideoDataByKey('queryText'));
  const getVideoList: GetVideoList = useActions(getVideoListAction.request);

  return <Header storeQueryText={queryText} getVideoList={getVideoList} />;
}

export default HeaderContainer;
