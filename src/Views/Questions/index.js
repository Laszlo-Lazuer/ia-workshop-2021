import { useContext, useEffect, useState } from 'react';
import {Button, Card, ProgressRing, IconSettings} from '@salesforce/design-system-react';
import { UserContext } from '../../context';
import './styles.scss';

function Questions() {
    const { step, setStep, questions, questionArray } = useContext(UserContext);
    const [questionCurrent, setQuestionCurrent] = useState(1);
    const [questionNum, setQuestionNum] = useState(1);
    const [progress, setProgress] = useState(100);
    const [newSession, setNewSession] = useState(true);
    const [timesUp, setTimesUp] = useState(false);

    // Timer
    const [seconds, setSeconds] = useState(30);
    const [isActive, setIsActive] = useState(false);

    const toggle = () => {
        setIsActive(!isActive);
        (newSession) && setNewSession(false);
        setTimesUp(false)
      }
    
      const reset = () => {
        setSeconds(30);
        setIsActive(false);
        setTimesUp(true)
      }
    // Timer

    const updateProgress = () => {
        setProgress((progress !== 0)?progress-10:100)
    }

    const changeQuestion = () => {
        questionArray.splice(questionCurrent, 1);
        setQuestionNum(questionNum + 1);
        const min = 0;
        const max = questionArray.length -1;
        const rand = Math.floor(min + Math.random() * (max - min));
        setQuestionCurrent(rand)
        toggle()

    }

    let question = questionArray[`${questionCurrent}`];//questions[`${questionCurrent}`]

    useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            setSeconds((seconds > 1)? seconds - 1: reset);
          }, 1000);
          setProgress((seconds/30)*100)
        } else if (!isActive && seconds !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, seconds]);

      const timerSeconds = (seconds < 10) ? `0${seconds}`:`${seconds}`;
      const nextBtnString = (timesUp)?"Next Question":"Skip Question";

    return (
        <>
        <Card
            id="questionCard"
            heading=""
            className={'ia-card'}
        >
            <div className="card-content">
                <div>
                    <div>
                    <IconSettings iconPath="/assets/icons">
				<div className="slds-grid slds-grid_pull-padded slds-grid_vertical-align-center">
					<div className="slds-col_padded" style={{position:'relative'}}>
						<ProgressRing size="large" value={progress} flowDirection="drain" />
                        <p style={{position:'absolute', top: '3px', left: '19px', fontSize: '17px', textAlign: 'center'}}>{timerSeconds}</p>
					</div>
				</div>
                </IconSettings>

                    </div>
                {/* <h2 className="question">{(questionNum > 15)? '':`Q${questionNum}:`}</h2> */}
                <div className='quiz-content'>
                {(timesUp) ?
                <p className="card-statement">Time is up!</p>
                :
                <p className="card-statement">{(questionNum > 15)? "You're Hired!":`Q${questionNum}: ${question}`}</p>
            }
                <div className={'ctas'}>
                <Button
                        disabled={(questionNum > 15)? true:false}
                        className="cta1"
						label={(newSession)?"Begin":nextBtnString}
						onClick={(newSession)?toggle:changeQuestion}
						variant="outline-brand"
					/>

                <Button
                        className="cta2"
                        label="Done"
                        onClick={() => setStep(step + 1)}
                        variant="brand"
                   />
                    <hr />
                    <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        {/* <p>seconds: {seconds}</p> */}
                    <hr />

            {/* <IconSettings iconPath="/assets/icons">
				<div className="slds-grid slds-grid_pull-padded slds-grid_vertical-align-center">
					<div className="slds-col_padded">
						<ProgressRing size="large" value={progress} flowDirection="fill" />
					</div>
				</div>
                </IconSettings> */}
                </div>

                </div></div>                
            </div>
        </Card>
        </>
    );
}

export default Questions;