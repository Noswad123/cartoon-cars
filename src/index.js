import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Link} from 'react-router-dom';


import './App.css';

import Home from './js/pages/home.js';
import Showroom from './js/pages/showroom.js';
import Navbar from './js/components/navbar.js';
import Footer from './js/components/footer.js';

import registerServiceWorker from './registerServiceWorker';



class App extends Component {
  constructor(){
    super();
  }  

  render() {
    
        return (
            <div className="App">
            
             <Navbar />
       <Home />
       <Link to="showroom">Showroom</Link>
       <Footer/>
            
            </div>
        );
    }
}
ReactDOM.render(
  //<Route exact path="/" componet={App}/>
 // 
<BrowserRouter>
  <div>
    <Navbar />
    <Route exact path="/" component={Home}>
      <Home />
    </Route>
    <Route exact path="/showroom" component={Showroom}>
      <Showroom/>
    </Route>
    <Footer />
  </div>
</BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
