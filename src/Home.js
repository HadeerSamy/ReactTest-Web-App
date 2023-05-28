import React, { Component, useEffect, useState } from 'react';
import Comments from './Comments';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button';
import store from './store/store';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from "react-redux";
import { postsAction } from './store/slices/PostSlice';
import './project.css'
import { homeAction,homeReducer } from './store/slices/HomeSlice';

import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Home () {

  const store= useSelector(state=>state)

const dispatch= useDispatch()

const navigate = useNavigate()



  return (  
    <>
        <div className='nav'>

<h1 >Home</h1>
</div>

    <div className='wholeForm'>

        <form >

            <label style={{ paddingRight: '54px' }}>Name</label>
            <input required onChange={(e)=>{dispatch(homeAction.userName(e.target.value))}} type="text" placeholder="Enter your full name" />
            <br></br>
            <br></br>


            <label>Email address</label>
            <input  required onChange={(e)=>{dispatch(homeAction.userEmail(e.target.value))}} type="email" placeholder="Enter your email address" />
            <br></br>
            <br></br>
            <br></br>
          <button onClick={()=>{navigate("/exam")}} onvariant="outline-primary" type="submit" >
            Start
          </button>
        </form>


    </div>

  </>
  );
}

export default Home ;