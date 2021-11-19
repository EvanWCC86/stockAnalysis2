import React from 'react'
import styled from 'styled-components'
const DocModel = () => {
  return (
    <Container>
        <li>
            <a>Available data</a>
        </li>
        <li>
            <a>API & USER GUIDE</a>
        </li>
        <li>
            <a>Formula Guide</a>
        </li>
    </Container>
  )
}

export default DocModel

const Container = styled.ul `
    box-shadow:var(--shadow);
    display: flex;
    flex-direction: column;
    z-index: 10;
    align-items: center;
    justify-content: space-between;
    padding:20px 30px;
    background-color:var(--background-color3);
    position:absolute;
    top:90px;
    
    li{
        list-style: none;
    }
    a{
        text-decoration:none;
    }
`
