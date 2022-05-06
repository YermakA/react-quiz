import React, { useContext } from 'react';
import Question from './Question';
import { QuizContext } from '../contexts/quiz';




const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log(quizState);

    return (
        <div className='quiz'>
            <div>
                <div className='score'>Question 1/8</div>
                <Question questions={quizState.questions} />
                <div
                    className='next-button'
                    onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                >Next question</div>
            </div>
        </div>
    );
}

export default Quiz;
