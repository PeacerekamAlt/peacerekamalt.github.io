import React from "react";
import { Link } from "react-router-dom";
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

const firstTwoNews = Object.values(db.news)
  .filter((n) => n.show)
  .reverse()
  .slice(0, 2);

export const MainPage: React.FC = () => {
  return (
    <div className="dynamic-content">
      <div className="news-section">
        {firstTwoNews.map((news, index) => {
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
      <div className="about-company-section">
        <div>
          <img src="/bmc-web/stuff/stripes.png" />
        </div>
        <div>
          <div className="about-company-header">Firma Przewozowa BMC</div>
          <div>Busy firmy BMC kursują na trasach:</div>
          <ul>
            <li>Wieliczka - Gdów</li>
            <li>Gdów - Bochnia</li>
          </ul>
          <div>Firma zajmuje się też transportem grup zorganizowanych.</div>
          <div>
            Informacje kontaktowe można znaleźć w zakładce{" "}
            <Link to="/contact">Kontakt</Link>.
          </div>
        </div>
      </div>
    </div>
  );
};
