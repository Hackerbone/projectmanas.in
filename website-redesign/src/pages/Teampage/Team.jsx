import React from "react";
import Member from "../../components/Team/Member";

export default function Team() {
  return (
    <div className="teampage-container">
      <div className="teampage-header-container">
        <h1>Project Manas Team 2021</h1>
      </div>
      <div className="team">
        <span className="">
          Meet the <b>Team</b>{" "}
        </span>
        <div className="team-table">
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />

          <Member />
          <Member />
        </div>
      </div>
    </div>
  );
}
