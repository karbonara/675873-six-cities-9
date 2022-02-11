import { render } from '@testing-library/react';
import App from './app';
const Setting = {
  PLACES_TO_STAY: 324,
};
test('Renders app-component', () => {
  render(<App placesToStay={Setting.PLACES_TO_STAY} />);
});
