import React from "react";
import db from "../news.json";

// "title": "Witamy!",
// "content": "Witamy na stronie Firmy Przewozowej BMC",
// "date": "31 Styczeń 2018",
// "show": true

type BMCNews = {
  title: string;
  content: string;
  date: string;
  show: boolean;
};

const firstTenNews = Object.values(db.news)
  .filter((n) => n.show)
  .reverse()
  .slice(0, 10);

export const NewsPage: React.FC = () => {
  return (
    <div className="dynamic-content">
      <div className="news-section">
        {firstTenNews.map((news, index) => {
          const contentElements = news.content
            .split("\n")
            .map((a, i) => <div key={`${a}-${i}`}>{a}</div>);
          return (
            <div key={index} className="news-wrapper">
              <div>
                <img src="/bmc-web/stuff/news-icon-1.png" />
              </div>
              <div className="news-body">
                <div className="news-title">{news.title}</div>
                <div className="news-content">{contentElements}</div>
                <div className="news-date">{news.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
