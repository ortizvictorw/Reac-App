import React, {useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value=1 }) => {

    const [counter, setCounter] = useState(value)
   



    //hangleAdd
 const hangleAdd = () =>{
   setCounter (counter +1) 
 }
 const hangleSubtract = () =>{
    setCounter (counter -1) 
  }
  const hanglReset = () =>{
    setCounter (value) 
  }
  

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={hangleSubtract} >-1</button>
            <button onClick={hanglReset} >Restet</button>
            <button onClick={hangleAdd} >+1</button>
        </>
        
    )
}

CounterApp.propTypes = {
value: PropTypes.number 
}

export default CounterApp
