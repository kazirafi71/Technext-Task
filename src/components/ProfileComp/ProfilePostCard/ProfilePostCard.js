import React, { useEffect } from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetSingleUserPosts } from "../../../redux/post/postAction";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProfilePostCard = () => {
  const { singleUserPosts } = useSelector((state) => state.post);
  const [up, setUp] = useState(false);

  //   console.log(singleUserPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetSingleUserPosts(2));
    setUp(false);
  }, [up]);

  const deletePostHandler = (postId) => {
    const newData = singleUserPosts.filter((val) => {
      return val.id != postId;
    });
    console.log(newData);
    dispatch({ type: "DELETE_SINGLE_USER_POST", payload: newData });
  };
  return (
    <div>
      <Container>
        <Typography className="text-center py-3" variant="h4" color="secondary">
          Your Posts
        </Typography>
        <Row>
          {singleUserPosts &&
            singleUserPosts.map((val) => {
              return (
                <Col key={val.id} className="p-3 text-center" md={4}>
                  <Paper style={{ height: "370px" }} className="p-4">
                    <Typography className="pb-3" variant="h6">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/posts/${val.id}`}
                      >
                        {val.title}
                      </Link>
                    </Typography>
                    <p>{val.body}</p>
                    <div className="pt-3">
                      <Button
                        className="mx-2"
                        color="primary"
                        variant="outlined"
                      >
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/posts/${val.id}`}
                        >
                          post Details
                        </Link>
                      </Button>

                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => deletePostHandler(val.id)}
                      >
                        Delete Post
                      </Button>
                    </div>
                  </Paper>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePostCard;
