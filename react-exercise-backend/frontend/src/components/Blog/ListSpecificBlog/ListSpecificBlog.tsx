import axios, { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import parser from "html-react-parser";
import * as emoji from "node-emoji";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Button,
  Input,
  InputGroup,
} from "reactstrap";
import jwtDecode from "jwt-decode";
import { useAuth } from "../../context/AuthContext";

interface JwtPayload {
  payLoad: Record<string, string>;
}

export const ListSpecificBlog = () => {
  const auth = useAuth();
  const data: JwtPayload = jwtDecode(auth?.token!);

  const params = useParams();
  const [blogDetails, setBlogDetails] = useState<Record<string, string> | null>(
    null
  );
  const [reactions, setReactions] = useState<
    Array<Record<string, string>> | []
  >([]);
  const [comment, setComment] = useState("");
  const [listComment, setListComment] = useState<
    Array<Record<string, string>> | []
  >([]);
  const [reactionCount, setReactionCount] = useState<
    Array<Record<string, string>> | []
  >([]);

  const [isCommentAdded, setIsComentAdded] = useState(false);
  const [isReactionAdded, setIsReactionAdded] = useState(false);

  const fetchBlogDetails = useCallback(async () => {
    const blogDetails = await axios.get(
      `http://localhost:3001/listSpecificBlog/${params.id}`
    );
    setBlogDetails(blogDetails.data.projectDetails[0]);
  }, [params.id]);

  const allReactions = useCallback(async () => {
    const reactions = await axios.get(`http://localhost:3001/reactions`);
    setReactions(reactions.data.reactions);
  }, []);

  const reactionOnBlog = useCallback(async () => {
    const reactionsOnBlog = await axios.get(
      `http://localhost:3001/reactions/${params.id}`
    );
    setReactionCount(reactionsOnBlog.data.reactions);
  }, [params.id]);

  const fetchComments = useCallback(async () => {
    const comments = await axios.get(
      `http://localhost:3001/listComments/${params.id}`
    );
    setListComment(comments.data.comments);
  }, [params.id]);
  async function handleReaction(reactionId: string) {
    try {
      const res = await axios.post(`http://localhost:3001/addReaction`, {
        blogId: params.id,
        userId: data?.payLoad!.userId,
        reactionId,
      });
      if (res.status === 200) setIsReactionAdded(!isReactionAdded);
    } catch (err) {
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  }
  async function handleAddComment() {
    try {
      const res = await axios.post("http://localhost:3001/addComment", {
        blogId: params.id,
        userId: data?.payLoad!.userId,
        comment,
      });
      if (res.status === 200) {
        alert("Comment added successfully");
        setIsComentAdded(!isCommentAdded);
        setComment("");
      }
    } catch (err) {
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  }

  useEffect(() => {
    fetchBlogDetails();
    allReactions();
  }, []);

  useEffect(() => {
    reactionOnBlog();
  }, [isReactionAdded]);

  useEffect(() => {
    fetchComments();
  }, [isCommentAdded]);

  return (
    <>
      {blogDetails && (
        <Card
          style={{
            width: "96%",
            backgroundColor: "lemonchiffon",
          }}
        >
          <CardBody>
            <CardTitle
              style={{ textAlign: "center", color: "blue", fontSize: "49px" }}
            >
              {blogDetails.blog_title}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
              style={{
                textAlign: "right",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Written By: {blogDetails.createdBy}
            </CardSubtitle>
            <CardText>{parser(blogDetails.blog_content)}</CardText>
            <ListGroup horizontal>
              {reactions?.length > 0 &&
                reactions.map((reaction) => (
                  <ListGroupItem
                    style={{ cursor: "pointer", textDecoration: "none" }}
                    key={reaction.reaction_id}
                    onClick={() => handleReaction(reaction.reaction_id)}
                  >
                    {emoji.emojify(`:${reaction.reaction_type}:`)}
                    {reactionCount.length > 0 &&
                      reactionCount.map((count) => {
                        return (
                          <span>
                            {count.reaction_id === reaction.reaction_id
                              ? count.count
                              : ""}
                          </span>
                        );
                      })}
                  </ListGroupItem>
                ))}
            </ListGroup>
          </CardBody>
        </Card>
      )}
      <InputGroup
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "3%",
          width: "96%",
        }}
      >
        <Input value={comment} onChange={(e) => setComment(e.target.value)} />
        <Button style={{ backgroundColor: "blue" }} onClick={handleAddComment}>
          Add Comment
        </Button>
      </InputGroup>
      {listComment.length > 0 && (
        <>
          <h4 style={{ marginLeft: "3%" }}>Comments:</h4>
          <div
            style={{
              border: "1px solid black",
              height: "max-content",
              overflow: "hidden",
              padding: "8px",
              width: "95%",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "3%",
            }}
          >
            {listComment.map((eachComment) => {
              return (
                <div key={eachComment.comment_id}>
                  <span>{eachComment.comment_value}</span>
                  <h6 style={{ fontWeight: "bolder" }}>
                    {eachComment.commentor_name}
                  </h6>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
