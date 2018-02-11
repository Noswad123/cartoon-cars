import React from 'react';
import { Link} from 'react-router-dom';

let mainStyle={
  display:"inline-block",
  margin: "20px"
}
export default class Home extends React.Component{
  constructor(){
    super();
 
  }  
  
  componentWillMount(){  
  }
render(){
  return(
    <div style={{minHeight:"75vh"}}>

      <h1 style={{fontFamily: 'Permanent Marker'}}>Dawson's Dream Cars</h1>
      <br/>
      <h3 style={{fontFamily: 'Indie Flower'}}>
        Inspired by WatchMojo.com's Video
      </h3>
      <iframe style={{width:"560", height:"315"}} src={"https://www.youtube.com/embed/gBi4cMwkcGg?&autoplay=0"}frameBorder="0" allowFullScreen></iframe>
   
      <h1 style={{fontFamily: 'Indie Flower'}}>Showroom</h1>

    </div>
  )
}

}