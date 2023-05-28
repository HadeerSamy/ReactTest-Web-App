import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { examsAction } from './store/slices/ExamSlice';
import GetExamThunk from './store/Middleware/examMiddleware';
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import "./project.css"



function Test() {


    const store= useSelector(state=>state)

    const dispatch= useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        
        dispatch(GetExamThunk())
    },[])
    //#region colorizing choice clicked
    const chooses = document.querySelectorAll(".radio-button-label")
    for(var i = 0; i<chooses.length;i++)
    {
        chooses[i].addEventListener("click",colorize)
    }
    function removeColor()
    {
        for(var i = 0;i<chooses.length;i++)
        {
            chooses[i].classList.remove("colorChoice")
        }
    }
    function colorize()
    {
        removeColor()
        this.classList.add("colorChoice")
    }
    //#endregion
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const ques = currentQuestionIndex + 1
//m3 kol ta8yeera ba8ayar qeemet l final answer
    const handleChoiceChange = (e) => {
        if(e.target.value == store.ExamReducer.exam[currentQuestionIndex].correctAnswer)
        {

            dispatch(examsAction.answerFinal("correct"))
        }
        else{


            dispatch(examsAction.answerFinal("wrong"))
        }
    };
//3la 7asab qeemet l final answer ba8ayar howa hyzwd fe l right wla l wrong w yero7 3ally b3do
    const handleClick = ()=>{
        if(store.ExamReducer.answer == "correct")
        {
            let currentCorrect = store.ExamReducer.correct
            dispatch(examsAction.correctAnswer(++currentCorrect))
        }
        else{
            let currentFalse = store.ExamReducer.wrong
            dispatch(examsAction.wrongAnswer(++currentFalse))

        }

        if(currentQuestionIndex < store.ExamReducer.exam.length - 1)
        {

            (setCurrentQuestionIndex(currentQuestionIndex + 1))
        }
        else
        {
            navigate("/result")
        }
        //34an lw dost next mn 8er ma a5tar 7aga howa byfdl mo7tfz b qemto l a5eera
        dispatch(examsAction.answerFinal(""))
        removeColor()
    }
    
    if(store.ExamReducer.exam== null)
    {
        return(<><h1>hi</h1>
        {console.log(store.ExamReducer)}</>)
    }
    else{
        const currentQuestion = store.ExamReducer.exam[currentQuestionIndex];
    

        return(
        <>
        <div className='nav'>

        <h1 >Hello {store.HomeReducer.name}</h1>
        </div>
        <div className='question'>
            <h6>Question {ques} out of 5</h6>
            <h3>{currentQuestion.title}</h3>


                {currentQuestion.choices.map((choice, index) => (
                    <div key={index}>
                    <input
                      type="radio"
                      id={`choice-${index}`}
                      name="choices"
                      value={choice}
                      onClick={handleChoiceChange}
                     
                    />
                    <label htmlFor={`choice-${index}`} className="radio-button-label">{choice}</label>

                  </div>

                ))}

            <button onClick={()=>handleClick()}>
            {(currentQuestionIndex < store.ExamReducer.exam.length - 1)?"Next":"Show me result"}
            </button>
        </div>

        </>
        )
    }


}

export default Test;
