import { useNavigate } from 'react-router-dom';

import logo from './assets/logo.png';

function LogicLevel () {
    const navigate = useNavigate();
    return (
        <>
        <div className="LevelContainer">
                        <div className="logoContainer">
                            <img 
                                src={logo} 
                                alt="" 
                                className="logo" 
                            />
                        </div>
        
                        <button 
                            className="l1"
                            onClick={() => navigate('/LogicLevels/L1')}
                            >
                                1
                        </button>

                        <button 
                            className="l2"
                            onClick={() => navigate('/LogicLevels/L2')}
                            >
                                2
                        </button>
                        <button 
                            className="l3"
                            onClick={() => navigate('/LogicLevels/L3')}
                            >
                                3
                        </button>
                        <button 
                            className="l4"
                            onClick={() => navigate('/LogicLevels/L4')}
                            >
                                4
                        </button>
                        <button 
                            className="l5"
                            onClick={() => navigate('/LogicLevels/L5')}
                            >
                                5
                        </button>
                        <button 
                            className="l6"
                            onClick={() => navigate('/LogicLevels/L6')}
                            >
                                6
                        </button>
                        <button 
                            className="l7"
                            onClick={() => navigate('/LogicLevels/L7')}
                            >
                                7
                        </button>
                        <button 
                            className="l8"
                            onClick={() => navigate('/LogicLevels/L8')}
                            >
                                8
                        </button>
                        <button 
                            className="l9"
                            onClick={() => navigate('/LogicLevels/L9')}
                            >
                                9
                        </button>
                        <button  
                            className="l10"
                            onClick={() => navigate('/LogicLevels/L10')}
                            >
                                10
                        </button>
                        <button 
                            className="l11"
                            onClick={() => navigate('/LogicLevels/L11')}
                            >
                                11
                        </button>
                        <button 
                            className="l12"
                            onClick={() => navigate('/LogicLevels/L12')}
                            >
                                12
                        </button>
        
                        <button className="playButton">
                            Play
                        </button>
                    </div>
        </>
    )
}

export default LogicLevel;