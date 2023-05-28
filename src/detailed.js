import React, { Component, useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';
import { useSelector, useDispatch } from "react-redux";
import getPostsThunk from './store/Middleware/detailedMiddle';
import { postsAction } from './store/slices/PostSlice';




function Detailed(props) {
    const [post,setPost]=useState(null)
    const {id}= useParams()
    const dispatch= useDispatch()
    const store= useSelector(state=>state)



    useEffect(()=>{
      //   axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
      //   //   console.log(res)
      //     if(res.status===200)
      //     {
      //       setPost(res.data)
      //     }
      //   }
      // )
      dispatch(postsAction.detailedPost(null))
      dispatch(getPostsThunk(id))
    }
,[id])

console.log(post)
const navigate = useNavigate();

if(store.postReducer.detailed === null)
{
    return(
        <Spinner animation="border" />
    )
}
else{


    return ( <>

        <Card className = "cards">
      <Card.Body>
        <Card.Title>{store.postReducer.detailed.title}</Card.Title>
        <Card.Text>
        {store.postReducer.detailed.body}, <br></br>

        </Card.Text>
        <Button variant={"primary"} onClick={() => navigate(-1)}>Go Back</Button>
      </Card.Body>
    </Card>
    </> );}
}

export default Detailed;