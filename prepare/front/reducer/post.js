const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '제로초',
    },
    content: '첫번째 게시글 #해시태그 #익스프레스',
    Image: [
      {
        src: 'https://pbs.twimg.com/profile_images/984211816053071872/MouQshHO_400x400.jpg',
      },
      {
        src: 'https://i.pinimg.com/736x/1c/80/ed/1c80ede4da3396331b732d3bf4414fb1.jpg',
      },
      {
        src: 'https://pbs.twimg.com/media/FKcK7q0agAAnane?format=jpg&name=large',
      },
    ],
    Comments: [
      {
        User: {
          nickname: 'nero',
        },
        content: '달이짱',
      },
      {
        User: {
          nickname: 'hero',
        },
        content: '화이팅',
      },
    ],
  }],
  imagePaths: [],
  postAdded: false, // 게시글 작성 완료
};

const ADD_POST = 'ADD_POST';

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 'hi@hi.com',
    nickname: '달이더미',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [
          dummyPost,
          ...state.mainPosts,
        ],
        postAdded: true,
      };

    default:
      return state;
  }
};

export default reducer;
