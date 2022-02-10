import { all, fork, call, put, take } from 'redux-saga/effects';
import axios from 'axios';

function loginAPI(data) { // 🚨 generator 가 아니기 떄문에 *을 붙이면 안됨!!
  return axios.post('/api/login', data);
}

function* login(action) {
  try {
    const { data } = yield call(loginAPI, action.data);
    yield put({
      type: 'LOG_IN_SUCCESS',
      data,
    });
  } catch (error) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: error.response.data,
    });
  }
}

// take 로그인이라는 액션이 실행될때까지 기다리겠다는 뜻.
// 'LOG_IN'이라는 액션이 실행되면 login이라는 함수가 실행됨.

function logoutAPI() {
  return axios.post('/api/logout');
}

function* logout() {
  try {
    const { data } = yield call(logoutAPI);
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data,
    });
  } catch (error) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: error.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    const { data } = yield call(addPostAPI, action.data);
    yield put({
      type: 'ADD_POST_SUCCESS',
      data,
    });
  } catch (error) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: error.response.data,
    });
  }
}

function* watchLogin() {
  yield take('LOG_IN_REQUEST', login);
}

function* watchLogout() {
  yield take('LOG_OUT_REQUEST', logout);
}

function* watchAddPost() {
  yield take('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchAddPost),

  ]);
}
// all, fork, call, put, -> saga의 effects
// rootSaga 를 만들어놓고 사용할 비동기 액션을 넣어준다.

// all - 배열을 받는다.
// 배열안에 들어있는 것들을 한방에 실행시켜준다.
// fork와 call을 동시에 실행할 수 있게 해준다.

// fork - 함수를 실행해주는 것.
// -> call 과는 다른데 fork대신 call을 사용할 수 있음 명확하게 차이점을 알고 있어야함.

// thunk에서는 비동기 액션을 직접 실행했지만, saga에서는 직접 실행되는게 아니라
// 이벤트 리스너 같은 역할을 한다.
// take('LOG_IN', login); 이라는 액션이 들어오면
// function* login() 제너레이터 함수를 실행하도록 한다. -> 이런것이 이벤트 리스너 같은 느낌을 준다는 것

// 항상 effect 앞에는 yield를 붙여줘야한다.

// put은 dispatch -> action객체를 dispatch하는 역할

// fork, call 둘다 함수를 실행하는 역할
// 차이점 ? fork 비동기 함수 호출, call 동기 함수 호출, 블로킹 / 논블로킹
// call은 결과값을 받아와서 리턴할때까지 기다려줌.
// fork는 바로 다음으로 넘어감

// const { data } = yield call(loginAPI); -> fork를 쓰면 안됨

// yield 는 await와 비슷하다.
