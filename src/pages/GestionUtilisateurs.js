import React from 'react'
import Layout from '../components/Layout'
import TabHead from '../components/TabHead'
import TabLine from '../components/TabLine'
import { users } from '../datas/docInfo'

function GestionUtilisateurs() {
  return (
    <Layout>
       <div>
      <div className="custom-bar">
          <button className="general-btn">Ajouter fichier zip</button>
          <button className="general-btn">Ajouter fichier csv</button>
          <button className="junk">Voir corbeille</button>
        </div>
      </div>

      {users.length ? (
          <>
            <TabHead col1={"Nom"} col2="Prénom" three/>
            {users.map((doc, idx) => (
              <TabLine {...doc} gestion affect key={idx} />
            ))}
          </>
        ) : (
          <div className="no-doc">
            Aucun Utilisateur.
          </div>
  )
}
</Layout>
)}

export default GestionUtilisateurs