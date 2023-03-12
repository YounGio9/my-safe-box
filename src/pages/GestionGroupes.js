import React, { useContext } from "react"
import Layout from "../components/Layout"
import TabHead from "../components/TabHead"
import TabLine from "../components/TabLine"
import { DocsContext } from "../components/DocsContext"
import { groups } from "../datas/docInfo"

function GestionGroupes() {
  const { activeDocs } = useContext(DocsContext)

  return (
    <Layout docs={groups}>
      <div>
        <div className="custom-bar">
          <button className="general-btn">Ajouter groupe</button>
          <button className="junk">Voir corbeille</button>
        </div>
      </div>

      {activeDocs.length ? (
        <>
          <TabHead
            col1={"Nom"}
            col2="Prénom"
            three
            lines={groups.map(({ id }) => id)}
          />
          {activeDocs.map((doc, idx) => (
            <TabLine {...doc} gestion add key={idx} />
          ))}
        </>
      ) : (
        <div className="no-doc">Aucun groupe.</div>
      )}
    </Layout>
  )
}

export default GestionGroupes
