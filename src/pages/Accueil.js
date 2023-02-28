import React from 'react'
import Box from '../components/Box'
import Layout from '../components/Layout'
import SecondBanner from '../components/SecondBanner'
import TabHead from '../components/TabHead'
import TabLine from '../components/TabLine'
import '../styles/Accueil.css'

function Accueil() {
  return (
    <Layout >
      <div className='Accueil'>
      <div className='box-container'>
        <Box color={'rgba(41, 181, 211, 0.56)'} type={"people"} value={50} description={"Employes"} />
        <Box color={'rgba(99, 42, 192, 0.44)'} type={"folder"} value={50} description="Documents" />
        <Box color="rgba(19, 100, 42, 0.44)" type="calendar" value="01/05/22" description="Derniers partages" />
      </div>
        
      </div>
    </Layout>
    
  )
}

export default Accueil