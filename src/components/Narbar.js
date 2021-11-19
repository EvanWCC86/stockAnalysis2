import React,{useState} from 'react'
import styled from 'styled-components'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DocModel from './DocModel';
const Narbar = () => {
    const [docModel, setDocModel] = useState(false)
    const docToggle = () => {
        setDocModel(!docModel)
    }
    const [stockMarket, setStockMarket] = useState("CAN Equity")
    const [dataAccess, setDataAccess] = useState("Data Access")
  return (
    <NarbarSection>
        <Container>
            
            <select name="ticker" value={stockMarket}>
                <option value="td">CAN Equity</option>
                <option value="rbc">RBC</option>
                <option value="cibc">CIBC</option>
            </select>
        
                <select name="ticker" value={dataAccess}>
                <option value="td">Data Access</option>
                <option value="rbc">RBC</option>
                <option value="cibc">CIBC</option>
            </select>
        
        
            <span>Analytics</span>
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
    background-color: var(--background-color3);
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
`

