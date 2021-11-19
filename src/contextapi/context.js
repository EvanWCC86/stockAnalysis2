
import React, { useState, useContext} from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [stockRequest, setStockRequest] = useState({
        ticker:"TD",
        venue:"all venue",
        timeStamep:"",
    })
    const stockHandleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setStockRequest({ ...stockRequest, [name]: value })
      }

    return (
        <AppContext.Provider value={{
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