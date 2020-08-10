import React from 'react'
/* import {useEffect} from 'react' */
import { GifGridItem } from './GifGridItem' 
import { useFetchGifs } from '../hooks/useFetchGifs'
 
export const GifGrid = ({category}) => {
    


const { data: images, loading } = useFetchGifs(category);

/* **************Comentario****************** 

el contenido tendra o no dependencia de otra funcion para volver a ejecutarse
images => el el gif
setImages=> es el que mutará a images


 ******************************************* */



    return (
        <>
            <h3 className = 'animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p className = 'animate__animated animate__flash'>Loanding</p>}

            <div className="card-grid">

            {
                images.map( img => (
                    <GifGridItem
                        key={ img.id }
                        {...img}
                        />
                ))
            }

            </div>
           
     
        </>
    )
}
