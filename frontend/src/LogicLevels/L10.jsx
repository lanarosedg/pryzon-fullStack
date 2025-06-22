import logo from '../assets/logo.png';
import l10ProblemImg from '../assets/LogicLevels/l10.png';

import l10a from '../assets/LogicLevels/l10a.png';
import l10b from '../assets/LogicLevels/l10b.png';
import l10c from '../assets/LogicLevels/l10c.png';


function L10() {
    return (
        <>
        <div className="L10Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="l10ProblemContainer">
                <img 
                    src={l10ProblemImg} 
                    alt="" 
                    className="l10ProblemImg" 
                />
            </div>
                <img 
                    src={l10a} 
                    alt="" 
                    className="l10a" 
                />
                <img 
                    src={l10b} 
                    alt="" 
                    className="l10b" 
                />
                <img 
                    src={l10c} 
                    alt="" 
                    className="l10c" 
                />
        </div>
        </>
    )
}

export default L10;