import React, { Component, useEffect, useState } from 'react';
import Comments from './Comments';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import NavBar from './NavBar';
import Home from './Home';
import { createBrowserRouter, createRoutesFromElements, Routes, Route, RouterProvider, BrowserRouter } from "react-router-dom";
import Test from './Test';
import Table from 'react-bootstrap/Table';
import Detailed from './detailed';
import Filtering from './Filtering';
import Liked from './Liked';
import Result from './Result';
import Feedback from './Feedback';
import Thanks from './store/Thanks';


function App () {
  const routerApp = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavBar/>}>
        <Route
        index
          element={<Home/>}

        />
        <Route
          element={<Test/>}
        path='/exam'
        />
         <Route
          element={<Result/>}
        path='/result'

        />

        <Route
          element={<Feedback/>}
        path='/feedback'
        />
                <Route
          element={<Thanks/>}
        path='/thanks'
        />





      </Route>


    )
  );


  return (  
    <RouterProvider router={routerApp} />
  );
}

export default App ;






//#region class

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       comments:[],
//       flag:false

//     }

//   }
//   componentDidMount() {
//     axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
//       console.log(res)
//       if (res.status === 200) {
//         //azwd property l like w b5leehom l awal kolhom m4 m3molohom like
//           const newComments = res.data.map((comment) => {
//             return {
//               ...comment,
//               isLiked: false,
//             };
//           });
//         this.setState({
//           comments: newComments,
//           // isLoading:false
//         })
//       }
//     })
//   }

//   //function ab3tha ll child 34an lma y8yr fe l like tt8yr hna 3ndy fe l data brdo
//   changeLikeStatus = (commentChosen,status)=>{
//     const updatedComments = this.state.comments.map((comment)=>{
//       if(comment.id === commentChosen.id)
//       {
//         return{
//           ...comment,
//           isLiked:status
//         }
//       }
//       else{
//         return{
//           ...comment
//         }
//       }
//     })
//     this.setState({
//       comments:updatedComments
//     })

//   }
//   render() {

//     return (
      
//       <>
//         <NavBar/>


//         <button onClick={()=>this.setState({flag:true})}>Show Comments</button>
//         <br></br>
//         {this.state.flag && (
//           this.state.comments.map((comment) => {
//            return <Comments likeStatus={this.changeLikeStatus} data={comment} />;
//           }))}
//       </>
//     );
//   }
// }


// export default App;

//#endregion