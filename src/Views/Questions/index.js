import { useContext, useEffect, useState } from 'react';
import {Button, Card} from '@salesforce/design-system-react';
import { UserContext } from '../../context';
import './styles.scss';

function Questions() {
    const { step, setStep, questions, questionArray } = useContext(UserContext);
    const [questionCurrent, setQuestionCurrent] = useState(1);
    const [questionNum, setQuestionNum] = useState(1);

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
                </div>
                </div></div>                
            </div>
        </Card>
        </>
    );
}

export default Questions;