import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'  
import GoogleBooksSearch from "./Googlebooksearch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookDetails from './BookDetails';
import SetNavbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css'


  
function App() {  
  return (  
    <Router>

    <SetNavbar/>
    <Switch>
    <Route exact path="/" component={GoogleBooksSearch}/>
    <Route exact path="/details/" component={BookDetails}/>
    </Switch>
    <Footer/>

    </Router>

  )  
}  
  
export default App;   
