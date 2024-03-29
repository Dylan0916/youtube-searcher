import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import useActions from '../../hooks/useActions';
import { actionsList } from '../../store/rootAction';
import { makeVideoDataByKey } from '../../store/selectors/VideoListSelector';
import { S } from './styles';

const { changePageAction } = actionsList;

interface Props {
  page: number;
}

type ChangePage = ({ page }: { page: number }) => void;

const PageBtn: FC<Props> = ({ page }) => {
  const changePage: ChangePage = useActions(changePageAction);
  const currentPage = useSelector(makeVideoDataByKey('page'));
  const isActive = currentPage === page;
  const onPageClick = () => {
    if (!isActive) {
      changePage({ page });
    }
  };

  return (
    <S.PageBtn isActive={isActive} onClick={onPageClick}>
      {page}
    </S.PageBtn>
  );
}

export default PageBtn;
