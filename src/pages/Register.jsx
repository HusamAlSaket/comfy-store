import React from 'react'
import {FormInput, SubmitBtn} from '../components';
import { Form,Link} from 'react-router-dom';


const  Register= () =>{
  return (
    <section className='h-screen grid place-items-center'>
      <Form method='post' className='card w-96 bg-base-100 shadow-xl p-8 flex flex-col 
      gap-y-4'>
        
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput name='username' type='text' label='username'  />
        <FormInput name='email' type='email' label='email'  />
        <FormInput name='password' type='password' label='password'  />
      <div className="mt-4">
        <SubmitBtn text='register' />
            <p className="text-center">
           Already A member  ?{" "}
          <Link
            to="/login"
            className="ml-2 link link-hover
            link-primary capitalize"
          >
            Login
          </Link>
        </p>
      
      </div>
      </Form>
    </section>
  )
}

export default Register