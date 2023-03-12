import React, { useContext, useEffect } from "react"
import SecondBanner from "./SecondBanner"
import "../styles/Layout.css"
import { DocsContext } from "./DocsContext"

function Layout({ children }) {
  const { setCheckeds } = useContext(DocsContext)

  useEffect(() => {
    setCheckeds([])
  }, [setCheckeds])

  return (
    <div className="Layout">
      <SecondBanner />
      {children}
    </div>
  )
}

export default Layout
