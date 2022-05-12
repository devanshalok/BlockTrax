import React, { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
import theme from "configs/theme/config-theme";
import HomeView from "../HomeView";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginComponent from "./components/LoginComponent";
import PrivateRoute from "../../PrivateRoute";
import ProjectNgo from '../ProjectNgo';
import LandingPage from '../LandingPage';
import "./styles.scss"; // global styles
// import AuditorView from '../AuditorView'
// import ProjectAuditor from '../ProjectAuditor'

function App() {
  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <div>
            <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/dashboard">
              <PrivateRoute claim="verified">
                <Header />
                <Footer />
                <div className="app-shell">
                  <HomeView />
                </div>  
              </PrivateRoute>
            </Route>
            <Route path="/projects">
              <PrivateRoute claim="verified">
              <Header />
              <Footer />
              <div className="app-shell">
                <ProjectNgo />
              </div>
              </PrivateRoute>
            </Route>
            </Switch>
        </div>
      </HashRouter>              
    </ThemeProvider>
  );
}

export default App;
