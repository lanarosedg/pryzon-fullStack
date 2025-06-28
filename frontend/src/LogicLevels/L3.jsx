import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l3ProblemImg from '../assets/LogicLevels/l3.png';

import l3a from '../assets/LogicLevels/l3a.png';
import l3b from '../assets/LogicLevels/l3b.png';
import l3c from '../assets/LogicLevels/l3c.png';


function L3() {
    const [result , setResult] = useState('');

    const handleClick = async (choice) => {
        try {
            const response = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L3"
            });
            setResult(response.data ? "Correct!" : "Wrong answer. Try again");
        } catch (error) {
            setResult("Error checking answer.");
            console.error(error);
        }
    };

    return (
        <>
        <div className="L3Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l3ProblemContainer">
                <img 
                    src={l3ProblemImg} 
                    alt="" 
                    className="l3ProblemImg" 
                />
            </div>
                <img 
                    src={l3a} 
                    alt="" 
                    className="l3a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l3b} 
                    alt="" 
                    className="l3b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l3c} 
                    alt="" 
                    className="l3c" 
                    onClick={() => handleClick("C")}
                />
                <div className="resultMessage">
                    {result}
                </div>
        </div>
        </>
    )
}

export default L3;