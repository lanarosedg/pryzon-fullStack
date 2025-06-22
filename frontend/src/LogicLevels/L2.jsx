import logo from '../assets/logo.png';
import l2ProblemImg from '../assets/LogicLevels/l2.png';

import l2a from '../assets/LogicLevels/l2a.png';
import l2b from '../assets/LogicLevels/l2b.png';
import l2c from '../assets/LogicLevels/l2c.png';


function L2() {
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
                />
                <img 
                    src={l2b} 
                    alt="" 
                    className="l2b" 
                />
                <img 
                    src={l2c} 
                    alt="" 
                    className="l2c" 
                />
        </div>
        </>
    )
}

export default L2;