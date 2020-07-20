import React from 'react'
import {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('')
    //funcion qeu se dispara al detectar un cambio dentro del input
    //recive dicho cambio(e) y se lo asigna al Hook (setInputValue)
    const handleInputValue = (e)=>{
        setinputValue(e.target.value);
    }

    //funcion que orevent default
    
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(inputValue.trim().length>2){
        setCategories(cat=>([...cat, inputValue]))
        setinputValue ('');
    }
    }

    return (
        <form onSubmit={handleSubmit}>
        
            <input
            type="text"
            //valor del input actaul
            value={inputValue}
            //evento ooChange cpara setear el state
            onChange={handleInputValue}
           />
        </form>
    )
}

AddCategory.propTypes ={
    setCategories : PropTypes.func.isRequired

}