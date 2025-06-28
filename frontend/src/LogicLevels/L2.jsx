import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l2ProblemImg from '../assets/LogicLevels/l2.png';

import l2a from '../assets/LogicLevels/l2a.png';
import l2b from '../assets/LogicLevels/l2b.png';
import l2c from '../assets/LogicLevels/l2c.png';


function L2() {
    const [result, setResult] = useState('');

    const handleClick = async (choice) => {
        try {
            const response = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L2"
            });
            setResult(response.data ? "Correct!" : "Wrong answer. Try again.");
        } catch (error) {
            setResult("Error checking answer.");
            console.error(error);
        }
    };

    return (
        <>
        <div className="L2Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l2ProblemContainer">
                <img 
                    src={l2ProblemImg} 
                    alt="" 
                    className="l2ProblemImg" 
                />
            </div>
                <img 
                    src={l2a} 
                    alt="" 
                    className="l2a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l2b} 
                    alt="" 
                    className="l2b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l2c} 
                    alt="" 
                    className="l2c" 
                    onClick={() => handleClick("C")}
                />
            <div className="resultMessage">
                {result}
            </div>
        </div>
        </>
    )
}

export default L2;