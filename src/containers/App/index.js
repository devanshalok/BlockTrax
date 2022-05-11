import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from 'configs/theme/config-theme'
import HomeView from 'containers/HomeView'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginComponent from './components/LoginComponent'

import './styles.scss' // global styles
// import ProjectNgo from '../ProjectNgo'
// import AuditorView from '../AuditorView'
// import ProjectAuditor from '../ProjectAuditor'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          <Footer />
          <Router>
            <div className="app-shell">
              <Routes>
                <Route exact path="/" element={<LoginComponent />} />
                <Route exact path="/dashboard" element={<HomeView />} />
              </Routes>
            </div>
          </Router>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
