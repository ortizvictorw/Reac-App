import React, { useState } from 'react'
import {useEffect} from 'react'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
    
const [images , setImages ] = useState([])
//el contenido tendra o no dependencia de otra funcion para volver a ejecutarse
 useEffect (()=>{
    getGifs();
},
    //dependencias
            [])
 
 
 const getGifs = async ()=>{
 const url = 'https://api.giphy.com/v1/gifs/search?q=goku&limit=10&api_key=02mtTxcYt3HmzG3K2777vl3eyeD5x3MT'
 //hace la peticion de gif al end point
 const resp = await fetch ( url );
 //toma la respuesta y las convierte en un json
 const {data}= await resp.json();

 const gifs = data.map(img=>{
     return {
         id:img.id,
         title: img.title,
         url: img.images?.downsized_medium.url

     }
 })
 console.log(gifs)
 setImages(gifs)
}




    return (
        <div>
            <h3>{category}</h3>
            
                {
                    /* images.map(img => (
                    <li key={ img.id }>{img.title}</li>
                    )) */
                    //trae solo title ,id del array mapeado
                    images.map((img) => (
                       /*  <li key={ id }>{title}</li> */
                        <GifGridItem 
                        key= {img.id}
                       /*  img={ img.title }  */
                        {...img}
                        
                        />      
                        ))
                }
           
        </div>
    )
}
