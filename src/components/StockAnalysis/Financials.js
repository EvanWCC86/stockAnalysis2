import React from 'react'

import styled from 'styled-components'
import IncomeStatement from './IncomeStatement'
import BalanceStament from './BalanceStament'
import CashFlow from './CashFlow'

const Financials = ({CashUrl, BalanceUrl,IncUrl}) => {
  
  
    
  
  
  

  return (
    <Container>
      <IncomeStatement IncUrl={IncUrl} />
      <BalanceStament BalanceUrl={BalanceUrl} />
      <CashFlow CashUrl={CashUrl} />
    </Container>
  )
}

export default Financials

const Container = styled.div `
  
`



