import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';

const rootReducer = combineReducers({
  index: (state = {}, action) => { // HYDRATE 사용을 위해서 reducer 추가.. index로 추가해주면 된다.
    switch (action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload,
        };

      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
