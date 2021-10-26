import { render } from '@testing-library/react';
import {HomePage} from './HomePage';

test('should render the welcome message', () => {
  const {queryByText} = render(<HomePage />);
  expect(queryByText(/Welcome to the Code Editor App/)).toBeInTheDocument();
});
