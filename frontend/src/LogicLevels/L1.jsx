import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l1ProblemImg from '../assets/LogicLevels/l1.png';

import l1a from '../assets/LogicLevels/l1a.png';
import l1b from '../assets/LogicLevels/l1b.png';
import l1c from '../assets/LogicLevels/l1c.png';


function L1() {
    const [result, setResult] = useState('');

    const handleClick = async (choice) => {
        try {
            const response = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,       // "A", "B", or "C"
                level: "L1"
            });
            setResult(response.data ? "Correct!" : "Wrong answer. Try again.");
        } catch (error) {
            setResult("Error checking answer.");
            console.error(error);
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
            </div>
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
            <div className="resultMessage">
                {result}
            </div>
        </div>
        </>
    )
}

export default L1;