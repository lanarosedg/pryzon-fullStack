import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l5ProblemImg from '../assets/LogicLevels/l5.png';

import l5a from '../assets/LogicLevels/l5a.png';
import l5b from '../assets/LogicLevels/l5b.png';
import l5c from '../assets/LogicLevels/l5c.png';

import next from '../assets/next.png';
import { useNavigate } from 'react-router-dom';

function L5() {
    const [isCorrect, setIsCorrect] = useState(null);
    const [shakeInput, setShakeInput] = useState(false);
    const navigate = useNavigate();

    const handleClick = async (choice) => {
        try {
            const res = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L5"
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
        <div className="L5Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l5ProblemContainer">
                <img 
                    src={l5ProblemImg} 
                    alt="" 
                    className="l5ProblemImg" 
                />
            </div>
            <div className={`choicesContainer ${shakeInput ? 'shake' : ''}`}>
                <img 
                    src={l5a} 
                    alt="" 
                    className="l5a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l5b} 
                    alt="" 
                    className="l5b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l5c} 
                    alt="" 
                    className="l5c" 
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
                            onClick={() => navigate('/LogicLevels/L6')}
                        />
                    </div>
                )}
        </div>
        </>
    )
}

export default L5;