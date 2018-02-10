import React, { Component } from 'react';
import './App.css';
import car from './car.png'

let mainStyle={
  display:"inline-block",
  margin: "20px"
}
class App extends Component {
  render() {
 

        return (
            <div className="App">
            <img src={car} alt="car logo"/>
             
            <h1> Showroom</h1>
            <Showcase />
            <Description/>
            <SearchBar/>
            <Gallery/>
            
            
            
            </div>
        );
    }
}
class Showcase extends Component{
    render(){
return(
        <div className="showcase" style={{...mainStyle}}> Showroom Floor</div>
);
    }
}

class Description extends Component{
    render(){
        return (
            <div style={{...mainStyle}}>Description text</div>
        );
    }
}
class SearchBar extends Component{
  render(){
      return (
          <div><input type="text"/></div>
      );
  }
}

class Gallery extends Component{
  render(){
      return (
          <div>Gallery</div>
      );
  }
}
export default App;
