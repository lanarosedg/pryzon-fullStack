import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l6ProblemImg from '../assets/LogicLevels/l6.png';

import l6a from '../assets/LogicLevels/l6a.png';
import l6b from '../assets/LogicLevels/l6b.png';
import l6c from '../assets/LogicLevels/l6c.png';


function L6() {
    const [result, setResult] = useState('');
    
    const handleClick = async (choice) => {
        try {
            const response = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L6"
            });
            setResult(response.data ? "Correct!" : "Wrong answer. Try again");
        } catch (error) {
            setResult("Error checking answer.");
            console.error(error)
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
                <div className="resultMessage">
                    {result}
                </div>
        </div>
        </>
    )
}

export default L6;