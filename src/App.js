import React from 'react'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import NotificationPage from './pages/NotificationPage'
import ProfilePage from './pages/ProfilePage'
import ChartPage from './pages/ChartPage'
import AnalysisPage from './pages/AnalysisPage'

import GlobalStyle from './globalStyle'
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from './theme';
import {useGlobalContext} from './contextapi/context'

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react'


Amplify.configure(awsconfig)

const App = () => {

  const {theme} = useGlobalContext();
  
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
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
    </ThemeProvider>
  )
}

export default withAuthenticator(App);
