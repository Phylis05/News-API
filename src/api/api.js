import { useEffect, useState } from "react";

function useFetch(url) {
  const [headlines, setHeadlines] = useState({ articles: [] });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setHeadlines(data);
      });
  }, []);

  return headlines;
}

export default useFetch;
