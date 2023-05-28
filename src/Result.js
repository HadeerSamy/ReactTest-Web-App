import { Link } from 'react-router-dom';

import "./project.css"
import { useSelector, useDispatch } from "react-redux";
import happy from "./1.png"
import sad from "./2.png"
import { useNavigate } from "react-router-dom";

function Result() {
    const navigate = useNavigate()

    const store= useSelector(state=>state)
    let degree = (store.ExamReducer.correct/store.ExamReducer.exam.length)*100

    if(degree<50)
    {
        <div className='nav'>

        <h1 >Results</h1>
        </div>
        return(<>
            <div className='nav'>

            <h1 >Results</h1>
            </div>
            <div className="middle Sad">
            <h2> Hard Luck {store.HomeReducer.name}!!!</h2>
            <h3>You didn't succees in passing the test by {degree}%</h3>
            <img src={sad}></img>
            <p><Link to="/feedback">Please help this organization to get better by submitting your feedback</Link></p>    

            </div>
        </>)
    }
    else{

    return ( <>
            <div className='nav'>

        <h1 >Results</h1>
        </div>
    <div className="middle Happy">

        <h2> Congratulations {store.HomeReducer.name}!!!</h2>
        <h3>You passed the test by {degree}%</h3>
        <img src={happy}></img>

        <p><Link to="/feedback">Please help this organization to get better by submitting your feedback</Link></p>    
    </div>
    
    </> );
    }
}

export default Result ;


























// const GradientCircleProgressbar = ({
//   percentage = store.ExamReducer.correct/store.ExamReducer.exam.length,
//   width,
//   strokeWidth="20px",
//   fontSize,
//   fontColor,
//   fontFamily,
//   primaryColor,
//   secondaryColor,
//   fill,
//   hidePercentageText,
//   strokeLinecap,
// }) => {



// }

