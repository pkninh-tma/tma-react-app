import mailListReducer from '../reducer';

describe('mailListReducer', () => {
  it('returns the initial state', () => {
    expect(mailListReducer(undefined, {})).toEqual({});
  });
});
