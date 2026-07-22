import React from 'react'
import HireCreateTeam from '../components/HireCreateTeam'
import HighQuality from '../components/HighQuality'
import DiverseTechnology from '../components/DiverseTechnology'
import SoftwareComponents from '../components/SoftwareComponents'
import Companies from '../components/Companies'
import HireProcess from '../components/HireProcess'

import ClientsInfoMain from '../components/ClientsInfoMain'
import HireGuide from '../components/HireGuide'

const Home = () => {
  return (
    <main>
      <HireCreateTeam/>
      <HighQuality/>
      <DiverseTechnology/>
      <SoftwareComponents/>
      <Companies/>
      <HireProcess/>
      <HireGuide/>
      <ClientsInfoMain/>
    </main>
  )
}

export default Home