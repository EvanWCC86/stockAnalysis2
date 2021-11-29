import React,{useState,useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';
import BarChart from '../charts/BarChart';
import {useGlobalContext} from '../../contextapi/context'
const BalanceStament = () => {
    const {BalanceUrl} = useGlobalContext()
    const [balanceSheetData, setBalanceSheetdata] = useState(null)
    
    const [xvalue,setXvalue] = useState([])
    const [yvalue, setYvalue] = useState([])
    const [yvalue2, setYvalue2] = useState([])
    
    const AddNumber = (num1, num2) => {
        return num1 + num2
    }
    useEffect(() => {
        const fetchBalance = async () => {
            const res = await axios.get(BalanceUrl)
            setBalanceSheetdata(res.data)
          }
        fetchBalance()
        
    },[BalanceUrl])

    
    console.log(balanceSheetData)
    useEffect(() =>{
        setXvalue(balanceSheetData?.annualReports.map((d) =>d.fiscalDateEnding ))
        setYvalue(balanceSheetData?.annualReports.map((d) =>d.totalAssets ))
        setYvalue2(balanceSheetData?.annualReports.map((d) =>d.totalLiabilities ))
      },[balanceSheetData])
    
    
    
  return (
    <Container>
        <h2>Balance Sheet Statement</h2>
       {balanceSheetData &&  (<BarChart  xvalue={xvalue} yvalue={yvalue} yvalue2={yvalue2} name1="Total Assets" name2="Total Liabilities"  />)}
        {
            balanceSheetData && (
                <table>
            
            <tr>
                <td>Peridod Ending:</td>
                {balanceSheetData.annualReports.map((item,index) => (
                    <td key={index}>{item.fiscalDateEnding}</td>
                    
                ))}
            </tr>
            <tr>
                <td>Total Assets</td>
                {balanceSheetData.annualReports.map((item,index) => (
                   
                    <td key={index}>
                        <NumberFormat value={item.totalAssets}displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </td>
                ))}
            </tr>
            <tr>
                <td>Total Liabilities</td>
                {balanceSheetData.annualReports.map((item,index) => (
                  
                    <td key={index}>
                        <NumberFormat value={item.totalLiabilities}displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </td>
                ))}
            </tr>
            <tr>
                <td>Total Equity</td>
                {balanceSheetData.annualReports.map((item,index) => (
                    <td key={index}>{() => AddNumber(item.totalAssets, item.totalLiabilities)}</td>
                ))}
            </tr>
        </table>
            )
        }
    </Container>
  )
                
}

export default BalanceStament

const Container = styled.div `
    margin-bottom: 30px;
    table{
        td{
            padding:10px;
        }
    }
`