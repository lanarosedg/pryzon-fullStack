import logo from '../assets/logo.png';
import l4ProblemImg from '../assets/LogicLevels/l4.png';

import l4a from '../assets/LogicLevels/l4a.png';
import l4b from '../assets/LogicLevels/l4b.png';
import l4c from '../assets/LogicLevels/l4c.png';


function L4() {
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
                />
                <img 
                    src={l4b} 
                    alt="" 
                    className="l4b" 
                />
                <img 
                    src={l4c} 
                    alt="" 
                    className="l4c" 
                />
        </div>
        </>
    )
}

export default L4;