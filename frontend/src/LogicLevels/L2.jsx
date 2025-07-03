import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l2ProblemImg from '../assets/LogicLevels/l2.png';

import l2a from '../assets/LogicLevels/l2a.png';
import l2b from '../assets/LogicLevels/l2b.png';
import l2c from '../assets/LogicLevels/l2c.png';

import next from '../assets/next.png';
import { useNavigate } from 'react-router-dom';

function L2() {
    const [isCorrect, setIsCorrect] = useState(null);
    const [shakeInput, setShakeInput] = useState(false);
    const navigate = useNavigate();

    const handleClick = async (choice) => {
        try {
            const res = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L2"
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
        <div className="L2Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l2ProblemContainer">
                <img 
                    src={l2ProblemImg} 
                    alt="" 
                    className="l2ProblemImg" 
                />
            </div>
            <div className={`choicesContainer ${shakeInput ? 'shake' : ''}`}>
                <img 
                    src={l2a} 
                    alt="" 
                    className="l2a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l2b} 
                    alt="" 
                    className="l2b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l2c} 
                    alt="" 
                    className="l2c" 
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
                        onClick={() => navigate('/LogicLevels/L3')}
                    />
                </div>
            )}
        </div>
        </>
    )
}

export default L2;