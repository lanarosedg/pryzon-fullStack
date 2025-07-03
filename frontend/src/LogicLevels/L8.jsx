import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l8ProblemImg from '../assets/LogicLevels/l8.png';

import l8a from '../assets/LogicLevels/l8a.png';
import l8b from '../assets/LogicLevels/l8b.png';
import l8c from '../assets/LogicLevels/l8c.png';

import next from '../assets/next.png';
import { useNavigate } from 'react-router-dom';

function L8() {
    const [isCorrect, setIsCorrect] = useState(null);
    const [shakeInput, setShakeInput] = useState(false);
    const navigate = useNavigate();

    const handleClick = async (choice) => {
        try {
            const res = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L8"
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
        <div className="L8Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l8ProblemContainer">
                <img 
                    src={l8ProblemImg} 
                    alt="" 
                    className="l8ProblemImg" 
                />
            </div>
            <div className={`choicesContainer ${shakeInput ? 'shake' : ''}`}>
                <img 
                    src={l8a} 
                    alt="" 
                    className="l8a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l8b} 
                    alt="" 
                    className="l8b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l8c} 
                    alt="" 
                    className="l8c" 
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
                            onClick={() => navigate('/LogicLevels/L9')}
                        />
                    </div>
                )}
        </div>
        </>
    )
}

export default L8;