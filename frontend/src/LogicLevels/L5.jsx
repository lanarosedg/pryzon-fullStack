import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l5ProblemImg from '../assets/LogicLevels/l5.png';

import l5a from '../assets/LogicLevels/l5a.png';
import l5b from '../assets/LogicLevels/l5b.png';
import l5c from '../assets/LogicLevels/l5c.png';


function L5() {
    const [result, setResult] = useState('');

    const handleClick = async (choice) => {
        try {
            const response = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L5"
            });
            setResult(response.data ? "Correct!" : "Wrong answer. Try again");
        } catch (error) {
            setResult("Error checking answer.");
            console.error(error)
        }
    };

    return (
        <>
        <div className="L5Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l5ProblemContainer">
                <img 
                    src={l5ProblemImg} 
                    alt="" 
                    className="l5ProblemImg" 
                />
            </div>
                <img 
                    src={l5a} 
                    alt="" 
                    className="l5a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l5b} 
                    alt="" 
                    className="l5b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l5c} 
                    alt="" 
                    className="l5c" 
                    onClick={() => handleClick("C")}
                />
                <div className="resultMessage">
                    {result}
                </div>
        </div>
        </>
    )
}

export default L5;