import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l1ProblemImg from '../assets/LogicLevels/l1.png';

import l1a from '../assets/LogicLevels/l1a.png';
import l1b from '../assets/LogicLevels/l1b.png';
import l1c from '../assets/LogicLevels/l1c.png';

import next from '../assets/next.png';
import { useNavigate } from 'react-router-dom';

function L1() {
    const [isCorrect, setIsCorrect] = useState(null);
    const [shakeInput, setShakeInput] = useState(false);
    const navigate = useNavigate();

    const handleClick = async (choice) => {
        try {
            const res = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L1"
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
        <div className="L1Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l1ProblemContainer">
                <img 
                    src={l1ProblemImg} 
                    alt="" 
                    className="l1ProblemImg" 
                />
            </div >
            <div className={`choicesContainer ${shakeInput ? 'shake' : ''}`}>
                <img 
                    src={l1a} 
                    alt="" 
                    className="l1a" 
                    onClick={() => handleClick("A")}
                />
                <img  
                    src={l1b} 
                    alt="" 
                    className="l1b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l1c} 
                    alt="" 
                    className="l1c" 
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

export default L1;