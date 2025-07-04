import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l10ProblemImg from '../assets/LogicLevels/l10.png';

import l10a from '../assets/LogicLevels/l10a.png';
import l10b from '../assets/LogicLevels/l10b.png';
import l10c from '../assets/LogicLevels/l10c.png';

import next from '../assets/next.png';
import { useNavigate } from 'react-router-dom';

function L10() {
    const [isCorrect, setIsCorrect] = useState(null);
    const [shakeInput, setShakeInput] = useState(false);
    const navigate = useNavigate();

    const handleClick = async (choice) => {
        try {
            const res = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L10"
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
        <div className="L10Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l10ProblemContainer">
                <img 
                    src={l10ProblemImg} 
                    alt="" 
                    className="l10ProblemImg" 
                />
            </div>
            <div className={`choicesContainer ${shakeInput ? 'shake' : ''}`}>
                <img 
                    src={l10a} 
                    alt="" 
                    className="l10a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l10b} 
                    alt="" 
                    className="l10b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l10c} 
                    alt="" 
                    className="l10c" 
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
                            onClick={() => navigate('/LogicLevels/L11')}
                        />
                    </div>
                )}
        </div>
        </>
    )
}

export default L10;