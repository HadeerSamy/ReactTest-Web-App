import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card';
import { postsAction } from "./store/slices/PostSlice";
import Spinner from 'react-bootstrap/Spinner';


function Liked() {


    const dispatch= useDispatch()
    const store= useSelector(state=>state)
useEffect( ()=>{
    const helper = []
    store.postReducer.posts.map((post)=>{
        if(post.isLiked === true)
        {
            helper.push(post)
        }
    })
    console.log(helper,"help")
    dispatch(postsAction.onlyLiked(helper))

},[])

if(store.postReducer.liked === null)
{
    return(
        <Spinner animation="border" />

    )
}
else{

    return ( <>
    {
    store.postReducer.liked.map((post)=>(

    <Card className = "cards">
      <Card.Body key = {post.id}>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {post.body}, <br></br>
        </Card.Text>
      </Card.Body>
    </Card>
    ))
    }
    
    
    </> );
}
}

export default Liked ;