import userReducer from '../features/userSlice';

describe(userReducer, () => {
  const state = userReducer({ user: { user: null } }, { type: 'user/login', payload: { uid: 'bEDvhfarvoMVWXKtZIbhWMaAzxA3', email: 'b@b.com' } });

  it('state equals current user', () => {
    expect(state).toEqual({ user: { uid: 'bEDvhfarvoMVWXKtZIbhWMaAzxA3', email: 'b@b.com' } });
  });

  it('check state.user.uid to be bEDvhfarvoMVWXKtZIbhWMaAzxA3', () => {
    expect(state.user.uid).toEqual('bEDvhfarvoMVWXKtZIbhWMaAzxA3');
  });

  it('check state.user.email to equal b@b.com', () => {
    expect(state.user.email).toEqual('b@b.com');
  });
});
