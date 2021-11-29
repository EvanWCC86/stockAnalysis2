import React,{useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';
import BarChart from '../charts/BarChart';
import {useGlobalContext} from '../../contextapi/context'
const IncomeStatement = () => {
    const {IncUrl} = useGlobalContext();
const [loading, setLoading] = useState(true)
  const [incomeData, setIncomeData] = useState({
      annualReports:[],
      quarterlyReports:[],
  })
  const [xvalue,setXvalue] = useState([])
  const [yvalue, setYvalue] = useState([])
  const [yvalue2, setYvalue2] = useState([])
  

  useEffect(() => {
    const fetchIncome = async () => {
        const res = await axios.get(IncUrl)
        setIncomeData({
          annualReports:res.data.annualReports,
          quarterlyReports:res.data.quarterlyReports,
        })
        
      }
    fetchIncome()
    setLoading(false)
  },[IncUrl])

  console.log(incomeData)

  useEffect(() =>{
    setXvalue(incomeData.annualReports.map((d) =>d.fiscalDateEnding ))
    setYvalue(incomeData.annualReports.map((d) =>d.totalRevenue ))
    setYvalue2(incomeData.annualReports.map((d) =>d.netIncome ))
  },[incomeData])

  

  if(loading) {
     return (
         <h2>Loading...</h2>
     )
  }
  return (
    <IncomeContainer>
          <h2>Income Statement</h2>
          {incomeData && (<BarChart xvalue={xvalue} yvalue={yvalue} yvalue2={yvalue2} name1="Total Revenue" name2="Net Income" /> )}
         
          <table>
            
               <tr>
                <td>Peridod Ending:</td>
                {incomeData.annualReports?.map((item,index) => (
                    <td key={index}>{item.fiscalDateEnding}</td>
                ))}
               </tr>
               <tr>
                <td>Total Revenue</td>
                {incomeData.annualReports?.map((item,index) => (
                    <td key={index}>
                        <NumberFormat value={item.totalRevenue} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </td>
                ))}
               </tr>
               <tr>
                <td>Gross Profit</td>
                {incomeData.annualReports?.map((item,index) => (
                  
                    <td key={index}>
                        <NumberFormat value={item.grossProfit} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </td>
                ))}
               </tr>
               <tr>
                <td>Operating Income</td>
                {incomeData.annualReports?.map((item,index) => (
                     <td key={index}>
                     <NumberFormat value={item.operatingIncome} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </td>
                    
                ))}
               </tr>
               <tr>
                <td>Net Income</td>
                {incomeData.annualReports?.map((item,index) => (
                    
                    <td key={index}>
                    <NumberFormat value={item.netIncome} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                   </td>
                ))}
               </tr>
            
            
          </table>
             

      </IncomeContainer>
  )
}

export default IncomeStatement

const IncomeContainer = styled.div `
    margin: 30px auto;
    table{
       
        td{
            padding:10px;
        }
    }
`