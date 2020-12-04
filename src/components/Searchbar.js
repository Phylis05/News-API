import { useEffect, useState } from "react";

const url =
  "https://newsapi.org/v2/sources?apiKey=213327409d384371851777e7c7f78dfe";
function Searchbar({ sources }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const arr = [];

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    sources.map((item) => {
      if (item.name.toLowerCase().indexOf(searchTerm.toLowerCase())) {
        arr.push(item);
        console.log(item.name);
        console.log(searchTerm);
      }
      // item.name.indexOf(searchTerm);
    });
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
    </div>
  );
}

export default Searchbar;
