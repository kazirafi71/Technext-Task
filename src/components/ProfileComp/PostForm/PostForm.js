import { Paper, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import { Col, Container, Row, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [postInfo, setPostInfo] = useState("");
  const [loading, setLoading] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId: 2,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setTitle("");
        setBody("");
        setLoading(false);
        console.log(json);
        setPostInfo(json);
      });
  };
  return (
    <div>
      <Container>
        {postInfo && (
          <Row>
            <Col md={6} className="mx-auto py-4">
              <Paper style={{ height: "200px" }} className="p-4">
                <Typography className="pb-3" variant="h6">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/posts/${postInfo.id}`}
                  >
                    {postInfo.title}
                  </Link>
                </Typography>
                <p>{postInfo.body}</p>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    setTitle(postInfo.title);
                    setBody(postInfo.body);
                  }}
                >
                  Edit
                </Button>
                <Button
                  className="mx-3"
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    setPostInfo("");
                  }}
                >
                  Delete
                </Button>
              </Paper>
            </Col>
          </Row>
        )}
        <Row>
          <Col md={8} className="mx-auto">
            <Paper className="p-4 shadow">
              <Typography
                className="text-center"
                variant="h4"
                color="secondary"
              >
                Post Here
              </Typography>
              <Form onSubmit={formHandler}>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label>
                    Title <span style={{ color: "red" }}>*</span>{" "}
                  </Form.Label>
                  <Form.Control
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                    type="text"
                    placeholder="Enter title"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    Description <span style={{ color: "red" }}>*</span>{" "}
                  </Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setBody(e.target.value);
                    }}
                    value={body}
                    required
                    type="text"
                    placeholder="Enter description"
                  />
                </Form.Group>

                <Button color="primary" variant="contained" type="submit">
                  Submit
                </Button>
                {loading && (
                  <Spinner className="ml-4" animation="border" role="status">
                    <span className="visually-hidden"></span>
                  </Spinner>
                )}
              </Form>
            </Paper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PostForm;
