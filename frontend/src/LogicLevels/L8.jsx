import logo from '../assets/logo.png';
import l8ProblemImg from '../assets/LogicLevels/l8.png';

import l8a from '../assets/LogicLevels/l8a.png';
import l8b from '../assets/LogicLevels/l8b.png';
import l8c from '../assets/LogicLevels/l8c.png';


function L8() {
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
                />
                <img 
                    src={l8b} 
                    alt="" 
                    className="l8b" 
                />
                <img 
                    src={l8c} 
                    alt="" 
                    className="l8c" 
                />
        </div>
        </>
    )
}

export default L8;