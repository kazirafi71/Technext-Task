import { GET_SINGLE_USER, GET_SINGLE_USER_POSTS, GET__POST } from "./postTypes";

export const getPost = (allPosts) => {
  return {
    type: GET__POST,
    payload: allPosts,
  };
};
export const getUserInfo = (userInfo) => {
  return {
    type: GET_SINGLE_USER,
    payload: userInfo,
  };
};
export const getSingleUserPosts = (singleUserPosts) => {
  return {
    type: GET_SINGLE_USER_POSTS,
    payload: singleUserPosts,
  };
};

export const fetchGetPost = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => dispatch(getPost(result)))
      .catch((err) => console.log(err));
  };
};
export const fetchGetUserInfo = (userId) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((result) => dispatch(getUserInfo(result)))
      .catch((err) => console.log(err));
  };
};
export const fetchGetSingleUserPosts = (userId) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => res.json())
      .then((result) => dispatch(getSingleUserPosts(result)))
      .catch((err) => console.log(err));
  };
};
