
import React from 'react'

import {useGlobalContext} from '../../contextapi/context'
import Plot from 'react-plotly.js';
const LineChart = () => {
    
    const {stockData,stockName} = useGlobalContext();
    console.log(stockData)
    const trace1 = {
  
        type: "scatter",
        mode: "line",
        name: `${stockName} High`,
        x:stockData?.date,
        y:stockData?.high,
        line: {color:'#17BECF'}
      };
    const trace2 = {
        type: "scatter",
        mode: "line",
        name: `${stockName} Low`,
        x:stockData?.date,
        y:stockData?.low,
        line: {color:'#7F7F7F'}
    }


  return (
    <Plot
        data={
            [trace1,trace2]
        }
        
        
        
      layout={{autosiz:true, title: 'Basic Time Series',autosize: true}}
       useResizeHandler={true}
    //    style={{objectFit:'contain'}}
        style={{width:'100%',height:'100%',objectFit:'cover'}}
        config ={{responsive: true }}
        
      />
  )
}

export default LineChart
