import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l4ProblemImg from '../assets/LogicLevels/l4.png';

import l4a from '../assets/LogicLevels/l4a.png';
import l4b from '../assets/LogicLevels/l4b.png';
import l4c from '../assets/LogicLevels/l4c.png';

import next from '../assets/next.png';
import { useNavigate } from 'react-router-dom';

function L4() {
    const [isCorrect, setIsCorrect] = useState(null);
    const [shakeInput, setShakeInput] = useState(false);
    const navigate = useNavigate();

    const handleClick = async (choice) => {
        try {
            const res = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L4"
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
        <div className="L4Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l4ProblemContainer">
                <img 
                    src={l4ProblemImg} 
                    alt="" 
                    className="l4ProblemImg" 
                />
            </div>
            <div className={`choicesContainer ${shakeInput ? 'shake' : ''}`}>
                <img 
                    src={l4a} 
                    alt="" 
                    className="l4a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l4b} 
                    alt="" 
                    className="l4b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l4c} 
                    alt="" 
                    className="l4c" 
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
                                onClick={() => navigate('/LogicLevels/L5')}
                            />
                    </div>
                )}
        </div>
        </>
    )
}

export default L4;