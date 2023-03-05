import React from 'react'
import Layout from '../components/Layout'
import TabHead from '../components/TabHead'
import TabLine from '../components/TabLine'
import { groups } from '../datas/docInfo'

function GestionGroupes() {
  return (
    <Layout>
         <div>
      <div className="custom-bar">
          <button className="general-btn">Ajouter groupe</button>
          <button className="junk">Voir corbeille</button>
        </div>
      </div>

      {groups.length ? (
          <>
            <TabHead col1={"Nom"} col2="Prénom" three/>
            {groups.map((doc, idx) => (
              <TabLine {...doc} gestion add key={idx} />
            ))}
          </>
        ) : (
          <div className="no-doc">
            Aucun Utilisateur.
          </div>
  )
}
    </Layout>
    
  )
}

export default GestionGroupes