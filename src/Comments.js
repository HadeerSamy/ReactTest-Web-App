import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import './Students.css';
import { Link } from "react-router-dom";
import Detailed from './detailed';

function Comments (props) {
  const[flag, setFlag] = useState(false)

const[like,setLike]=useState(props.data.isLiked)

const likeButton = ()=>{
  //ta8yeer l data nafsaha mn l function elly mab3ota mn l parent
  props.likeStatus(props.data, !like)

  //ta8yeer l display button nfsaha hna
  setLike(!like)
}

  return ( 
    <>
    <Card className = "cards">
      <Card.Body key = {props.data.id}>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
          {props.data.body}, <br></br>
        </Card.Text>
        <Button style={{marginRight:10}}variant="success" onClick={()=>alert(`Hello, My name is ${props.data.title}`)}>Click Me!</Button>
        <Button variant={like?"danger":"primary"} onClick={likeButton}>{like?"Dislike":"Like"}</Button>
        <Link to={`/post/${props.data.id}`}>Open Post</Link>
      </Card.Body>
    </Card>
      </>
   );
}

export default Comments ;


//#region class
// class Comments extends Component {
//   constructor(props) {
//     super(props);
//     this.state={
//       like:this.props.data.isLiked
//     }

//   }


//   componentDidMount() {
//     console.log(this.props)
//   }

//   likeButton = ()=>{
//     //ta8yeer l data nafsaha mn l function elly mab3ota mn l parent
//     this.props.likeStatus(this.props.data, !this.state.like)

//     //ta8yeer l display button nfsaha hna
//     this.setState({
//       like:!this.state.like
//     })
//   }
//   render() {

//     return (
//       <>



//     <Card className = "cards">
//       <Card.Body key = {this.props.data.id}>
//         <Card.Title>{this.props.data.name}</Card.Title>
//         <Card.Text>
//           Email : {this.props.data.email}, <br></br>
//         </Card.Text>
//         <Button style={{marginRight:10}}variant="success" onClick={()=>alert(`Hello, My name is ${this.props.data.name}`)}>Click Me!</Button>
//         <Button variant={this.state.like?"danger":"primary"} onClick={this.likeButton}>{this.state.like?"Dislike":"Like"}</Button>
//       </Card.Body>
//     </Card>


//       </>
//     );
//   }
// }


// export default Comments;

//#endregion