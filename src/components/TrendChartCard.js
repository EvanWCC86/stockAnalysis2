import React from 'react'
import styled from 'styled-components'
import StockChart from './StockChart'
import {Link} from 'react-router-dom'
const TrendChartCard = ({name,date,time}) => {
  return (
    <Container>
        <ChartContainer>
            <StockChart />
        </ChartContainer>
        <Content>
            <h3>{name}</h3>
            <span>{date}</span>
            <span>{time}</span>
            <Link to="/chart">
                See Senario
            </Link>
        </Content>
    </Container>

  )
}

export default TrendChartCard

const Container = styled.div `
    box-shadow: var(--shadow);
    margin-right:10px;
    overflow: hidden;
`
const ChartContainer = styled.div `
    height: 180px;
    width:100%;
    overflow: hidden;
`
const Content = styled.div `
    padding:10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        padding:8px 20px;
        
       
        border: none;
        outline: none;
        border-radius: 4px;
        background: #833ab4;
        background: -webkit-linear-gradient(to right, #fcb045, #fd1d1d, #833ab4 );
        background: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
        color: #fff;
        transition: all 0.3s ease;
        cursor: pointer;
        &:hover{
            color: #9518fc;
            transform: scale(1.2);
        }
        
    }
`

