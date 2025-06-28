import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l8ProblemImg from '../assets/LogicLevels/l8.png';

import l8a from '../assets/LogicLevels/l8a.png';
import l8b from '../assets/LogicLevels/l8b.png';
import l8c from '../assets/LogicLevels/l8c.png';


function L8() {
    const [result, setResult] = useState('');

    const handleClick = async (choice) => {
        try {
            const response = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L8"
            });
            setResult(response.data ? "Correct!" : "Wrong answer. Try again");
        } catch (error) {
            setResult("Error checking answer.");
            console.error(error)
        }
    };

    return ( 
        <>
        <div className="L8Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l8ProblemContainer">
                <img 
                    src={l8ProblemImg} 
                    alt="" 
                    className="l8ProblemImg" 
                />
            </div>
                <img 
                    src={l8a} 
                    alt="" 
                    className="l8a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l8b} 
                    alt="" 
                    className="l8b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l8c} 
                    alt="" 
                    className="l8c" 
                    onClick={() => handleClick("C")}
                />
                <div className="resultMessage">
                    {result}
                </div>
        </div>
        </>
    )
}

export default L8;