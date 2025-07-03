import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l9ProblemImg from '../assets/LogicLevels/l9.png';

import l9a from '../assets/LogicLevels/l9a.png';
import l9b from '../assets/LogicLevels/l9b.png';
import l9c from '../assets/LogicLevels/l9c.png';

import next from '../assets/next.png';
import { useNavigate } from 'react-router-dom';

function L9() {
    const [isCorrect, setIsCorrect] = useState(null);
    const [shakeInput, setShakeInput] = useState(false);
    const navigate = useNavigate();

    const handleClick = async (choice) => {
        try {
            const res = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L9"
            });
            if (res.data === true) {
                setIsCorrect(true);
            } else {
                setIsCorrect(false);
                setShakeInput(true);
                setTimeout(() => setShakeInput(false), 500); 
            }
        }  catch (err) {
            console.error("Error checking answer", err);
        }
    };

    return (
        <>
        <div className="L9Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l9ProblemContainer">
                <img 
                    src={l9ProblemImg} 
                    alt="" 
                    className="l9ProblemImg" 
                />
            </div>
            <div className={`choicesContainer ${shakeInput ? 'shake' : ''}`}>
                <img 
                    src={l9a} 
                    alt="" 
                    className="l9a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l9b} 
                    alt="" 
                    className="l9b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l9c} 
                    alt="" 
                    className="l9c" 
                    onClick={() => handleClick("C")}
                />
                </div>
                {isCorrect === true && (
                    <div className="correct-animationL1">
                        <p>✔ Correct!</p>
                        <img
                            src={next}
                            alt="Next"
                            className="nextButton"
                            onClick={() => navigate('/LogicLevels/L10')}
                        />
                    </div>
                )}
        </div>
        </>
    )
}

export default L9;