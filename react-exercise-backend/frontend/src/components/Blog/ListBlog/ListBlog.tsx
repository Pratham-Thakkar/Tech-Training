import { useNavigate } from "react-router";
import { NavBar } from "../../NavBar/NavBar";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import parser from "html-react-parser";
import "./ListBlog.css";

import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { useAuth } from "../../context/AuthContext";
import jwtDecode from "jwt-decode";

interface JwtPayload {
  payLoad: Record<string, string>;
}

export const ListBlog = () => {
  const auth = useAuth();
  const data: JwtPayload = jwtDecode(auth?.token!);
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Array<Record<string, string>> | []>([]);
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await axios.get("http://localhost:3001/listBlog");
        if (res.status === 200) setBlogs(res.data.message);
      } catch (err) {
        if (err instanceof AxiosError) alert(err.response?.data.message);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <>
      <NavBar>
        <button onClick={() => navigate("/create-blog")}>Create Blog</button>
        <h6>Welcome, {data?.payLoad!.name}</h6>

        <button
          onClick={() => {
            auth?.setToken(null);
          }}
        >
          Logout
        </button>
      </NavBar>

      {blogs.length > 0 && (
        <div className="blog-container">
          {blogs.map((blog: any) => (
            <Card
              style={{
                width: "45%",
                padding: "0.5rem",
              }}
            >
              <CardBody>
                <CardTitle tag="h1">{blog.blog_title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h4">
                  {blog.createdBy}
                </CardSubtitle>
                {parser(`${blog.substring}...`)}
                <h6 style={{ display: "inline-block" }}>Tags:</h6>
                {blog.tags &&
                  blog.tags.length > 0 &&
                  blog.tags instanceof Array &&
                  blog.tags.map((tag: string) => (
                    <span
                      style={{ margin: "0.5%" }}
                      className="badge rounded-pill text-bg-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                <Button
                  style={{
                    backgroundColor: "blue",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "2%",
                  }}
                  onClick={() => {
                    navigate(`/blog/${blog.createdBy}/${blog.blog_id}`);
                  }}
                >
                  Read Blog
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};
