import React, {useContext} from 'react'
import {QuizContext} from '../context/quiz'

import './GameOver.css'

import wellDone from '../img/welldone.svg'



const GameOver = () => {

    const [quizState, dispatch] = useContext(QuizContext);
    
    return (
        <div id="gameover">
            <h2>Fim de jogo</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
            <img src={wellDone} alt="fim do quiz" />
            <button 
            onClick={() => dispatch({type: "NEW_GAME"})}>Reninciar</button>
        </div>
    )
}

export default GameOver