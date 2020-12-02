import useFetch from "../api/api";
const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=213327409d384371851777e7c7f78dfe";

function NewsCard() {
  const sources = useFetch(url);
  console.log(sources);
  return (
    <div className="news-card">
      App
      <h2 className="news-header">News Daily</h2>
      <ul className="news-list">
        {sources.length > 0 ? (
          sources.map((item) => (
            <li key={Math.random()}>
              <h4>{item.title}</h4>
              <p>
                {item.source.name} <a href={item.url}>Read more</a>
              </p>
              <img
                src={item.urlToImage}
                alt="news feed"
                className="news-card-img"
              />
            </li>
          ))
        ) : (
          <h1>Loading more...</h1>
        )}
      </ul>
    </div>
  );
}

export default NewsCard;
