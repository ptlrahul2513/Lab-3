import React from 'react';
import "./App.css";
export default function Listing(props){
 const ratingStyle = {
    color: props.rating >=4.0 ? 'green' : 'red',
    margin:0,
 }
 const priceStyle = {
    color:'grey',
    margin:0,
 }
 const locationStyle={
    color: 'grey',
    margin:0,
 }
const countryStyle={
    margin:0,
}
 const imgStyle={
    margin:10,
   
 }
 
 
 
 


    return(
        <div>
           <img style={imgStyle} src={props.pic}  height="200px" width="160px"/> 
           <h2 style={countryStyle}>{props.country}</h2>
           <p style={locationStyle}>{props.location}</p>
           <p style={ratingStyle}>{props.rating}★</p>
           <p style={priceStyle}>${props.price}/night</p>
        </div>
        
        
       

    )
    
}



