import { useState, useContext } from 'react';
import './App.scss';
import {IconSettings, Button } from '@salesforce/design-system-react';
import Landing from './Views/Landing/index';
import Questions from './Views/Questions/index';
import Summary from './Views/Summary/index';
import mainIcon from './icons/clipboard_icon.png';
import { NumberContext } from './context';
import { UserContext } from './context';

function App() {

  // Hooks
  const [message, setMessage] = useState("hello from context")
  const [step, setStep] = useState(1);

  let currentStep;

  switch(step) {
    case 1:
      currentStep = <Landing />;
      break;
    case 2:
      currentStep = <Questions />;
      break;
    case 3:
      currentStep = <Summary />;
        break;
      default:
        console.log('error')
  }
  
  return (
    <UserContext.Provider value={{message, setMessage, step, setStep}}>
      <div className="App">
        <div className="header-content">
          <h1 className={'app-title'}>Interview Questions</h1>
          <div className="header-content--sub">
            <div><img src={mainIcon} className="main-icon" /></div>
            <div>
              <div><p>Got Questions?</p></div>
              <div><p>We've got practice...</p></div>
            </div>
          </div>
        </div>
        <div className='content-wrapper'>
          {currentStep}
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
