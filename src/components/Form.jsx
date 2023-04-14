import React, { useState } from "react";
import Validation from './validation';


export default function Form({login}) {

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData)
  }
  
  const handleChange = event => {
    const { name, value} = event.target;
    setUserData({ ...userData, [name]: value });
    Validation({ ...userData, [name]: value }, errors, setErrors)
    }


  return (
      <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="Email">Email</label>
        <input type='text' name='email' value={userData.email} onChange={handleChange}/>
         <span>{errors.email}</span>
        <label htmlFor="Password">Password</label>
        <input type='text' name='password' value={userData.password} onChange={handleChange}/>
          <span>{errors.password}</span>
        <button type="submit">Submit</button>
    </div>
    {
      errors.email || errors.password ? <button type='submit' disabled>Submit</button> : <button type='submit'>Submit</button>
    }
      </form>
  );
}
