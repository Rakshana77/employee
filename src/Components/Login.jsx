import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
     const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')
const navigate=useNavigate()
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/login',{ email, password})
            .then(res => {
                console.log(res)
                if(res.data ==="success"){navigate('/employee')}
            })
        .catch(err=>console.log(err))
    }
  return (
      <div className='d-flex justify-content-center align-align-items-center bg-secondary vh-100'>
          <div className='bg-white rounded p-3 w-25'>
              <h2>login</h2> 
              <form onSubmit={(handlesubmit)}>
                  
                  <div className='mb-3'>
                      <label htmlFor='email'>
                       <strong>email</strong>   
                      </label>
                      <input type='text'
                          placeholder='name'
                          autoComplete='off'
                          name='email'
                          className='form-control rounded-0'
                          onChange={(e)=>setEmail(e.target.value)}
                      />
                  </div>
                  <div className='mb-3'>
                      <label htmlFor='email'>
                       <strong>password</strong>   
                      </label>
                      <input type='text'
                          placeholder='password'
                          autoComplete='off'
                          name='password'
                          className='form-control rounded-0'
                          onChange={(e)=>setPassword(e.target.value)}
                          
                      />
                  </div>
                  
                  <button type='submit' className='btn btn-default text text-decoration-none w-100 rounded-0'>login</button>
              </form>
          </div>
    </div>
  )
}

export default Login
