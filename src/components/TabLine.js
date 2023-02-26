import React from "react";
import "../styles/TabLine.css";
import file from "../assets/Vectorfile.png";
import del from "../assets/Vectordelete.png";
import download from "../assets/Vectordownload.png";
import folder from "../assets/Vectorfolder.png";

function TabLine({ type, name, date }) {
  const icon = {
    folder,
    file,
  };
  return (
    <div className="TabLine-wrapper">
      <div className="TabLine">
        <input type="checkbox" className="Tab-checkbox" />
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={icon[type]} className="Tab-icon" alt="file" />
          <span className="tab-title">{name}</span>
        </div>

        <span className="Tab-date">{date}</span>

        <div>
          <img src={del} alt="delete" className="Tab-icon" />
          <img src={download} alt="download" className="Tab-icon" />
        </div>
      </div>
    </div>
  );
}

export default TabLine;
