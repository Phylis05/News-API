import { useEffect, useState } from "react";

function useFetch(url) {
  const [headlines, setHeadlines] = useState({ sources: [] });

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/sources?apiKey=213327409d384371851777e7c7f78dfe"
    )
      .then((response) => response.json())
      .then((data) => {
        setHeadlines(data);
      });
  }, []);

  return headlines;
}

export default useFetch;
