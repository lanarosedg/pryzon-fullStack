import { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';
import home from '../assets/home.png';
import { useNavigate } from 'react-router-dom';

function M12() {
    const [answer, setAnswer] = useState('');
        const [isCorrect, setIsCorrect] = useState(null);
        const [shakeInput, setShakeInput] = useState(false);
        const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://localhost:8080/api/check-answer', {
                answer: answer,
                level: "M12"
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
        <div className="M12Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="m12ProblemContainer">
                <p className="m12ProblemStatement">
                    HA, FD, DI, ? 
                </p>
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
                        src={home} 
                        alt="" 
                        className="nextButton" 
                        onClick={() => navigate('/MathLevel')}
                    />
                </div>
            )}
        </div>
        </>
    )
}

export default M12;