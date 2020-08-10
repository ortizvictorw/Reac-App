import{ useState, useEffect } from 'react'
import{ getGifs} from '../helpers/getGif'



export const useFetchGifs = ( category )=>{

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    
  useEffect (()=>{

     //devuelve un promesa
     getGifs(category)
     .then(imgs=>{
         //imagenes
         console.log(imgs);
            setState({
                data:imgs,
                loading:false
             })
     }) 
    //dependencias
   }, [category])


return state; 
/*  {
    data:[],
    loading:true
} */
}