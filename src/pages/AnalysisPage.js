import React,{useState} from 'react'
import styled from 'styled-components';

import Overview from '../components/StockAnalysis/Overview';
import Financials from '../components/StockAnalysis/Financials';

import News from '../components/News';
import Charts from '../components/StockAnalysis/Charts';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm'
const AnalysisPage = () => {
    
    const [stockInfo,setStockInfo] = useState({
        overview:true,
        financials:false,
        companyInfo:false,
        news:false,
        chart:false,
    })
   
    
    
    
//    const functionType=["INCOME_STATEMENT", "BALANCE_SHEET", "CASH_FLOW", "EARNINGS" ]
    
    // const [stock,setStock] = useState({
        

    // })

   
  return (
    <Container>
        <Header />
        <SearchForm />
        <MainContainer>
            <NavbarContainer>
                <span onClick={() => setStockInfo({
                    overview:true,
                    financials:false,
                    companyInfo:false,
                    news:false,
                    chart:false,
                })}>Overview</span>
                <span onClick={() => setStockInfo({
                    overview:false,
                    financials:true,
                    companyInfo:false,
                    news:false,
                    chart:false,
                })}>Financials</span>
                
                <span>news</span>
                <span onClick={() => setStockInfo({
                    overview:false,
                    financials:false,
                    companyInfo:false,
                    news:false,
                    chart:true,
                })}>chart</span>
            </NavbarContainer>
            <ContentContainer>
                {stockInfo.overview && <Overview />}
                {stockInfo.financials && <Financials />}
                {/* {stockInfo.companyInfo && <CompanyInfo fetchStockAnalysis={fetchStockAnalysis} analysisData={analysisData} loading={loading} />} */}
                {stockInfo.news && <News />}
                {stockInfo.chart && <Charts />}
            </ContentContainer>
        </MainContainer>
    </Container>
  )
}

export default AnalysisPage

const Container = styled.div `
    width:90%;
    max-width:1200px;
    margin:auto;
    min-height: 100vh;
    background-color: var(--background-color2);
`

const MainContainer = styled.div `
    background-color: var(--background-color3);
    padding:20px;
`
const NavbarContainer = styled.div `
    display:flex;
    justify-content: center;
    overflow-x: scroll;
    span{
        color:white;
        margin-right: 10px;
        text-transform: capitalize;
        cursor: pointer;
        background: var(--button-color);
        padding:8px 20px;
        &:hover{
            color:blue;
            
        }

    }
`
const ContentContainer = styled.div `
    
`