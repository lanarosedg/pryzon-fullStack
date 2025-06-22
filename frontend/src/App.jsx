import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Category from './Category'
import LogicLevel from './LogicLevel';
import MathLevel from './MathLevel';

import M1 from './MathLevels/M1';
import M2 from './MathLevels/M2';
import M3 from './MathLevels/M3';
import M4 from './MathLevels/M4';
import M5 from './MathLevels/M5';
import M6 from './MathLevels/M6';
import M7 from './MathLevels/M7';
import M8 from './MathLevels/M8';
import M9 from './MathLevels/M9';
import M10 from './MathLevels/M10';
import M11 from './MathLevels/M11';
import M12 from './MathLevels/M12';

import L1 from './LogicLevels/L1';
import L2 from './LogicLevels/L2';
import L3 from './LogicLevels/L3';
import L4 from './LogicLevels/L4';
import L5 from './LogicLevels/L5';
import L6 from './LogicLevels/L6';
import L7 from './LogicLevels/L7';
import L8 from './LogicLevels/L8';
import L9 from './LogicLevels/L9';
import L10 from './LogicLevels/L10';
import L11 from './LogicLevels/L11';
import L12 from './LogicLevels/L12';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/LogicLevel" element={<LogicLevel />} />
          <Route path="/MathLevel" element={<MathLevel />} />

          {/* Math Levels */}
          <Route path="/MathLevels/M1" element={<M1 />} />
          <Route path="/MathLevels/M2" element={<M2 />} />
          <Route path="/MathLevels/M3" element={<M3 />} />
          <Route path="/MathLevels/M4" element={<M4 />} />
          <Route path="/MathLevels/M5" element={<M5 />} />
          <Route path="/MathLevels/M6" element={<M6 />} />
          <Route path="/MathLevels/M7" element={<M7 />} />
          <Route path="/MathLevels/M8" element={<M8 />} />
          <Route path="/MathLevels/M9" element={<M9 />} />
          <Route path="/MathLevels/M10" element={<M10 />} />
          <Route path="/MathLevels/M11" element={<M11 />} />
          <Route path="/MathLevels/M12" element={<M12 />} />
          
          {/* Logic Levels */}

          <Route path="/LogicLevels" element={<LogicLevel />} />

          <Route path="/LogicLevels/L1" element={<L1 />} />
          <Route path="/LogicLevels/L2" element={<L2 />} />
          <Route path="/LogicLevels/L3" element={<L3 />} />
          <Route path="/LogicLevels/L4" element={<L4 />} />
          <Route path="/LogicLevels/L5" element={<L5 />} />
          <Route path="/LogicLevels/L6" element={<L6 />} />
          <Route path="/LogicLevels/L7" element={<L7 />} />
          <Route path="/LogicLevels/L8" element={<L8 />} />
          <Route path="/LogicLevels/L9" element={<L9 />} />
          <Route path="/LogicLevels/L10" element={<L10 />} />
          <Route path="/LogicLevels/L11" element={<L11 />} />
          <Route path="/LogicLevels/L12" element={<L12 />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
