import React, { Component } from 'react';
import './App.css';
import car from './img/car.png'
import {carData} from './data/mydata.js'

let mainStyle={
  display:"inline-block",
  margin: "20px"
}

class App extends Component {
  constructor(){
    super();
    this.state={
    serverData:{},
    filterString:''
  };
 
  }  
  componentWillMount(){
    this.setState({serverData:carData});
    
  }
  render() {
        return (
            <div className="App">
            <img src={car} alt="car logo"/>
             
            <h1> Showroom</h1>
            <Showcase />
            <Description/>
            <SearchBar onTextChange={text=>this.setState({filterString:text})}/>
            {this.state.serverData.filter(car=>
            {
              console.log(car.name);
              console.log(car.name.includes(this.state.filterString.toLowerCase()));
              return car.name.toLowerCase().includes(this.state.filterString.toLowerCase())
            }
              

            ).map(car=>
              <Gallery  img={car.img}/> 
            )}
            
            
            
            
            </div>
        );
    }
}
class Showcase extends Component{
  constructor(){
    super();
    this.state={serverData:{}};
 
  }  
  componentWillMount(){
    this.setState({serverData:carData[1]});
  }
  render(){
     
return(
        <div className="showcase" style={{...mainStyle}}> 
      
          <h1>{this.state.serverData.name}</h1>
       

        </div>
);
    }
}

class Description extends Component{
  constructor(){
    super();
    this.state={serverData:{}};
 
  }  
  componentWillMount(){
    this.setState({serverData:carData[1]});
  } 
  render(){
        return (
            <div style={{...mainStyle}}>
            <p>{this.state.serverData.description}</p>
            </div>
        );
    }
}
class SearchBar extends Component{
  render(){
      return (
          <div><input type="text" onKeyUp={event=> this.props.onTextChange(event.target.value)}/></div>
      );
  }
}

class Gallery extends Component{
  render(){
      return (
          <div>
          
          {this.props.img}
          </div>
      );
  }
}
export default App;
