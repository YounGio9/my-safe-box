import React, { useContext, useEffect } from "react"
import SecondBanner from "./SecondBanner"
import "../styles/Layout.css"
import { DocsContext } from "./DocsContext"

function Layout({ children, docs }) {
  const { setActiveDocs } = useContext(DocsContext)
  const { setCheckeds } = useContext(DocsContext)

  useEffect(() => {
    setActiveDocs(docs)
    // eslint-disable-next-line
  }, [])

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
