import React, { useContext } from "react";
import "../styles/TabHead.css";
import { DocsContext } from "./DocsContext";


function TabHead({ col1, col2, three = false}) {


  const {checkedEvery, setCheckedEvery} = useContext(DocsContext)
  return (
    <div className="TabLine-wrapper TabHead">
      <div className="TabLine">
        <input
          type="checkbox"
          className="Tab-checkbox"
          onChange={() => setCheckedEvery(!checkedEvery)}
          checked={checkedEvery}
        />
        <span className="Tab-date" style={{marginRight: three ? '11%' : 'auto'}}>{col1}</span>
        <span className="Tab-date">{col2}</span>
        <span style={{ visibility: 'hidden' }}>tmp</span>
        {three && <span></span>}
      </div>
    </div>
  );
}

export default TabHead;
