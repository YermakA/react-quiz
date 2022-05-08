import React, { useContext, useEffect } from 'react';
import Question from './Question';
import { QuizContext } from '../contexts/quiz';




const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const apiURL = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    console.log(quizState);
    useEffect(
        () => {
            if (quizState.questions.length > 0) {
                return;
            }
            console.log("useEffect");
            fetch(apiURL)
                .then(res => res.json())
                .then(data => { dispatch({ type: "LOADED_QUESTIONS", payload: data.results }) });
        });
    return (
        <div className='quiz'>
            {
                quizState.showResults && (
                    <div className='results'>
                        <div className='congratulations'>Congratulations</div>
                        <div className='results-info'>
                            <div>you have complete the quiz.</div>
                            <div>you've got {quizState.correctAnswersCount} of {quizState.questions.length}</div>
                            <div className='next-button' onClick={() => dispatch({ type: "RESTART" })}>
                                Restart
                            </div>
                        </div>
                    </div>
                )
            }
            {
                !quizState.showResults && quizState.questions.length > 0 && (
                    <div>
                        <div className='score'>Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}</div>
                        <Question />
                        <div
                            className='next-button'
                            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                        >Next question</div>

                    </div>)
            }
        </div >
    )
}

export default Quiz;
