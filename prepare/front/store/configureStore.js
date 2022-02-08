import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducer'
const configureStore = () => {
  const middlewares = []; // 해당 배열에 saga나 thunk 추가
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(reducer, enhancer);

  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
