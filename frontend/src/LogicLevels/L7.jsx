import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l7ProblemImg from '../assets/LogicLevels/l7.png';

import l7a from '../assets/LogicLevels/l7a.png';
import l7b from '../assets/LogicLevels/l7b.png';
import l7c from '../assets/LogicLevels/l7c.png';

import next from '../assets/next.png';
import { useNavigate } from 'react-router-dom';

function L7() {
    const [isCorrect, setIsCorrect] = useState(null);
    const [shakeInput, setShakeInput] = useState(false);
    const navigate = useNavigate();

    const handleClick = async (choice) => {
        try {
            const res = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L7"
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
        <div className="L7Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l7ProblemContainer">
                <img 
                    src={l7ProblemImg} 
                    alt="" 
                    className="l7ProblemImg" 
                />
            </div>
            <div className={`choicesContainer ${shakeInput ? 'shake' : ''}`}>
                <img 
                    src={l7a} 
                    alt="" 
                    className="l7a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l7b} 
                    alt="" 
                    className="l7b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l7c} 
                    alt="" 
                    className="l7c" 
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
                            onClick={() => navigate('/LogicLevels/L8')}
                        />
                    </div>
                )}
        </div>
        </>
    )
}

export default L7;