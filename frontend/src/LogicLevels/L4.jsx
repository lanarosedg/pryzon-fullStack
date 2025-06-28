import { useState } from 'react';
import axios from 'axios';

import logo from '../assets/logo.png';
import l4ProblemImg from '../assets/LogicLevels/l4.png';

import l4a from '../assets/LogicLevels/l4a.png';
import l4b from '../assets/LogicLevels/l4b.png';
import l4c from '../assets/LogicLevels/l4c.png';


function L4() {
    const [result , setResult] = useState('');

    const handleClick = async (choice) => {
        try {
            const response = await axios.post('http://localhost:8080/api/check-answer', {
                answer: choice,
                level: "L4"
            });
            setResult(response.data ? "Correct!" : "Wrong answer. Try again");
        } catch (error) {
            setResult("Error checking answer.");
            console.error(error);
        }
    };

    return (
        <>
        <div className="L4Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l4ProblemContainer">
                <img 
                    src={l4ProblemImg} 
                    alt="" 
                    className="l4ProblemImg" 
                />
            </div>
                <img 
                    src={l4a} 
                    alt="" 
                    className="l4a" 
                    onClick={() => handleClick("A")}
                />
                <img 
                    src={l4b} 
                    alt="" 
                    className="l4b" 
                    onClick={() => handleClick("B")}
                />
                <img 
                    src={l4c} 
                    alt="" 
                    className="l4c" 
                    onClick={() => handleClick("C")}
                />
                <div className="resultMessage">
                    {result}
                </div>
        </div>
        </>
    )
}

export default L4;