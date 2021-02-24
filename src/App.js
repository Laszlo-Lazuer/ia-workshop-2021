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
  const [step, setStep] = useState(2);

  let questions = {
    '1': 'What are three positive things your last boss would say about you?',
    '2': 'Describe your design process and what methods you follow?',
    '3': 'What are the some of the biggest challenges you face as a UX designer?',
    '4': 'What are some of the biggest trends in the UX Design industry right now?',
    '5': 'When a client says, “I don’t like this design” What do you do?',
    '6': 'Can you walk me through a design example where you set out to solve a business problem?',
    '7': 'How do you know when a project is finish?',
    '8': 'What are the difference between designing for desktop and mobile devices?',
    '9': 'What are the biggest challenges as a UX designer?',
    '10': 'Have you worked in the lean or agile process environment before?',
    '11': 'How did you get into UX Design?',
    '12': 'What tools do you use?',
    '13': 'Why are interested in this company?',
    '14': 'What makes you want to leave your current job?',
    '15': 'What do you do when you are struggling to find inspiration?',
    '16': 'How do you help someone understand your perspective if they are not on the same page with the design?',
  }

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
    <UserContext.Provider value={{message, setMessage, step, setStep, questions}}>
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
