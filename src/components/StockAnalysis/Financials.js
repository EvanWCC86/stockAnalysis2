import React from 'react'

import styled from 'styled-components'
import IncomeStatement from './IncomeStatement'
import BalanceStament from './BalanceStament'
import CashFlow from './CashFlow'

const Financials = () => {
  
  
    
  
  
  

  return (
    <Container>
      <IncomeStatement />
      <BalanceStament />
      <CashFlow />
    </Container>
  )
}

export default Financials

const Container = styled.div `
  
`



