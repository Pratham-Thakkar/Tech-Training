import { useState, useEffect, ChangeEvent } from "react";

export const News = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [userValue, setUserValue] = useState("");

  useEffect(() => {
    const test = async () => {
      let api = userValue
        ? `https://hn.algolia.com/api/v1/search/?query=${userValue}`
        : "https://hn.algolia.com/api/v1/search";
      console.log(api);

      const res = await fetch(api);
      const data = await res.json();
      setData(data.hits);
      setIsLoading(false);
    };
    test();
  }, [userValue]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleSearch() {
    const value = query;
    setUserValue(value);
  }

  return (
    <div>
      <input type="text" value={query} onChange={(e) => handleChange(e)} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      {isLoading
        ? "Loading"
        : data.map((news: any) => {
            return <h1>{news.title}</h1>;
          })}
    </div>
  );
};
