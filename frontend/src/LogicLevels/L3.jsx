import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l3ProblemImg from '../assets/LogicLevels/l3.png';

import l3a from '../assets/LogicLevels/l3a.png';
import l3b from '../assets/LogicLevels/l3b.png';
import l3c from '../assets/LogicLevels/l3c.png';

import next from '../assets/next.png';
import { useNavigate } from 'react-router-dom';

function L3() {
    const [isCorrect, setIsCorrect] = useState(null);
    const [shakeInput, setShakeInput] = useState(false);
    const navigate = useNavigate();

    const handleClick = async (choice) => {
        try {
            const res = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L3"
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
        <div className="L3Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l3ProblemContainer">
                <img 
                    src={l3ProblemImg} 
                    alt="" 
                    className="l3ProblemImg" 
                />
            </div>
            <div className={`choicesContainer ${shakeInput ? 'shake' : ''}`}>
                <img 
                    src={l3a} 
                    alt="" 
                    className="l3a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l3b} 
                    alt="" 
                    className="l3b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l3c} 
                    alt="" 
                    className="l3c" 
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
                            onClick={() => navigate('/LogicLevels/L2')}
                        />
                    </div>
                )}
        </div>
        </>
    )
}

export default L3;