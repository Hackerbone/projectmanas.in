import React from "react";
import sponsors from "../../assets/Data/sponsors";

export default function Sponsors() {
  return (
    <div className="sponsors" id="sponsors">
      <h2>Sponsors</h2>

      <div className="grid-container">
        {sponsors.map((item, idx) => (
          <div className="grid-item">
            <img
              className="grid-img"
              src={item.image}
              alt={`project-${idx + 1}`}
            />
          </div>
        ))}
        <div className="grid-item">
          <p>Sponsor Us {">"}</p>
        </div>
      </div>
    </div>
  );
}
