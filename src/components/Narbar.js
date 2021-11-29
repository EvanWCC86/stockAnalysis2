import React, {useState} from 'react'
import styled from 'styled-components'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DocModel from './DocModel';
import {Link} from 'react-router-dom'
const Narbar = () => {
    const [docModel, setDocModel] = useState(false)
    const docToggle = () => {
        setDocModel(!docModel)
    }
    const stockMarket = "CAN Equity"
    const dataAccess = "Data Access"

    const handleChange = () => {
        // 
    }
  return (
    <NarbarSection>
        <Container>
            
            <select name="ticker" value={stockMarket} onChange={handleChange}>
                <option value="td">CAN Equity</option>
                <option value="rbc">RBC</option>
                <option value="cibc">CIBC</option>
            </select>
        
                <select name="ticker" value={dataAccess} onChange={handleChange}>
                <option value="td">Data Access</option>
                <option value="rbc">RBC</option>
                <option value="cibc">CIBC</option>
            </select>
        
        
            <Link to="/analysis">Analytics</Link>
            <div>
                <button onClick={docToggle}>
                    <span>Documentation</span>
                    <KeyboardArrowDownIcon />
                </button>
                {docModel && <DocModel />}
            </div>
        </Container>
    </NarbarSection>
  )
}

export default Narbar

const NarbarSection = styled.nav `
    background-color: ${({ theme }) => theme.backgroundColor2};
    height: 50px;
`
const Container = styled.div `
    height: 100%;
    width:90%;
    max-width: 700px;
    margin:auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        display: flex;
        align-items: center;
        background-color: transparent;
        color:white;
        padding:5px;
        cursor: pointer;
    }
    select{
        padding:5px;
    }
    a{
        background-color: red;
        text-decoration: none;
        color:white;
        padding:5px 10px;
        border-radius:5px;

        &:hover{
            transform:scale(1.2)
        }
    }
`



