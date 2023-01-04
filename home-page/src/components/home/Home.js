import React from 'react'
import App from'../../App.js';
import { BrowserRouter as Router, Switch, Route,Link } from'react-router-dom';
import './home.css';

const Home = () => {
  return (
   
   <div className="home">
    <Router>
       <div>
      <Switch>
         <Route path="/home">
            <App/>
         </Route>
        
      </Switch>
      </div>
      </Router>
      </div>
  )
}

export default Home;
