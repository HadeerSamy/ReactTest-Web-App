import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import "./project.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { homeAction,homeReducer } from './store/slices/HomeSlice';
import { examsAction } from './store/slices/ExamSlice';
import { useSelector, useDispatch } from "react-redux";

function Feedback () {
    const dispatch= useDispatch()

    const navigate = useNavigate()
    return ( <>
        <div className='nav'>

        <h1 >Feedback</h1>
        </div>
        <form>

        <textarea required rows={5} placeholder="Please tell us your feedback"></textarea><br></br>

          <button onClick={()=>{navigate("/thanks");dispatch(homeAction.userName(null));
                dispatch(homeAction.userEmail(null));

                dispatch(examsAction.wrongAnswer(0));
                dispatch(examsAction.correctAnswer(0));
                dispatch(examsAction.answerFinal(""));
                dispatch(examsAction.examQuestions(null));}} onvariant="outline-primary" type="submit" >
            Submit
        </button>
        </form>

    </> );
}

export default Feedback;