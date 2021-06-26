import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const PostDetails = () => {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState("");
  const [comments, setComments] = useState("");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "get",
    })
      .then((response) => response.json())
      .then((json) => setPostDetails(json));
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setComments(json);
      });
  }, []);

  return (
    <Container className="py-5">
      <Row>
        <Col className="text-center">
          <Typography variant="h4" color="secondary">
            Post Details Here
          </Typography>
          <hr />
          <Typography className="py-3" variant="h5" color="primary">
            {postDetails && postDetails.title}
          </Typography>
          <Typography className="py-3" variant="subtitle1">
            {postDetails && postDetails.body}
          </Typography>
        </Col>
      </Row>
      <hr />

      <Typography variant="h4" color="secondary">
        Comments
      </Typography>
      <hr />
      {comments &&
        comments.map((val) => {
          return (
            <Paper className="p-4 shadow my-2">
              <Typography variant="subtitle1" color="primary">
                {val.name}
              </Typography>
              <Typography
                className="pb-3"
                variant="subtitle2"
                color="secondary"
              >
                {val.email}
              </Typography>
              <Typography>{val.body}</Typography>
            </Paper>
          );
        })}
    </Container>
  );
};

export default PostDetails;
