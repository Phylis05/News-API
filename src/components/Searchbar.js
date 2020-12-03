import { useEffect, useState } from "react";
import useFetch from "../api/sources";

const url =
  "https://newsapi.org/v2/sources?apiKey=213327409d384371851777e7c7f78dfe";
function Searchbar() {
  const data = useFetch();
  const sources = data.sources;
  console.log(sources);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = sources.filter((sources) => {
      return (
        sources.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
    });
    setSearchResults(results);
  }, [searchTerm, sources]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Searchbar;
