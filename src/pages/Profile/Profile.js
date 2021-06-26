import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetUserInfo } from "../../redux/post/postAction";
import { Typography } from "@material-ui/core";
import ProfileComp from "../../components/ProfileComp/ProfileComp";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.post);
  // console.log(userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetUserInfo(2));
  }, []);

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
        <Row>
          <Col>
            <ProfileComp />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
