import { useEffect, useState } from "react";

function useHeadlines(url) {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setHeadlines(data);
        console.log(data);
      });
  }, []);

  return headlines;
}

export default useHeadlines;
