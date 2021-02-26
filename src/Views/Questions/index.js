import { useContext, useEffect, useState } from 'react';
import {Button, Card, ProgressRing, IconSettings} from '@salesforce/design-system-react';
import { UserContext } from '../../context';
import './styles.scss';

function Questions() {
    const { step, setStep, questions, questionArray } = useContext(UserContext);
    const [questionCurrent, setQuestionCurrent] = useState(1);
    const [questionNum, setQuestionNum] = useState(1);
    const [progress, setProgress] = useState(100);

    const updateProgress = () => {
        setProgress((progress != 0)?progress-10:100)
    }

    const changeQuestion = () => {
        questionArray.splice(questionCurrent, 1);
        setQuestionNum(questionNum + 1);
        const min = 0;
        const max = questionArray.length -1;
        const rand = Math.floor(min + Math.random() * (max - min));
        setQuestionCurrent(rand)
    }

    let question = questionArray[`${questionCurrent}`];//questions[`${questionCurrent}`]

    return (
        <>
        {/* <div>
            <p>Read the question and relax and think about your answer. Make sure you keep in under 30 sec. You can always practice more.</p>
        </div> */}
        <Card
            id="questionCard"
            heading=""
            className={'ia-card'}
        >
            <div className="card-content">
                <div>
                <h2 className="question">{(questionNum > 15)? '':`Q${questionNum}:`}</h2>
                <div className='quiz-content'>
                <p className="card-statement">{(questionNum > 15)? "You're Hired!":question}</p>
                <div className={'ctas'}>
                <Button
                        disabled={(questionNum > 15)? true:false}
                        className="cta1"
						label="Skip Question"
						onClick={changeQuestion}
						variant="outline-brand"
					/>

                <Button
                        className="cta2"
                        label="Done"
                        onClick={() => setStep(step + 1)}
                        variant="brand"
                    />

                    
                <Button
                        className="cta2"
                        label="+"
                        onClick={updateProgress}
                        variant="brand"
                    />

<IconSettings iconPath="/assets/icons">
				<div className="slds-grid slds-grid_pull-padded slds-grid_vertical-align-center">
					{/* <div className="slds-col_padded">
						<ProgressRing value={0} />
					</div>
					<div className="slds-col_padded">
						<ProgressRing value={20} />
					</div>
					<div className="slds-col_padded">
						<ProgressRing flowDirection="fill" size="large" value={40} />
					</div> */}
					<div className="slds-col_padded">
						<ProgressRing size="large" value={progress} flowDirection="fill" />
					</div>
				</div>
                </IconSettings>
                </div>

                </div></div>                
            </div>
        </Card>
        </>
    );
}

export default Questions;