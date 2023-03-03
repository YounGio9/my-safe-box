import React from "react";
import Box from "../components/Box";
import Layout from "../components/Layout";
import TabHead from "../components/TabHead";
import TabLine from "../components/TabLine";
import { docsInfo } from "../datas/docInfo.js";
import "../styles/Accueil.css";

function Accueil() {

  return (
    <Layout>
      <div className="Accueil">
        <div className="box-container">
          <Box
            color={"rgba(41, 181, 211, 0.56)"}
            type={"people"}
            value={50}
            description={"Employes"}
          />
          <Box
            color={"rgba(99, 42, 192, 0.44)"}
            type={"folder"}
            value={50}
            description="Documents"
          />
          <Box
            color="rgba(19, 100, 42, 0.44)"
            type="calendar"
            value="01/05/22"
            description="Derniers partages"
          />
        </div>

        <p className="tab-description">Documents recents</p>
        <TabHead
          col1={"Documents"}
          col2="Dernière date de changement"
        />
        {docsInfo.slice(0, 3).map((doc, idx) => (
          <TabLine
            key={idx}
            date={doc.date}
            type={doc.type}
            name={doc.name}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Accueil;
