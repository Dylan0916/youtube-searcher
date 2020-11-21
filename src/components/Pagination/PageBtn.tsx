import React from 'react';
import { useSelector } from 'react-redux';

import { actionsList } from '../../store/rootAction';
import { makeVideoDataByKey } from '../../store/selectors/VideoListSelector';
import { useActions } from '../../utils/hookHelpers';
import { S } from './styles';

const { changePageAction } = actionsList;

interface Props {
  page: number;
}

type ChangePage = ({ page }: { page: number }) => void;

function PageBtn({ page }: Props) {
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
