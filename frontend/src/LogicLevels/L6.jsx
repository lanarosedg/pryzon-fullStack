import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l6ProblemImg from '../assets/LogicLevels/l6.png';

import l6a from '../assets/LogicLevels/l6a.png';
import l6b from '../assets/LogicLevels/l6b.png';
import l6c from '../assets/LogicLevels/l6c.png';

import next from '../assets/next.png';
import { useNavigate } from 'react-router-dom';

function L6() {
    const [isCorrect, setIsCorrect] = useState(null);
    const [shakeInput, setShakeInput] = useState(false);
    const navigate = useNavigate();

    
    const handleClick = async (choice) => {
        try {
            const res = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L6"
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
        <div className="L6Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l6ProblemContainer">
                <img 
                    src={l6ProblemImg} 
                    alt="" 
                    className="l6ProblemImg" 
                />
            </div>
            <div className={`choicesContainer ${shakeInput ? 'shake' : ''}`}>
                <img 
                    src={l6a} 
                    alt="" 
                    className="l6a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l6b} 
                    alt="" 
                    className="l6b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l6c} 
                    alt="" 
                    className="l6c" 
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
                            onClick={() => navigate('/LogicLevels/L7')}
                        />
                    </div>
                )}
        </div>
        </>
    )
}

export default L6;