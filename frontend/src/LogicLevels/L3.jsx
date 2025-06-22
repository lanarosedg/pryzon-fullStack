import logo from '../assets/logo.png';
import l3ProblemImg from '../assets/LogicLevels/l3.png';

import l3a from '../assets/LogicLevels/l3a.png';
import l3b from '../assets/LogicLevels/l3b.png';
import l3c from '../assets/LogicLevels/l3c.png';


function L3() {
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
                />
                <img 
                    src={l3b} 
                    alt="" 
                    className="l3b" 
                />
                <img 
                    src={l3c} 
                    alt="" 
                    className="l3c" 
                />
        </div>
        </>
    )
}

export default L3;