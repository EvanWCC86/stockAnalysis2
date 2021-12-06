import React from 'react'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import NotificationPage from './pages/NotificationPage'
import ProfilePage from './pages/ProfilePage'
import ChartPage from './pages/ChartPage'
import AnalysisPage from './pages/AnalysisPage'

import GlobalStyle from './globalStyle'









const App = () => {


  
  return (
      <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/chart" element={<ChartPage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App;
