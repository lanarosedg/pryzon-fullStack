import logo from '../assets/logo.png';
import m1ProblemImg from '../assets/MathLevels/m1.png';

import React, { useState } from 'react';

function M1() {
    const [answer, setAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/answer/check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ answer }),
            });

            const result = await response.json();
            setIsCorrect(result);
        } catch (err) {
            console.error('Error checking answer:', err);
        }
    };

    return (
        <>
        <div className="M1Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="m1ProblemContainer">
                <img 
                    src={m1ProblemImg} 
                    alt="" 
                    className="m1ProblemImg" 
                />
            </div>
            <div className="answerInputContainer">
                <input 
                    type="text" 
                    className="answerInput"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)} 
                />
                <button 
                    className="answerButton" 
                    onClick={handleSubmit}
                    >
                        Submit
                </button>
                {isCorrect !== null && (
                    <div>
                        {isCorrect ? 'Correct!' : 'Try again!'}
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default M1;