import React, { useContext } from "react"
import { DocsContext } from "../components/DocsContext"
import Layout from "../components/Layout"
import TabHead from "../components/TabHead"
import TabLine from "../components/TabLine"
import { users } from "../datas/docInfo"

function GestionUtilisateurs() {
  const { activeDocs } = useContext(DocsContext)

  return (
    <Layout docs={users}>
      <div>
        <div className="custom-bar">
          <button className="general-btn">Ajouter fichier zip</button>
          <button className="general-btn">Ajouter fichier csv</button>
          <button className="junk">Voir corbeille</button>
        </div>
      </div>

      {activeDocs.length ? (
        <>
          <TabHead
            col1={"Nom"}
            col2="Prénom"
            three
            lines={users.map(({ id }) => id)}
          />
          {activeDocs.map((doc, idx) => (
            <TabLine {...doc} gestion affect key={idx} />
          ))}
        </>
      ) : (
        <div className="no-doc">Aucun Utilisateur.</div>
      )}
    </Layout>
  )
}

export default GestionUtilisateurs
