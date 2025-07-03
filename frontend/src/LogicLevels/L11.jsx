import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l11ProblemImg from '../assets/LogicLevels/l11.png';

import l11a from '../assets/LogicLevels/l11a.png';
import l11b from '../assets/LogicLevels/l11b.png';
import l11c from '../assets/LogicLevels/l11c.png';

import next from '../assets/next.png';
import { useNavigate } from 'react-router-dom';

function L11() {
    const [isCorrect, setIsCorrect] = useState(null);
    const [shakeInput, setShakeInput] = useState(false);
    const navigate = useNavigate();

    const handleClick = async (choice) => {
        try {
            const res = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L11"
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
        <div className="L11Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l11ProblemContainer">
                <img 
                    src={l11ProblemImg} 
                    alt="" 
                    className="l11ProblemImg" 
                />
            </div>
            <div className={`choicesContainer ${shakeInput ? 'shake' : ''}`}>
                <img 
                    src={l11a} 
                    alt="" 
                    className="l11a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l11b} 
                    alt="" 
                    className="l11b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l11c} 
                    alt="" 
                    className="l11c" 
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
                            onClick={() => navigate('/LogicLevels/L12')}
                        />
                    </div>
                )}
        </div>
        </>
    )
}

export default L11;