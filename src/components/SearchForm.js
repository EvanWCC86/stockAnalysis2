import React,{useState} from 'react'
import styled from 'styled-components'
import ShareIcon from '@material-ui/icons/Share';
import {useGlobalContext} from '../contextapi/context'
import ModuleModel from './ModuleModel'
const SearchForm = () => {
   
    const {stockRequest, stockHandleChange} = useGlobalContext();
    const [moduleModel, setModuleModel] = useState(false);

  const toggleModule = () => {
    setModuleModel(!moduleModel);
  }
  return (
    <SearchFormSection>
        <Container>
            <Left>
                <TickerContainer>
                    <label htmlFor="ticker">Single ticker</label>
                    <select name="ticker" value={stockRequest.ticker} onChange={stockHandleChange}>
                        <option value="AAPL">AAPL</option>
                        <option value="IBM">IBM</option>
                        <option value="TD">TD</option>
                    </select>
                </TickerContainer>
                <DateContainer>
                    <input type="date" value={stockRequest.date} onChange={stockHandleChange} />
                </DateContainer>
                <ExchangeContainer>
                    <select name="venue" value={stockRequest.venue} onChange={stockHandleChange}>
                        <option value="venue">all venue</option>
                    </select>
                </ExchangeContainer>
                <TimesContainer>
                    <label>Time Stamp</label>
                    <input type="number" placeholder="hrs" />
                    <span>:</span>
                    <input type="number" placeholder="min" />
                    <span>:</span>
                    <input type="number" placeholder="sec" />
                    <span>.</span>
                    <input type="number" placeholder="ms" />
                
                </TimesContainer>
                <button>View Data</button>
            </Left>
            <Right>
                {/* <button>View Data</button> */}
                <button><ShareIcon /></button>
                <button onClick={toggleModule}>
                    <span>+</span>
                    <span>Module</span>
                </button>
            </Right>
           
        </Container>
        {moduleModel && <ModuleModel toggleModule={toggleModule} />}
    </SearchFormSection>
  )
}

export default SearchForm

const SearchFormSection = styled.div `
    margin:40px auto;
`
const Container = styled.div `
    width:90%;
    max-width:1200px;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Left = styled.form `
    display:flex;
    align-items:center;

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        padding:8px 20px;
        
       
        border: none;
        outline: none;
        border-radius: 4px;
        background-color: var(--button-color);
        
        color: #fff;
        transition: all 0.3s ease;
        cursor: pointer;
        &:hover{
            color: #9518fc;
            transform: scale(1.2);
        }
        }
    
`
const Right = styled.div `
    display:flex;
    align-items:center;

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        padding:8px 20px;
        
       
        border: none;
        outline: none;
        border-radius: 4px;
        background-color:var(--button-color);
        color: #fff;
        transition: all 0.3s ease;
        cursor: pointer;
        margin-left: 10px;
        &:hover{
            color: #9518fc;
            transform: scale(1.2);
        }
    }
`
const TickerContainer = styled.div `
    margin-right:10px;
`
const DateContainer = styled.div `
    
    input{
        color:var(--background-color2);
        background-color: white;
    }
`
const ExchangeContainer = styled.div `
 margin-right:10px;
`
const TimesContainer = styled.div `
    margin-right:10px;
    input{
        width:40px;
        color:white;
    }
`
