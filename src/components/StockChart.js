import React from 'react'
import Plot from 'react-plotly.js';

import {useGlobalContext} from '../contextapi/context'

const StockChart = () => {
    // const [stockData, setStockData] = useState([])
  const {stockData,stockName} = useGlobalContext();
  
    // useEffect(() => {
    //     d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv').then(data => {
    //         setStockData({
    //             date:data.map((d) => d.Date ),
    //             open:data.map((d) => d["AAPL.Open"]),
    //             close:data.map((d) => d["AAPL.Close"] ),
    //             high:data.map((d) => d["AAPL.High"] ),
    //             low:data.map((d) => d["AAPL.Low"] ),
                
    //         })
                   
    //         // })
    //         console.log(data)
    //     })
           
        
    // },[])
    // console.log(stockData)
    
    // useEffect(() => {
    //     stockData?.map((stock) => {
    //         return setFilterData({
    //             x:[stock.Date],
    //             close:[stock.AAPL.Close]
    //         })
    //     })
    // },[])
    // console.log(filterData)

    const trace1 = {
  
        x: stockData?.date,
       
        close: stockData?.close,
        
        decreasing: {line: {color: 'red'}}, 
        
        high: stockData?.high,
        
        increasing: {line: {color: 'green'}}, 
        
        line: {color: 'rgba(31,119,180,1)'}, 
        
        low: stockData?.low,
        
        open: stockData?.open,
        
        type: 'candlestick', 
        xaxis: 'x', 
        yaxis: 'y'
      };


  return (
    // <div style={{ width:'100%', height: '100%',objectFit:"cover" }}>
      <Plot
        data={
            [trace1]
        }
        
        
        
      layout={{autosiz:true, title: stockName,autosize: true}}
       useResizeHandler={true}
    //    style={{objectFit:'contain'}}
        style={{width:'100%',height:'100%',objectFit:'cover'}}
        config ={{responsive: true }}
        
      />
    // </div>
  )
}

export default StockChart

// const Container = styled.div `
//     height: 500px;
//     width:800px
// `