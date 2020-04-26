import React from 'react';
import './App.css';
import { ThreeFloatingCards } from './components/ThreeFloatingCards'
import { LeftMiddleRightPanels } from './components/LeftMiddleRightPanels'
import { TopCenterBottomPanels } from './components/TopCenterBottomPanels'
import { Exp } from './components/Exp'

function App() {
  return (
    <div className="App">
      <ThreeFloatingCards />
      <LeftMiddleRightPanels />
      <TopCenterBottomPanels />
      <Exp />
    </div>
  );
}

export default App;
