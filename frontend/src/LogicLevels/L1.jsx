import logo from '../assets/logo.png';
import l1ProblemImg from '../assets/LogicLevels/l1.png';

import l1a from '../assets/LogicLevels/l1a.png';
import l1b from '../assets/LogicLevels/l1b.png';
import l1c from '../assets/LogicLevels/l1c.png';


function L1() {
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
                />
                <img 
                    src={l1b} 
                    alt="" 
                    className="l1b" 
                />
                <img 
                    src={l1c} 
                    alt="" 
                    className="l1c" 
                />
        </div>
        </>
    )
}

export default L1;