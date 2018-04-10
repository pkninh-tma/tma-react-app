import appReducer from '../reducer';
// import {
//   loadRepos,
//   reposLoaded,
//   repoLoadingError,
// } from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      // currentUser: false,
      // userData: {
      //   repositories: false,
      // },
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });
});
