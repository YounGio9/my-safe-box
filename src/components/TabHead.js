import React from "react";
import "../styles/TabHead.css";


function TabHead({ col1, col2, setCheckedEvery, checkedEvery }) {
  console.log(checkedEvery);
  return (
    <div className="TabLine-wrapper TabHead">
      <div className="TabLine">
        <input
          type="checkbox"
          className="Tab-checkbox"
          onChange={() => setCheckedEvery(!checkedEvery)}
          checked={checkedEvery}
        />
        <span className="Tab-date">{col1}</span>
        <span className="Tab-date">{col2}</span>
        <span style={{ visibility: 'hidden' }}>tmp</span>
      </div>
    </div>
  );
}

export default TabHead;
