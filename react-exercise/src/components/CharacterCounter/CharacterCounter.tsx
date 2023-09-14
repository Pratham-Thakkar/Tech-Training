import { useEffect, useState } from "react";

export const CharacterCounter = () => {
  const [content, setContent] = useState("");
  const [charactersLength, setCharactersLength] = useState(0);
  const [wordsLength, setWordsLength] = useState(0);

  useEffect(() => {
    setCharactersLength(content.length);
    setWordsLength(content.split(" ").length - 1);
  }, [content]);

  return (
    <>
      <textarea
        value={content}
        rows={5}
        cols={40}
        onChange={(e) => setContent(e.target.value)}
      />

      <h3>
        You have entered {charactersLength} letters and {wordsLength} words.
      </h3>
    </>
  );
};
