import { useNavigate } from 'react-router-dom';
import '../project.css'
import { homeAction,homeReducer } from '../store/slices/HomeSlice';
import { examsAction } from './slices/ExamSlice';
import { useSelector, useDispatch } from "react-redux";

function Thanks () {

    const store= useSelector(state=>state)

    const dispatch= useDispatch()
    const navigate = useNavigate()
    // dispatch(homeAction.userName(null))
    // dispatch(homeAction.userEmail(null))
    // dispatch(examsAction.wrongAnswer(0))
    // dispatch(examsAction.correctAnswer(0))
    // dispatch(examsAction.answerFinal(""))
    // dispatch(examsAction.examQuestions(null))

    return (  
        <>
                <div className='nav'>

            <h1 >GoodBye!</h1>
            </div>
<div className='thankyou'>


<h3>Thank you for using this platform</h3>
<button onClick={()=>{navigate("/")}} onvariant="outline-primary" type="submit" >
Home Page </button>
</div>
        </>
    );
}

export default Thanks ;