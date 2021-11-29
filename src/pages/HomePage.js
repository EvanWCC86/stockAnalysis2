import React from 'react'
import ControlPanel from '../components/ControlPanel'

import Header from '../components/Header'
import Navbar from '../components/Narbar'
import News from '../components/News'
import SearchForm from '../components/SearchForm'
import SubNavbar from '../components/SubNavbar'
import TimeTravel from '../components/TimeTravel'
import Trends from '../components/Trends'
import StockEv from '../components/StockEv'
import styled from 'styled-components'
import Sidebar2 from '../components/Sidebar2'




const HomePage = () => {
  
  return (
    <div>
      <Header />
      <Navbar />
      <Sidebar2 />
      <SubNavbar />
      <SearchForm />
     
      {/* main section */}
      <MainSection>
          <Left>
              <TimeTravel />
              <Trends />
          </Left>
          <Right>
              <ControlPanel />
              <StockEv />
              <News />
          </Right>
      </MainSection>
    </div>
  )
}

export default HomePage

const MainSection = styled.div `
    max-width:1200px;
    margin:auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
`
const Left = styled.div ``
const Right = styled.div ``