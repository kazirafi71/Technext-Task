import AllPosts from "../pages/AllPosts/AllPosts";
import PostDetails from "../pages/PostDetails/PostDetails";
import Profile from "../pages/Profile/Profile";
import UserList from "../pages/UserList/UserList";
import UserProfile from "../pages/UserProfile/UserProfile";

const routes = [
  {
    path: "/",
    component: AllPosts,
    exact: true,
  },
  {
    path: "/profile",
    component: Profile,
    exact: true,
  },
  {
    path: "/user-profile/:userId",
    component: UserProfile,
    exact: true,
  },
  {
    path: "/user-list",
    component: UserList,
    exact: true,
  },
  {
    path: "/posts/:postId",
    component: PostDetails,
    exact: true,
  },
];

export default routes;
