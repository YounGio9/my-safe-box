import React from "react"
import "../styles/MesDocuments.css"
import Layout from "../components/Layout"
import { docsInfo } from "../datas/docInfo"
import TabHead from "../components/TabHead"
import TabLine from "../components/TabLine"

function MesDocuments() {
  return (
    <Layout>
      <div className="Mes-documents">
        <div className="custom-bar">
          <button className="junk">Voir corbeille</button>
        </div>

        {docsInfo.length ? (
          <>
            <TabHead
              col1={"Documents"}
              col2="Dernière date de changement"
              lines={docsInfo.map(({ id }) => id)}
            />
            {docsInfo.map((doc, idx) => (
              <TabLine {...doc} key={idx} />
            ))}
          </>
        ) : (
          <div className="no-doc">
            Aucun dossier partagé . Les dossiers partagés vous permettent de
            partagés des documents stockés dans votre coffre fort avec une ou
            plusieurs personnes de votre choix .<br />
            <br /> Vous pouvez décider qui a accès à vos documents et pour
            combien de temps .
          </div>
        )}
      </div>
    </Layout>
  )
}

export default MesDocuments
