import React,{useState,useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';
import BarChart from '../charts/BarChart';
import {useGlobalContext} from '../../contextapi/context'
const CashFlow = () => {
    const {CashUrl} = useGlobalContext()
    const [cashFlowData, setCashFlowData] = useState(null)
    const [xvalue,setXvalue] = useState([])
    const [yvalue, setYvalue] = useState([])
    const [yvalue2, setYvalue2] = useState([])
    

    
    
    useEffect(() => {
        const fetchCash = async () => {
            const res = await axios.get(CashUrl)
            setCashFlowData(res.data)
            setXvalue(res.data.annualReports.map((d) =>d.fiscalDateEnding ))
            setYvalue(res.data.annualReports.map((d) =>d.cashflowFromInvestment ))
            setYvalue2(res.data.annualReports.map((d) =>d.operatingCashflow ))
          }
        fetchCash()
    },[CashUrl])
    console.log(cashFlowData)
      return (
          <Container>
              <h2>Cash Flow Statement</h2>
              {cashFlowData && (<BarChart xvalue={xvalue} yvalue={yvalue} yvalue2={yvalue2} name1="Cashflow From Investment" name2="Operating Cashflow" /> )}
              {cashFlowData && (
                  <table>
                  <tr>
                      <td>Cash From Operating Activities</td>
                      {cashFlowData.annualReports.map((item,index) => (
                    
                    <td key={index}>
                        <NumberFormat value={item.operatingCashflow} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </td>
                ))}
                  </tr>
                  <tr>
                      <td>Cash From Investing Activities</td>
                      {cashFlowData.annualReports.map((item,index) => (
                   
                    <td key={index}>
                        <NumberFormat value={item.cashflowFromInvestment} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </td>
                ))}
                  </tr>
                  <tr>
                      <td>Cash From Financing Activities</td>
                      {cashFlowData.annualReports.map((item,index) => (
                    
                    <td key={index}>
                        <NumberFormat value={item.cashflowFromFinancing} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </td>
                ))}
                  </tr>
                  <tr>
                      <td>Net Change In Cash</td>
                      {cashFlowData.annualReports.map((item,index) => (
                   
                    <td key={index}>
                        <NumberFormat value={item.netIncome} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </td>
                ))}
                  </tr>

              </table>
              )}
          </Container>
      )
      
  
}

export default CashFlow

const Container = styled.div `
    table{
        td{
            padding:10px;
        }
    }
`
