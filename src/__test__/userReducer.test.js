import userReducer from '../features/userSlice';

test('userReducer', () => {
  const state = userReducer({ user: { user: null } }, { type: 'user/login', payload: { uid: 'bEDvhfarvoMVWXKtZIbhWMaAzxA3', email: 'b@b.com' } });
  expect(state).toEqual({ user: { user: { uid: 'bEDvhfarvoMVWXKtZIbhWMaAzxA3', email: 'b@b.com' } } });
});
