import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

export function UseRefExample() {
  const [comments, setComments] = useState<Array<any>>([]);
  const scrollref = useRef<HTMLDivElement | null>(null);

  const fetchComments = useCallback(async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments`
    );

    setComments([...comments, ...res.data]);
  }, [comments]);
  useEffect(() => {
    console.log("use effect called");
    setInterval(() => {
      fetchComments();
    }, 6000);
    scrollref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [fetchComments]);
  return (
    <>
      <div ref={scrollref} style={{ height: "300px", overflowY: "scroll" }}>
        {comments.map((comment) => {
          return <h6>{comment.name}</h6>;
        })}
      </div>
    </>
  );
}
