
import React from 'react'
import Plot from 'react-plotly.js';
const BarChart = ({xvalue,yvalue,yvalue2,name1,name2}) => {

   
    // const [xvalue,setXvalue] = useState([])
    // const [yvalue, setYvalue] = useState([])
    // const [yvalue2, setYvalue2] = useState([])
    var trace1 = {
        x: xvalue,
        y: yvalue,
        name: name1,
        type: 'bar'
      };
      
      var trace2 = {
        x: xvalue,
        y: yvalue2,
        name: name2,
        type: 'bar'
      };
    //   useEffect(() =>{
    //     setXvalue(incomeData.annualReports.map((d) =>d.fiscalDateEnding ))
    //     setYvalue(incomeData.annualReports.map((d) =>d.totalRevenue ))
    //     setYvalue2(incomeData.annualReports.map((d) =>d.netIncome ))
    //   },[incomeData])
     
  return (
    <div>
       <Plot
        data={
            [trace1,trace2]
        }
        
        
        
      layout={{barmode:'group'}}
      
        
      />
    </div>
  )
}

export default BarChart
