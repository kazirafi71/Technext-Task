import React, { useState } from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGetPost } from "../../../redux/post/postAction";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const PostCard = () => {
  const [end, setEnd] = useState(10);
  const { allPosts } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetPost());
  }, [end]);

  useEffect(() => {
    AOS.init({
      durations: 6000,
    });
  }, []);

  const showMoreHandler = () => {
    setEnd(end + 10);
  };
  return (
    <div>
      <Container className="py-5">
        <Typography className="text-center py-4" variant="h4" color="secondary">
          All Posts
        </Typography>
        <Row>
          {allPosts &&
            allPosts.slice(0, end).map((val) => {
              return (
                <Col
                  data-aos="fade-up"
                  key={val.id}
                  className="p-3 text-center"
                  md={4}
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/posts/${val.id}`}
                  >
                    <Paper style={{ height: "300px" }} className="p-4">
                      <Typography className="pb-3" variant="h6">
                        {val.title}
                      </Typography>
                      <p>{val.body}</p>
                    </Paper>{" "}
                  </Link>
                </Col>
              );
            })}
        </Row>
        <div className="text-center">
          {allPosts && allPosts.length == end ? null : (
            <Button
              onClick={showMoreHandler}
              variant="contained"
              color="secondary"
            >
              Show More
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default PostCard;
