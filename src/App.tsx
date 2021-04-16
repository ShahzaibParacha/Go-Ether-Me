import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
// import decode from 'jwt-decode';
import Home from "./components/home.component";
import Error from "./components/error.component";
import Projects from "./components/projects.component";
import Project from "./components/project.component";
import Navbar from "./components/navbar.component";
import Create from "./components/create.component";
import About from "./components/about.component";
// import Auth from "./components/auth.component"
// const auth = new Auth();

// const AuthRoute = ({ component: Component,...rest }: any) => (
//   return(
//   <Route
//     {...rest}
//     render={() =>
//       auth.getStatus() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/" }} />
//       )
//     }
//   />
// );



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/projects" exact component={Projects} />
        <Route path="/about" exact component={About} />
        <Route path="/project/:id" component={Project} />
        <Route path="/new" exact component={Create} />
        <Route path="/" exact component={Home} />
        <Route path="/404" exact component={Error} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
