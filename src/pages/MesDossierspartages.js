import React from "react";
import Layout from "../components/Layout";
import TabHead from "../components/TabHead";
import TabLine from "../components/TabLine";
import { sharedFolders } from "../datas/docInfo";

function MesDossierspartages() {
  return (
    <Layout>
      <div className="MesDossierspartages">
        <div className="custom-bar">
          <button className="junk">Voir corbeille</button>
        </div>

        {sharedFolders.length ? (
          <>
            <TabHead col1={"Dossiers"} col2="Dernière date de changement" />
            {sharedFolders.map((doc, idx) => (
              <TabLine {...doc} key={idx} />
            ))}
          </>
        ) : (
          <div className="no-doc">
            Aucun dossier partagé . Les dossiers partagés vous permettent de
            partagés des documents stockés dans votre coffre fort avec une ou
            plusieurs personnes de votre choix .<br />
            <br /> Vous pouvez décider qui a accès à vos documents et pour
            combien de temps.
          </div>
        )}
      </div>
    </Layout>
  );
}

export default MesDossierspartages;
