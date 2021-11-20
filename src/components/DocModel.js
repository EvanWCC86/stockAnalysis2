import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const DocModel = () => {
  return (
    <Container>
        <li>
            <Link to="/">Available data</Link>
        </li>
        <li>
            <Link to="/">API & USER GUIDE</Link>
        </li>
        <li>
            <Link to="/">Formula Guide</Link>
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
        margin-bottom: 15px;
    }
    a{
        text-decoration:none;
        color:white;
    }
`
