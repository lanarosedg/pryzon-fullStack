import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l9ProblemImg from '../assets/LogicLevels/l9.png';

import l9a from '../assets/LogicLevels/l9a.png';
import l9b from '../assets/LogicLevels/l9b.png';
import l9c from '../assets/LogicLevels/l9c.png';


function L9() {
    const [result, setResult] = useState('');

    const handleClick = async (choice) => {
        try {
            const response = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L9"
            });
            setResult(response.data ? "Correct!" : "Wrong answer. Try again.");
        } catch (error) {
            setResult("Error checking answer.");
            console.error(error)
        }
    };

    return (
        <>
        <div className="L9Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l9ProblemContainer">
                <img 
                    src={l9ProblemImg} 
                    alt="" 
                    className="l9ProblemImg" 
                />
            </div>
                <img 
                    src={l9a} 
                    alt="" 
                    className="l9a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l9b} 
                    alt="" 
                    className="l9b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l9c} 
                    alt="" 
                    className="l9c" 
                    onClick={() => handleClick("C")}
                />
                <div className="resultMessage">
                    {result}
                </div>
        </div>
        </>
    )
}

export default L9;