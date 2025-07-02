import { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';
import m11ProblemImg from '../assets/MathLevels/m11.png';
import next from '../assets/next.png';
import { useNavigate } from 'react-router-dom';


function M11() {
    const [answer, setAnswer] = useState('');
        const [isCorrect, setIsCorrect] = useState(null);
        const [shakeInput, setShakeInput] = useState(false);
        const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://localhost:8080/api/check-answer', {
                answer: answer,
                level: "M11"
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
        <div className="M11Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="m11ProblemContainer">
                <img 
                    src={m11ProblemImg} 
                    alt="" 
                    className="m11ProblemImg" 
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
                        onClick={() => navigate('/MathLevels/M12')}
                    />
                </div>
            )}
        </div>
        </>
    )
}

export default M11;