import React, { useCallback, useContext } from "react"
import "../styles/TabHead.css"
import { DocsContext } from "./DocsContext"

function TabHead({ col1, col2, three = false, lines }) {
  const { checkeds, setCheckeds } = useContext(DocsContext)
  // const [checkedEvery, setcheckedEvery] = useState(false)

  const handleChange = useCallback(
    (e) => setCheckeds(e.target.checked ? [...lines] : []),

    [lines, setCheckeds]
  )

  return (
    <div className="TabLine-wrapper TabHead">
      <div className="TabLine">
        <input
          type="checkbox"
          className="Tab-checkbox"
          onChange={handleChange}
          checked={checkeds.length === lines.length}
        />
        <span className="Tab-date">{col1}</span>
        <span className="Tab-date">{col2}</span>
        <span style={{ visibility: "hidden" }}>tmp</span>
        {three && <span></span>}
      </div>
    </div>
  )
}

export default TabHead
