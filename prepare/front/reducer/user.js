const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export const loginAction = (data) => ({
  type: 'LOG_IN',
  data,
});

export const logoutAction = () => ({ type: 'LOG_OUT' });

// thunk
// export const loginRequestAction = (data) => ({
//   type: 'LOG_IN',
//   data,
// });

// export const loginSuccessAction = (data) => ({
//   type: 'LOG_IN_SUCCESS',
//   data,
// });

// export const loginRequestFailure = (data) => ({
//   type: 'LOG_IN_FAILURE',
//   data,
// });

// 백엔드로부터 요청을 받아와야하기 떄문에, loginRequestAction, logoutRequestAction으로 해줘야한다
// (원칙적으로) 어떤 요청이든 Request, success, failure 이 세가지로 구성된다.

// thunk 대신 saga 사용이유 ?
// dispatch를 여러번 사용하는 기능이 전부, 나머지는 스스로 구현해줘야함
// saga는 몇초뒤 액션이 실행되도록하는 딜레이 기능을 구현할 수 있음
// saga 같은 경우에는 미리 만들어진 기능을 제공해줌
// 만약 클릭을 실수로 두번할 경우 thunk의 경우 2번 다 요청이 가지만, saga는 마지막것만 요청 보내고 첫번째는 무시해주는 기능 제공,
// 쓰로틀 (ex. 스크롤 기능 만들때) 기능 제공
// thunk 간단 / saga - 복잡한 기능

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
