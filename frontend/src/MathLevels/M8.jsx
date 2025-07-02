import { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';
import m8ProblemImg from '../assets/MathLevels/m8.png';
import next from '../assets/next.png';
import { useNavigate } from 'react-router-dom';

function M8() {
    const [answer, setAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const [shakeInput, setShakeInput] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://localhost:8080/api/check-answer', {
                answer: answer,
                level: "M8"
            });
            if (res.data === true) {
                setIsCorrect(true);
            } else {
                setIsCorrect(false);
                setShakeInput(true);
                setTimeout(() => setShakeInput(false), 500);
            }
        } catch (err) {
            console.error("Error checking answer", err);
        }
    };
    return (
        <>
        <div className="M8Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="m8ProblemContainer">
                <img 
                    src={m8ProblemImg} 
                    alt="" 
                    className="m8ProblemImg" 
                />
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
                        onClick={() => navigate('/MathLevels/M9')}
                    />
                </div>
            )}
        </div>
        </>
    )
}

export default M8;