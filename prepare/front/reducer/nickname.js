// nickname 변경
const initialState = {
  name: 'zerocho',
  age: 27,
  password: 'babo',
};

// 동적으로 액션 생성
const changeNickname = (data) => ({
  type: 'CHANGE_NICKNAME',
  data,
});

console.log(changeNickname);

// store.dispatch(changeNickname('boogicho'));

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NICKNAME':
      return {
        ...state,
        name: action.data,
      };

    default:
      return state;
  }
};

export default rootReducer;
