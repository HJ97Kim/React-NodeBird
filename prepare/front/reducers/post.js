export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '김형진',
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://lh3.googleusercontent.com/proxy/0j4sm2-q8RxyWOfAlOV7_6fnDuV30spB67hpnDljssDUIs594XCylBMpHfJtv7ZGO9P6c8_PBBd2UY59nOzcywPxytJwu-o4Il4qdPFx5a1fuPGGSQ',
    }, {
      src: 'https://lh3.googleusercontent.com/proxy/0j4sm2-q8RxyWOfAlOV7_6fnDuV30spB67hpnDljssDUIs594XCylBMpHfJtv7ZGO9P6c8_PBBd2UY59nOzcywPxytJwu-o4Il4qdPFx5a1fuPGGSQ',
    }, {
      src: 'https://lh3.googleusercontent.com/proxy/0j4sm2-q8RxyWOfAlOV7_6fnDuV30spB67hpnDljssDUIs594XCylBMpHfJtv7ZGO9P6c8_PBBd2UY59nOzcywPxytJwu-o4Il4qdPFx5a1fuPGGSQ',
    }],
    Comments: [{
      User: {
        nickname: 'maru',
      },
      content: '얼른 사고싶어요~',
    }]
  }],
  imagePaths: [],
  postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};
const dummyPost = {
  id: 2,
  content: '더미데이터입니다',
  User: {
    id: 1,
    nickname: '김형진',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
}

export default reducer;