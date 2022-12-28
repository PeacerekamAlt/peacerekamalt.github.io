import React from "react";

export const TicketsPage: React.FC = () => {
  return (
    <div className="dynamic-content">
      <div className="tickets-section">
        Kliknij aby pobrać wniosek dla trasy:
        <div className="download-tickets-table">
          <a
            href="/bmc-web/stuff/wniosek-miesieczny-wieliczka-gdow.pdf"
            target="_blank"
          >
            <div>
              Wieliczka - Gdów
              <img src="/bmc-web/stuff/download.jpg" />
            </div>
          </a>
          <a href="/bmc-web/stuff/wniosek-miesieczny-bochnia-gdow.pdf" target="_blank">
            <div>
              Bochnia - Gdów
              <img src="/bmc-web/stuff/download.jpg" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
