import jwtDecode from "jwt-decode";
import { useAuth } from "../../context/AuthContext";
import { NavBar } from "../../NavBar/NavBar";
import ReactQuill from "react-quill";
import "../../../../node_modules/react-quill/dist/quill.snow.css";
import { useMemo, useState } from "react";
import axios, { AxiosError } from "axios";
import { FormGroup, Input, Label } from "reactstrap";
import "./CreateBlog.css";
import { useNavigate } from "react-router";

interface JwtPayload {
  payLoad: Record<string, string>;
}

export const CreateBlog = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState<
    Array<Record<string, string>> | []
  >([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isPublish, setIsPublish] = useState(true);
  const [value, setValue] = useState("");
  const [tags, setTags] = useState<Array<string> | []>([]);
  const data: JwtPayload = jwtDecode(auth?.token!);

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  useMemo(async () => {
    const res = await axios.get("http://localhost:3001/categories");
    setCategories(res.data.allCategories);
  }, []);

  async function handleSave() {
    try {
      const bodyData = {
        title,
        content,
        categoryId: selectedCategory,
        createdBy: data.payLoad.userId,
        isPublish,
        tags,
      };
      const res = await axios.post(
        "http://localhost:3001/createBlog",
        bodyData
      );
      if (res.status === 200) {
        setContent("");
        setTitle("");
        setTags([]);
        setSelectedCategory("");
        setIsPublish(false);
        alert("Blog added sucessfully");
      }
    } catch (err) {
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  }

  return (
    <>
      <NavBar>
        <button onClick={() => navigate("/list-blog")}>List Blog</button>
        <button onClick={() => navigate(`/${data.payLoad.userId}/my-blog`)}>
          My Blog
        </button>
        <h6>Welcome, {data?.payLoad!.name}</h6>

        <button
          onClick={() => {
            auth?.setToken(null);
          }}
        >
          Logout
        </button>
      </NavBar>

      <div>
        <h3 className="create-blog-title">Create Blog</h3>
        <label className="title-label" htmlFor="title">
          Title:
        </label>

        <input
          className="title-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="category-label" htmlFor="category">
          Select a category:{" "}
        </label>
        <select
          className="category-select"
          name="category"
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.length > 0 &&
            categories.map(
              (category: Record<string, string>, index: number) => {
                return (
                  <option key={index + 1} value={category.category_id}>
                    {category.category_type}
                  </option>
                );
              }
            )}
        </select>

        <ReactQuill
          className="react-quill"
          modules={modules}
          theme="snow"
          placeholder="content goes here..."
          value={content}
          onChange={setContent}
        />
        <label htmlFor="tags">Tags: </label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setTags([...tags, value]);
              setValue("");
            }
          }}
        />

        <div>
          {tags.length > 0 &&
            tags.map((tag) => (
              <span
                className="badge rounded-pill text-bg-primary"
                onClick={(e) => {
                  const newtags = tags;
                  const deletedValue = (e.target as HTMLInputElement)
                    .childNodes[0].nodeValue;
                  setTags(newtags.filter((tag) => tag !== deletedValue));
                }}
              >
                {tag}
              </span>
            ))}
        </div>

        <FormGroup switch>
          <Label className="check-label" check>
            Publish Blog
          </Label>
          <Input
            className="publish-switch"
            type="switch"
            checked={isPublish}
            onClick={() => {
              setIsPublish(!isPublish);
            }}
          />
        </FormGroup>

        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </>
  );
};
