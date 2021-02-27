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

  let questionArray = [
    'What are three positive things your last boss would say about you?',
    'Describe your design process and what methods you follow?',
    'What are some of the biggest challenges you face as a UX designer?',
    'What are some of the biggest trends in the UX Design industry right now?',
    'When a client says, “I don’t like this design” what do you do?',
    'Can you walk me through a design example where you set out to solve a business problem?',
    'How do you know when a project is finished?',
    'What are the differences between designing for desktop and mobile devices?',
    'What are the biggest challenges as a UX designer?',
    'Have you worked in the lean or agile process environment before?',
    'How did you get into UX Design?',
    'What tools do you use?',
    'Why are you interested in this company?',
    'What makes you want to leave your current job?',
    'What do you do when you are struggling to find inspiration?',
    'How do you help someone understand your perspective if they are not on the same page with the design?',
  ]

  let currentStep;
  let cardStatement = "";

  switch(step) {
    case 1:
      currentStep = <Landing />;
      cardStatement = "This is a rapid fire exercise to help you stay on your feet in an interview. At the bottom there will be a question for you and you will have 30 seconds to answer. This will help you to answer actual interview questions in fast order.";
      break;
    case 2:
      currentStep = <Questions />;
      cardStatement = "Read the question, relax and think about your answer. Make sure you keep it under 30 seconds. You can always practice more in the future.";
      break;
    case 3:
      currentStep = <Summary />;
      cardStatement = "Well, you now have some experience under your belt and, what can I say, you did it!  This is the first step toward honing your interview skills. You can always come back and practice more.";
        break;
      default:
        console.log('error')
  }
  
  return (
    <UserContext.Provider value={{message, setMessage, step, setStep, questionArray}}>
      <div className="App">
        <div className="header-content">
          <h1 className={'app-title'}>Interview Questions</h1>
          <div className="header-content--sub">
            <div>
              <img src={mainIcon} alt='' className="main-icon" />
              </div>
            <div className="app-badge" style={{marginBottom: '48px', marginLeft: '9px'}}>
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
