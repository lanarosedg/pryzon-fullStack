import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l12ProblemImg from '../assets/LogicLevels/l12.png';

import l12a from '../assets/LogicLevels/l12a.png';
import l12b from '../assets/LogicLevels/l12b.png';
import l12c from '../assets/LogicLevels/l12c.png';

import home from '../assets/home.png';
import { useNavigate } from 'react-router-dom';

function L12() {
    const [isCorrect, setIsCorrect] = useState(null);
    const [shakeInput, setShakeInput] = useState(false);
    const navigate = useNavigate();

    const handleClick = async (choice) => {
        try {
            const res = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L12"
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
    }
    return (
        <>
        <div className="L12Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l12ProblemContainer">
                <img 
                    src={l12ProblemImg} 
                    alt="" 
                    className="l12ProblemImg" 
                />
            </div>
            <div className={`choicesContainer ${shakeInput ? 'shake' : ''}`}>
                <img 
                    src={l12a} 
                    alt="" 
                    className="l12a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l12b} 
                    alt="" 
                    className="l12b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l12c} 
                    alt="" 
                    className="l12c" 
                    onClick={() => handleClick("C")}
                />
                </div>
                {isCorrect === true && (
                    <div className="correct-animationL1">
                        <p>✔ Correct!</p>
                        <img
                            src={home} 
                            alt="" 
                            className="nextButton" 
                            onClick={() => navigate('/')}
                        />
                    </div>
                )}
        </div>
        </>
    )
}

export default L12;