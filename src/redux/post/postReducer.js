import {
  DELETE_SINGLE_USER_POST,
  GET_SINGLE_USER,
  GET_SINGLE_USER_POSTS,
  GET__POST,
} from "./postTypes";

const init = {
  allPosts: "",
  userInfo: "",
  singleUserPosts: "",
};

export const postReducer = (state = init, action) => {
  switch (action.type) {
    case GET__POST:
      return {
        ...state,
        allPosts: action.payload,
      };
    case GET_SINGLE_USER:
      return {
        ...state,
        userInfo: action.payload,
      };
    case GET_SINGLE_USER_POSTS:
      return {
        ...state,
        singleUserPosts: action.payload,
      };
    case DELETE_SINGLE_USER_POST:
      return {
        ...state,
        singleUserPosts: action.payload,
      };

    default:
      return state;
  }
};
