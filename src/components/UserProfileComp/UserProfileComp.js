import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetUserInfo } from "../../redux/post/postAction";
import { Typography, Paper, Button } from "@material-ui/core";
import ProfileComp from "../../components/ProfileComp/ProfileComp";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchGetSingleUserPosts } from "../../redux/post/postAction";

const UserProfileComp = () => {
  const { userId } = useParams();
  const { userInfo } = useSelector((state) => state.post);
  // console.log(userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetUserInfo(userId));
  }, []);

  const { singleUserPosts } = useSelector((state) => state.post);
  const [up, setUp] = useState(false);

  //   console.log(singleUserPosts);

  useEffect(() => {
    dispatch(fetchGetSingleUserPosts(2));
    setUp(false);
  }, [up]);

  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col className="text-center">
            <img
              style={{ width: "200px", height: "200px" }}
              className="rounded-circle"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt=""
            />
            <Typography className="pt-3" variant="h6">
              {userInfo && userInfo.name}
            </Typography>
            <Typography className="py-3" variant="subtitle1">
              {userInfo && userInfo.email}
            </Typography>
            <hr />
          </Col>
        </Row>
      </Container>
      <Container>
        <Typography className="text-center py-3" variant="h4" color="secondary">
          {userInfo && userInfo.name}'s Posts
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

export default UserProfileComp;
