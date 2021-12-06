import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';
import {useGlobalContext} from '../../contextapi/context'
import axios from 'axios'
const Overview = () => {
  const {overViewUrl} = useGlobalContext();
  const [loading, setLoading] = useState(false)
  const [overViewData, setOverViewData] = useState()
   
  useEffect(() => {
    const fetchStockAnalysis = async () => {
      setLoading(true)
      
      const res = await axios.get(overViewUrl)
      setOverViewData(res.data)
      setLoading(false)
  }
   fetchStockAnalysis();
  },[overViewUrl])

  console.log(overViewUrl)

  console.log(overViewData)
   
    if(loading) {
      return <h2>Loading</h2>
    }
    
  return (
    <Container>
      
      {overViewData && (
        <>
        <p><span>Company Description: {overViewData["Description"]}</span></p>
        <Wrapper>
        <Item>
        <h4>52wk range</h4>
        <span>{overViewData["52WeekLow"]}-{overViewData["52WeekHigh"]}</span>
      </Item>
      <Item>
        <h4>Market cap</h4>
        <span>
          <NumberFormat value={overViewData["MarketCapitalization"]} displayType={'text'} thousandSeparator={true} prefix={'$'} />
         </span>
      </Item>
      <Item>
        <h4>AnalystTargetPrice</h4>
        <span>{overViewData["AnalystTargetPrice"]}</span>
      </Item>
      
      <Item>
        <h4>P/E Ratio</h4>
        <span>{overViewData["PERatio"]}</span>
      </Item>
      <Item>
        <h4>EPS</h4>
        <span>{overViewData["EPS"]}</span>
      </Item>
      <Item>
        <h4>revenue</h4>
        <span>
        <NumberFormat value={overViewData["RevenueTTM"]} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </span>
      </Item>
      <Item>
        <h4>beta</h4>
        <span>{overViewData["Beta"]}</span>
      </Item>
      <Item>
        <h4>shares outstanding</h4>
        <span>
          <NumberFormat value={overViewData["SharesOutstanding"]} displayType={'text'} thousandSeparator={true} />
        </span>
      </Item>
      <Item>
        <h4>200 Day Moving</h4>
        <span>{overViewData["200DayMovingAverage"]}</span>
      </Item>
      </Wrapper>
      </>
      )}
    </Container>
  )
}

export default Overview

const Container = styled.div `
  width:90%;
  max-width:800px;
  margin:40px auto;
  padding:20px auto;

  p{
    margin-bottom: 20px;
  }
  
`
const Wrapper = styled.div `

display:grid;
  grid-gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`
const Item = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4{
    text-transform: capitalize;
  }
`
