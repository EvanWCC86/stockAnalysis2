import React from 'react'
import styled from 'styled-components'

import TimeTravelTable from './TimeTravelTable';
const TimeTravel = () => {
  return (
    <TimeTravelSection>
       <Container>
           <Header>
                
                <h2>Time Travel View</h2>
                <form>
                    
                        
                        <select name="price">
                            <option>book by price</option>
                            <option>6</option>
                            <option>7</option>
                        </select>
                    
                    
                       
                        <select name="exchange">
                            <option>exchange</option>
                            <option>6</option>
                            <option>7</option>
                        </select>
                    
                </form>
           </Header>
           <Tables>
               <TimeTravelTable orderType="buy" buy />
               <TimeTravelTable orderType="sell" />
           </Tables>
       </Container>
   </TimeTravelSection>
  )
}

export default TimeTravel

const TimeTravelSection = styled.section `
    width:100%;

`
const Container = styled.div ``
const Header = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
`



const Tables = styled.div `
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:10px;
`
