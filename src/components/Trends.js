import React from 'react'
import styled from 'styled-components'

import TrendChartCard from './TrendChartCard';
const Trends = () => {
  return (
   <TrendSection>
       <Container>
           <Header>
                <p>Matched Trends <span>3</span> of <span>10</span></p>
                <select>
                    <option value="td">Line Ticker</option>
                    <option value="rbc">RBC</option>
                    <option value="cibc">CIBC</option>
                </select>
                <p>Top of book trend</p>
                <select>
                    <option value="td">Next 10 Minutes</option>
                    <option value="rbc">1h</option>
                    <option value="cibc">1day</option>
                </select>
           </Header>
           <TrendChartContainer>
               <TrendChartCard date="Oct 10,2021" time="10:30.31 .500" />
               <TrendChartCard date="Oct 10,2021" time="10:30.31 .500" />
               <TrendChartCard date="Oct 10,2021" time="10:30.31 .500" />
           </TrendChartContainer>
          
       </Container>
   </TrendSection>
  )
}

export default Trends

const TrendSection = styled.section ``
const Container = styled.div ``
const Header = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:20px auto;
    select{
        padding:5px;
    }
`


const TrendChartContainer = styled.div `
    background-color: var(--background-color3);
    padding:20px;
    /* display:flex;
    justify-content: space-between; */
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    box-shadow: var(--shadow);
`
