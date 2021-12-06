import React from 'react'

import LineChart from '../charts/LineChart'
import StockChart from '../StockChart'
import styled from 'styled-components'
const Charts = () => {
  return (
    <>
      <ChartSection>
        <StockChart />
      </ChartSection>
      <LineChart />
    </>
  )
}

export default Charts

const ChartSection = styled.div `
  margin:20px auto;
`
