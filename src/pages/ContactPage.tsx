import React from "react";

export const ContactPage: React.FC = () => {
  return (
    <div className="dynamic-content">
      <div className="contact-section">
        <div className="contact-section-layout">
          <div className="flex">
            <div>
              <img src="/stuff/stripes.png" />
            </div>
            <div>
              <div className="contact-section-header">Kontakt</div>
              <table>
                <tbody>
                  <tr>
                    <td>Telefon:</td>
                    <td>+48 601 520 289</td>
                  </tr>
                  <tr>
                    <td>Adres e-mail:</td>
                    <td>
                      <a href="mailto:bmc.wieliczka@op.pl">
                        bmc.wieliczka@op.pl
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div>
              <b>Adres firmy:</b>
            </div>
            <div>32-020 Wieliczka</div>
            <div>ul. Niepołomska 11</div>
          </div>
        </div>
      </div>
    </div>
  );
};
