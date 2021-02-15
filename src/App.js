import { useState} from 'react';
import './App.scss';
import {IconSettings, Button } from '@salesforce/design-system-react';
import Landing from './Views/Landing/index';
import Questions from './Views/Questions/index';
import Summary from './Views/Summary/index';


function App() {

  const totalSteps = 3;

  const [step, setStep] = useState(1);

  const resetSteps = () => {
    setStep(1)
  }

  const nextStep = () => {
    setStep((step < totalSteps)? step + 1: step)
  }

  let currentStep = <Landing />;

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
      // code block
  }


  return (
    <div className="App">
     <hr />
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
      <div className='content-wrapper'>
        {currentStep}
      </div>
    </div>
  );
}

export default App;
