import { useState } from "react";

export const CharacterCounter = () => {
  const [content, setContent] = useState("");

  return (
    <>
      <textarea
        value={content}
        rows={5}
        cols={40}
        onChange={(e) => setContent(e.target.value)}
      />

      <h3>
        You have entered {content.length} letters and{" "}
        {
          content.split(" ").filter((words) => {
            return words.trim() != "";
          }).length
        }{" "}
        words.
      </h3>
    </>
  );
};
