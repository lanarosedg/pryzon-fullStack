import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l11ProblemImg from '../assets/LogicLevels/l11.png';

import l11a from '../assets/LogicLevels/l11a.png';
import l11b from '../assets/LogicLevels/l11b.png';
import l11c from '../assets/LogicLevels/l11c.png';


function L11() {
    const [result, setResult] = useState('');

    const handleClick = async (choice) => {
        try {
            const response = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L11"
            });
            setResult(response.data ? "Correct!" : "Wrong answer. Try again.");
        } catch (error) {
            setResult("Error checking answer.");
            console.error(error)
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
                <div className="resultMessage">
                    {result}
                </div>
        </div>
        </>
    )
}

export default L11;