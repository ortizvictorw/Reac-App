import React from 'react'
import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
   

        
        const [categories, setCategories] = useState(['Dragon Ball']);

        //Funcion para agregar un valor al final del array de categories
        /* const handleAdd = ()=>{ */
            
            /* setCategories([...categories,'Dragon']) */
            //setea el estado
            /* setCategories(cate=>[...cate,'Dragon'])
             */

        

        return (
        <>
            <h2>Buscador de Gif</h2>
            <AddCategory setCategories ={setCategories}/>
            
            <ol>
                    {
                        categories.map(category =>(
                            <GifGrid 
                            key={category}
                            category={category}
                            />
                        ) )
                            
                       
                    }
            </ol>
        </>
    )

                }      