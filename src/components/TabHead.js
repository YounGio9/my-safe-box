import React from 'react'
import '../styles/TabHead.css'

function TabHead({col1, col2}) {
  return (
    <div className='TabLine-wrapper TabHead'>
    <div className='TabLine'>
        <input type="checkbox" className="Tab-checkbox" />
         <span className='Tab-date'>{col1}</span>
         <span className='Tab-date'>{col2}</span>
         <span style={{color: 'transparent'}}>tmp</span>
    </div>
         
    </div>
  )
}

export default TabHead