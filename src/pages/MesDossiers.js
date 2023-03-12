import React, { useContext } from "react"
import Layout from "../components/Layout"
import "../styles/MesDossiers.css"
import { foldersInfos } from "../datas/docInfo"
import TabHead from "../components/TabHead"
import TabLine from "../components/TabLine"
import { DocsContext } from "../components/DocsContext"

function MesDossiers() {
  const { activeDocs } = useContext(DocsContext)
  return (
    <Layout docs={foldersInfos}>
      <div className="MesDossiers">
        <div className="custom-bar">
          <button className="general-btn">Ajouter un dossier</button>
          <button className="junk">Voir corbeille</button>
        </div>

        {activeDocs.length ? (
          <>
            <TabHead
              col1={"Dossiers"}
              col2="Dernière date de changement"
              lines={foldersInfos.map(({ id }) => id)}
            />
            {activeDocs.map((doc, idx) => (
              <TabLine {...doc} fileType={undefined} key={idx} />
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

export default MesDossiers
