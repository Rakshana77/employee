import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {LoginSocialGoogle} from 'reactjs-social-login'
const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')
const navigate=useNavigate()
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/register',{ name, email, password})
            .then(res => {console.log(res)
            navigate('/login')})
        .catch(err=>console.log(err))
    }
  return (
      <div className='d-flex justify-content-center align-align-items-center bg-secondary vh-100'>
          <div className='bg-white rounded p-3 w-25'>
              <h2>register</h2> 
              <form onSubmit={handlesubmit}>
                  <div className='mb-3'>
                      <label htmlFor='email'>
                       <strong>Name</strong>   
                      </label>
                      <input type='text'
                          placeholder='name'
                          autoComplete='off'
                          name='email'
                          className='form-control rounded-0'
                          onChange={(e)=>setName(e.target.value)}
                      />
                  </div>
                  <div className='mb-3'>
                      <label htmlFor='email'>
                       <strong>email</strong>   
                      </label>
                      <input type='text'
                          placeholder='email'
                          autoComplete='off'
                          name='email'
                          className='form-control rounded-0'
                          onChange={(e) => setEmail(e.target.value)}
                      />
                  </div>
                  <div className='mb-3'>
                      <label htmlFor='password'>
                       <strong>password</strong>   
                      </label>
                      <input type='text'
                          placeholder='password'
                          autoComplete='off'
                          name='password'
                          className='form-control rounded-0'
                           onChange={(e) => setPassword(e.target.value)}
                      />
                  </div>
                  <button type='submit' className='btn btn-success  w-100 rounded-0'>register</button>
                   </form>
                  <p>
                      already have account login
                  </p>
               
              <Link to='/login' type='submit' className='btn btn-default text text-decoration-none w-100 rounded-0'>login</Link>
              <LoginSocialGoogle client_id='206034599236-9858mp1hnobhkilnc89ig5f3gki1p1as.apps.googleusercontent.com' access_type="offline" onResolve={({ provider, data }) => { console.log(provider, data) }}
              onReject={(err)=>{console.log(err)}}><button className='btn btn-success  w-100 rounded-0'>login with google</button></LoginSocialGoogle>

          </div>
    </div>
  )
}

export default Signup
