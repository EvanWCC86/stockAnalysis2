import React from 'react'
import styled from 'styled-components'
// import {Link} from 'react-router-dom'
import Brightness7OutlinedIcon from '@material-ui/icons/Brightness7Outlined';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';

const StockEv = () => {
    const data = [
        {
            id:"1",
            timestamp:"10:30:31.500",
            messageType:"Add Order",
            venue:"OMGA",
            order:"918898",
            side:"BUY",
            broker:"RBC",
            price:102,
            volume:400,
        },
        {
            id:"2",
            timestamp:"10:30:31.500",
            messageType:"cancel order",
            venue:"OMGA",
            order:"918898",
            side:"BUY",
            broker:"RBC",
            price:102,
            volume:400,
        },
        {
            id:"3",
            timestamp:"10:30:31.500",
            messageType:"change order",
            venue:"OMGA",
            order:"918898",
            side:"BUY",
            broker:"RBC",
            price:102,
            volume:400,
        },
        {
            id:"4",
            timestamp:"10:30:31.500",
            messageType:"excustion",
            venue:"OMGA",
            order:"918898",
            side:"BUY",
            broker:"RBC",
            price:102,
            volume:400,
        },
        {
            id:"5",
            timestamp:"10:30:31.500",
            messageType:"system events",
            venue:"OMGA",
            order:"918898",
            side:"BUY",
            broker:"RBC",
            price:102,
            volume:400,
        },
    ]
  return (
    <EventSection>
       <HeaderSection>
            <h3>Events</h3>
            <div>
                <button>
                    <LaunchOutlinedIcon />
                </button> 
                <button>
                    <Brightness7OutlinedIcon />
                </button>
                <p>View All Events</p>
            </div>
       </HeaderSection>
       <EventsTable>
            <thead>
                <tr>
                    <th>Timestamp</th>
                    <th>Message type</th>
                    <th>Venue</th>
                    <th>Order/TradeID</th>
                    <th>Side</th>
                    <th>Broker</th>
                    <th>Price</th>
                    <th>Volume</th>
                </tr>
            </thead>
            <tbody>
                
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.timestamp}</td>
                        <td>{item.messageType}</td>
                        <td>{item.venue}</td>
                        <td>{item.order}</td>
                        <td>{item.side}</td>
                        <td>{item.broker}</td>
                        <td>{item.price}</td>
                        <td>{item.volume}</td>
                    </tr>
                ))}
                
            </tbody>
       </EventsTable>
    </EventSection>
  )
}

export default StockEv

const EventSection = styled.section ``

const HeaderSection = styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center;

    div{
        display:flex;

        button{
            margin-right:10px;
        }
    }
`
const EventsTable = styled.table `

    thead{
        box-shadow: var(--shadow);
        background-color:gray;
        

        th{
            padding:5px;
           
        }
    }
    tbody{
        box-shadow:var(--shadow);
        background-color:var(--background-color3);
    }
`
