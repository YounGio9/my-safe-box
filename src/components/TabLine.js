import React, { useState } from "react";
import "../styles/TabLine.css";
import file from "../assets/Vectorfile.png";
import del from "../assets/Vectordelete.png";
import download from "../assets/Vectordownload.png";
import folder from "../assets/Vectorfolder.png";

function TabLine({ type, name, date, checkedEvery, setCheckedEvery }) {
  const icon = {
    folder,
    file,
  };

  const [checkValue, setCheckValue] = useState(false);
  return (
    <div className="TabLine-wrapper">
      <div className="TabLine">
        <input
          type="checkbox"
          onChange={() => {
            setCheckValue(!checkValue);
            setCheckedEvery(false)
          }}
          className="Tab-checkbox"
          checked={checkValue || checkedEvery}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={icon[type]} className="Tab-icon" alt="file" />
          <span className="tab-title">
            {name}{" "}
            <span style={{ visibility: "hidden" }}>
              histoire d&apos;aligner
            </span>
          </span>
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
