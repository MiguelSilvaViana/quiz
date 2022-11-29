import React, {useContext, useEffect} from 'react'
import Welcome from './components/Welcome'
import Question from './components/Question'
import {QuizContext} from '../src/context/quiz'
import './App.css'
import GameOver from './components/GameOver'


export default props => {
    const [quizState, dispatch] = useContext(QuizContext);

    useEffect(() => {
        // embaralhar perguntas
        dispatch({type: "REOREDER_QUESTIONS"})
    }, [])

    return (
        <div className="App">
            <h1>Quiz de programação</h1>
            {quizState.gameStage === "Start" && <Welcome/> }
            {quizState.gameStage === "Playing" && <Question/> }
            {quizState.gameStage === "End" && <GameOver/> }
        </div>
    )
}