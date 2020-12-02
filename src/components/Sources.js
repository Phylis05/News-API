import useFetch from "../api/api";

const url =
  "https://newsapi.org/v2/sources?apiKey=213327409d384371851777e7c7f78dfe";

export default function NewsCard() {
  const news = useFetch(url);

  return (
    <div className="news-card">
      <h2 className="news-header">News Daily</h2>
      <ul className="news-list">
        {news.length > 0 ? (
          news.map((item) => (
            <li key={item.id}>
              <p>
                <a href={item.url}> {item}</a>
              </p>
            </li>
          ))
        ) : (
          <h1>Loading more...</h1>
        )}
      </ul>
    </div>
  );
}
