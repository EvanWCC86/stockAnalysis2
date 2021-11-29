
import React, { useState, useContext} from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const [stockName, setStockName] = useState("IBM")

    // const [analysisData, setAnalysisData] = useState([])
    
    // const [loading, setLoading] = useState(true)

    // const fetchStock = async () => {
    //     let dateX = []
    //     let y = []
    //     const res = await axios.get(url)
    //     const stockData = res.data['Time Series (Daily)']
    //     // const x = res.data['Time Series (Daily)'].forEach((item) => item.key )
    //     // console.log(stockData['2021-07-08'])
    //     for(let key in stockData) {
    //         dateX.push(key)
    //         y.push(stockData[key]['1. open'])
    //     }
    //     console.log(dateX)
    //     console.log(y)
    // }

    const APIkey = "D1OFKY5E2XKCKM1T"
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockName}&outputsize=compact&apikey=${APIkey}`
    const IncUrl = `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${stockName}&outputsize=compact&apikey=${APIkey}`
    const BalanceUrl = `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${stockName}&outputsize=compact&apikey=${APIkey}`
    const CashUrl = `https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${stockName}&outputsize=compact&apikey=${APIkey}`
    const overViewUrl = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockName}&outputsize=compact&apikey=${APIkey}`
    
    


    // useEffect(() => {
    //     fetchStock()
    // },[])
    const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }





    const [stockRequest, setStockRequest] = useState({
        ticker:"",
        venue:"all venue",
        timeStamep:"",
    })
    const stockHandleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setStockRequest({ ...stockRequest, [name]: value })
        setStockName(value)
      }
    
    console.log(stockName)

    return (
        <AppContext.Provider value={{
            url,
            CashUrl,
            BalanceUrl,
            IncUrl,
           
            overViewUrl,
            
            stockName,
            toggleTheme,
            theme,
            showSidebar,
            toggleSidebar,
            stockHandleChange,
            stockRequest
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }