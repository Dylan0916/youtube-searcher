import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import Header from '../Header';

describe('Header', () => {
  const defaultProps = {
    storeQueryText: '',
    getVideoList: jest.fn(),
  };

  const createWrapper = (testProps = {}) => {
    const props = {
      ...defaultProps,
      ...testProps,
    };

    return render(<Header {...props} />);
  };

  it('should call getVideoList correctly', () => {
    const { getByTestId } = createWrapper();
    const theBtn = getByTestId('searchBtn');

    fireEvent.click(theBtn);

    expect(defaultProps.getVideoList).toBeCalledWith({
      queryText: defaultProps.storeQueryText,
    });
  });
});
