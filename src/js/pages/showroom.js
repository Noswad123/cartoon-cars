import React, { Component } from 'react';
import {carData} from '../../data/mydata.js'

let mainStyle={
  display:"inline-block",
  margin: "20px"
}
export default class Showroom extends React.Component{
  constructor(){
    super();
    this.state={
    serverData:carData?carData:{},
    filterString:'',
    name:"",
    description:"",
    img:""
  };
 
  }  
  
  componentWillMount(){
    this.setState({serverData:carData});
    
  }
render(){
  return(
    <div>
    <Showcase carName={this.state.name}  carDescr={this.state.description} carImg={this.state.img}/>
    <SearchBar onTextChange={text=>this.setState({filterString:text})}/>
            {this.state.serverData.filter(car=>
            {
              return car.name.toLowerCase().includes(this.state.filterString.toLowerCase())
            }).map(car=> <Gallery changeCar={car=>{
              this.setState({name:car.name})
              this.setState({description:car.description})
              this.setState({img:car.img})
              console.log(car); return true}} name={car.name} key={car.name} img={car.img} description={car.description}
            
           
            /> 
          )}
    </div>
  )
}

}
class Showcase extends Component{
  constructor(){
    super();
    this.state={serverData:{},
                name:"Dream Car",
                img:"./img/dreamcar.jpg",
              description:"The car of your dreams awaits..."};
     
  }  
  
  componentWillMount(){
    this.setState({serverData:carData[1]});
  }
  render(){
     
return(
        <div className="showcase" style={{...mainStyle}}>

       {this.props.carName? <h1>{this.props.carName}</h1> :<h1>Choose your Dream Car</h1>}

      {this.props.carImg ? <img src={"./img/"+this.props.carImg} alt={this.props.carName} style={{"maxHeight":500}}/>
      :<img src={this.state.img} alt={this.state.name} style={{"maxHeight":500}}/>}
        
        {this.props.carDescr? <p>{this.props.carDescr}</p> :<p>{this.state.description}</p>}
          
       

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
          <div style={{
            display:"inline-block",
            margin:20
          }}>
         
          <img src={"./img/"+this.props.img} alt={this.props.name} onClick={()=>this.props.changeCar(this.props)}  style={{
              height:200
            }}/>
            <br/>
            <p>{this.props.name}</p>
          </div>
      );
  }
}