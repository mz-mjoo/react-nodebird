const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

// 동적으로 액션 생성
export const loginAction = (data) => ({
  type: 'LOG_IN',
  data,
});

export const logoutAction = () => ({ type: 'LOG_OUT' });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 로그인
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,

      };
      // 로그아웃
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;
