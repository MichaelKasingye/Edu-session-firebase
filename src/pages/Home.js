import React, { useState } from 'react'
import { postData } from '../Services/functionServices';

export default function Home() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(prev => ({...prev, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs)
    postData(inputs)
    }
  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column bd-highlight mb-3 container mt-5">
      <label>Todo:
      <input 
        type="text" 
        name="todo" 
        value={inputs.todo || ""} 
        onChange={handleChange}
      />
      </label>
      {/* <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label> */}
        <input type="submit" />
    </form>
  )
}
