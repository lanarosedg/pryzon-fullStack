import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l10ProblemImg from '../assets/LogicLevels/l10.png';

import l10a from '../assets/LogicLevels/l10a.png';
import l10b from '../assets/LogicLevels/l10b.png';
import l10c from '../assets/LogicLevels/l10c.png';


function L10() {
    const [result, setResult] = useState('');

    const handleClick = async (choice) => {
        try {
            const response = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L10"
            });
            setResult(response.data ? "Correct!" : "Wrong answer. Try again.");
        } catch (error) {
            setResult("Error checking answer.");
            console.error(error)
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
                <div className="resultMessage">
                    {result}
                </div>
        </div>
        </>
    )
}

export default L10;