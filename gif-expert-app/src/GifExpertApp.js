import React from 'react'
import {useState} from 'react'
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {
   

        
        const [categories, setCategories] = useState(['One Puch', 'Samuray X', 'Dragon Ball']);

        //Funcion para agregar un valor al final del array de categories
        /* const handleAdd = ()=>{ */
            
            /* setCategories([...categories,'Dragon']) */
            //setea el estado
            /* setCategories(cate=>[...cate,'Dragon'])
             */

        

        return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories ={setCategories}/>
            
            <ol>
                    {
                        categories.map(category=>{
                            return <li key={category}>{category}</li>
                        })
                    }
            </ol>
        </>
    )

                }      