import React, { useState } from "react";
import ProfilePostCard from "./ProfilePostCard/ProfilePostCard";
import PostForm from "./PostForm/PostForm";
import { Button } from "@material-ui/core";

const ProfileComp = () => {
  const [showPost, setShowPost] = useState(false);
  const [doPost, setDoPost] = useState(false);

  const showPostHandler = () => {
    setShowPost(true);
    setDoPost(false);
  };
  const doPostHandler = () => {
    setDoPost(true);
    setShowPost(false);
  };
  return (
    <div className="">
      <div className="text-center py-4 mb-5">
        <Button onClick={showPostHandler} variant="contained" color="primary">
          See Your Posts
        </Button>

        <Button
          onClick={doPostHandler}
          className="mx-4"
          variant="outlined"
          color="secondary"
        >
          Do Post Here
        </Button>
      </div>
      {showPost && <ProfilePostCard />}
      {doPost && <PostForm />}
    </div>
  );
};

export default ProfileComp;
