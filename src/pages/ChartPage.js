import React from 'react'
import StockChart from '../components/StockChart'
import styled from 'styled-components'
const ChartPage = () => {
  return (
    <Container>
      <StockChart />
    </Container>
  )
}

export default ChartPage


const Container = styled.div `
    width:100%;
    height:100vh;
    display: grid;
    place-items: center;
    margin:auto;
`
