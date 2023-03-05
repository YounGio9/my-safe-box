import React from "react";
import Layout from "../components/Layout";
import { docsInfo } from "../datas/docInfo";
import TabHead from "../components/TabHead";
import TabLine from "../components/TabLine";

function GestionDocuments() {
  return (
    <Layout>
      <div>
      <div className="custom-bar">
          <button className="general-btn">Ajouter fichier zip</button>
          <button className="general-btn">Ajouter fichier csv</button>
          <button className="junk">Voir corbeille</button>
        </div>
      </div>

      {docsInfo.length ? (
          <>
            <TabHead col1={"Titre & classe"} col2="Dernière date d'éxécution" />
            {docsInfo.map((doc, idx) => (
              <TabLine {...doc} gestion key={idx} />
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
    </Layout>
  );
}

export default GestionDocuments;
