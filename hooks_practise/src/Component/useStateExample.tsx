import { useState } from "react";

export function UseStateExample() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {[1].map((e) => {
        console.log("rendered");
      })}
      {isVisible && <h1>I'm visible</h1>}
      <button
        onClick={() => {
          setIsVisible((isVisible) => !isVisible);
        }}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
    </>
  );
}
