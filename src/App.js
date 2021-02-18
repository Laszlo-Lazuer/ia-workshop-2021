import { useState, useContext } from 'react';
import './App.scss';
import {IconSettings, Button } from '@salesforce/design-system-react';
import Landing from './Views/Landing/index';
import Questions from './Views/Questions/index';
import Summary from './Views/Summary/index';
import mainIcon from './icons/clipboard_icon.png';
import { NumberContext } from './context';
import { appContext } from './context';

function App() {

  // Hooks
  

  const value = useContext(NumberContext);
  const totalSteps = 3;

  const [step, setStep] = useState(1);

  const resetSteps = () => {
    setStep(1)
  }

  const nextStep = () => {
    // setStep((currentStep < 4)? step + 1: step)
    setStep(step+1)
    console.log('Step: ', step)
  }

  let currentStep = <Landing />;

  // switch(step) {
  //   case 1:
  //     currentStep = <Landing />;
  //     break;
  //   case 2:
  //     currentStep = <Questions />;
  //     break;
  //   case 3:
  //     currentStep = <Summary />;
  //       break;
  //     default:
  //     // code block
  // }

  const [appVals] = useState({
    step: step,
    otherStep: 2,
    next: nextStep
  })
  
  return (
    <appContext.Provider value={appVals}>
      <div className="App">
     <hr />
     <p>State: {step}</p>
     <h2>DEBUG</h2>
      <h1>IA 2021! Step {step}</h1>
      <IconSettings iconPath="/assets/icons">
				<div className="slds-x-small-buttons_horizontal">
					<Button
						// disabled
						label="Next Step"
						onClick={nextStep}
						variant="brand"
					/>
          <Button
						// disabled
						label="Reset"
						onClick={resetSteps}
						variant="brand"
					/>
				</div>
			</IconSettings>
      <hr />
      <div className="header-content">
        <h2>Interview Questions</h2>
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
    </appContext.Provider>
  );
}

export default App;
