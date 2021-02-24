import { useState } from 'react';
import './App.scss';
// import {IconSettings, Icon } from '@salesforce/design-system-react';
import Landing from './Views/Landing/index';
import Questions from './Views/Questions/index';
import Summary from './Views/Summary/index';
import mainIcon from './icons/copy_to_clipboard.png';
import { UserContext } from './context';

function App() {

  // Hooks
  const [message, setMessage] = useState("hello from context")
  const [step, setStep] = useState(1);

  let currentStep;
  let cardStatement = "";

  switch(step) {
    case 1:
      currentStep = <Landing />;
      cardStatement = "This is a rapid fire exercise to help you to be on your feet when you talk about interview. At the bottom there will be a question for you and you have 30 secs to answer it. This will help you to be on your toes to answer them in a fast order.";
      break;
    case 2:
      currentStep = <Questions />;
      cardStatement = "Read the question and relax and think about your answer. Make sure you keep in under 30 sec. You can always practice more.";
      break;
    case 3:
      currentStep = <Summary />;
      cardStatement = "Well, now you have a experience under your belt and what can I say. You did it, this is the first start to really practice your questions. You can always come back and try again.";
        break;
      default:
        console.log('error')
  }
  
  return (
    <UserContext.Provider value={{message, setMessage, step, setStep}}>
      {/* <IconSettings iconPath="/assets/icons"> */}
      <div className="App">
        <div className="header-content">
          <h1 className={'app-title'}>Interview Questions</h1>
          <div className="header-content--sub">
            <div>
              <img src={mainIcon} className="main-icon" />
              {/* <Icon
							assistiveText={{ label: 'Account' }}
							colorVariant="base"
              category="utility"
							name="announcement"
							size="medium"
						/> */}
              </div>
            <div classname="app-badge" style={{marginBottom: '48px', marginLeft: '9px'}}>
              <p className={'badge-text'}>Got Questions?</p>
              <p className={'badge-text'}>We've got practice...</p>
            </div>
          </div>
        </div>
        <div className="app-statement">
          <p>{cardStatement}</p>
        </div>
        <div className='content-wrapper'>
          {currentStep}
        </div>
      </div>
      {/* </IconSettings> */}
    </UserContext.Provider>
  );
}

export default App;
