import { useEffect, useState } from "react";

const NewsComponent = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://api.goperigon.com/v1/all?apiKey=${process.env.VITE_PERIGON_API_KEY}&title=Waste`
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      {news.length > 0 ? (
        news.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))
      ) : (
        <p>No news articles found.</p>
      )}
    </div>
  );
};

export default NewsComponent;
