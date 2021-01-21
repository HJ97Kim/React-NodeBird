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
      content: '너무 귀여워요~',
    }]
  }],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

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
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      }
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      }
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      }
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      }
    default:
      return state;
  }
}

export default reducer;