import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { getVideoListAction } from '../../../store/actions/getVideoListAction';
import HeaderContainer from '../HeaderContainer';

jest.mock('../../../hooks/useActions', () => (fn: Function) => fn());
jest.mock('../../../store/actions/getVideoListAction', () => ({
  getVideoListAction: {
    request: jest.fn(),
  },
}));

describe('HeaderContainer', () => {
  const mockStore = configureStore()();

  const createWrapper = () => {
    return render(
      <Provider store={mockStore}>
        <HeaderContainer />
      </Provider>
    );
  };

  it('test', () => {
    createWrapper();

    expect(getVideoListAction.request).toBeCalled();
  });
});
