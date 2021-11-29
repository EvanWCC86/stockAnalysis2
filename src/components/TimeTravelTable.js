import React from 'react'
import styled from 'styled-components'
const TimeTravelTable = ({orderType,buy}) => {
  return (
    <TableContainer>
        <TableHeader>
            <tr>
                <Title buy={buy}>{orderType}</Title>
            </tr>
        </TableHeader>
        <thead>
            <tr>
                <th>exchange</th>
                <th>Broker</th>
                <th>Qth</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>toronto</td>
                <td>Broker1</td>
                <td>15</td>
                <Price buy={buy}>10.25</Price>
            </tr>
            <tr>
                <td>toronto</td>
                <td>Broker1</td>
                <td>15</td>
                <Price buy={buy}>10.25</Price>
            </tr>
        </tbody>
    </TableContainer>
  )
}

export default TimeTravelTable

const TableContainer = styled.table `
    box-shadow: var(--box-shadow) ;
    padding:20px;
    background-color: var(--background-color3);
    max-height: 500px;
    overflow:auto;
    border-collapse: collapse;
    th{
        border:1px solid black;
        padding:10px;
       
    }
    td{
        border:1px solid black;
        padding:10px;
        
    }
   
`
const TableHeader = styled.thead `
    
    font-size: 20px;
    
    tr{
        transform:uppercase;
        text-align: left;
        
    }
`

const Title = styled.th `
    color:${props => props.buy ? "green" : "red"};
    
    
`
const Price = styled.td `
    color:${props => props.buy ? "green" : "red"};
`


