import { render, screen } from '@testing-library/react';
import Profile from '../components/Profile';

describe(Profile, () => {
  it('profile render correctly', () => {
    render(<Profile />);
    const textEle = screen.getByText('Profile');
    expect(textEle).toBeInTheDocument();
  });
});
