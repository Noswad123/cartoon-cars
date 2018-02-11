import React from 'react';
import { Link} from 'react-router-dom';

export default class Navbar extends React.Component{
    render(){
        let navStyles={
            color:"white",
            fontSize:20
        }
        return(
            <div style={{width:"100vw",
            backgroundColor:"#4682B4",
            display:"flex",
            justifyContent:"space-around"}}>
            <Link style={navStyles} to="/">Home</Link>
            <Link style={navStyles} to="showroom">Showroom</Link>
            </div>
        )
    }
}