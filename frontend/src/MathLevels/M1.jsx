import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';
import m1ProblemImg from '../assets/MathLevels/m1.png';
import next from '../assets/next.png';
import { useNavigate } from 'react-router-dom';

function M1() {
    const [answer, setAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const [shakeInput, setShakeInput] = useState(false); // State to control shaking effect
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://localhost:8080/api/check-answer', {
                answer: answer,
                level: 'M1'
            });
            if (res.data === true) {
                setIsCorrect(true);
            } else {
                setIsCorrect(false);
                setShakeInput(true); // Trigger shake effect on wrong answer
                setTimeout(() => setShakeInput(false), 500); // Reset shake effect after 500ms
            }
        } catch (err) {
            console.error("Error checking answer", err);
        }
    };

    return (
        <div className="M1Container">
            <div className="logoContainer">
                <img src={logo} alt="" className="logo" />
            </div>
            <div className="m1ProblemContainer">
                <img src={m1ProblemImg} alt="" className="m1ProblemImg" />
            </div>
            <div className="answerInputContainer">
                <input 
                    type="text" 
                    className={`answerInput ${shakeInput ? 'shake' : ''}`}
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <button className="answerButton" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
            {isCorrect === true && (
                <div className="correct-animation">
                    <p>✔ Correct!</p>
                    <img 
                        src={next} 
                        alt="" 
                        className="nextButton" 
                        onClick={() => navigate('/MathLevels/M2')}
                    />
                </div>
            )}
        </div>
    );
}

export default M1;
