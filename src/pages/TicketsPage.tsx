import React from "react";

export const TicketsPage: React.FC = () => {
  return (
    <div className="dynamic-content">
      <div className="tickets-section">
        Kliknij aby pobrać wniosek dla trasy:
        <div className="download-tickets-table">
          <a
            href="/wniosek-miesieczny-wieliczka-gdow-n.pdf?v=112"
            target="_blank"
          >
            <div>
              Wieliczka - Gdów
              <img src="/download.jpg" />
            </div>
          </a>
          <a href="/wniosek-miesieczny-bochnia-gdow-n.pdf?v=112" target="_blank">
            <div>
              Bochnia - Gdów
              <img src="/download.jpg" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
