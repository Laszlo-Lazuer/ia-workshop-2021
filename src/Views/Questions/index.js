import { useContext, useEffect, useState } from 'react';
import {Button, Card} from '@salesforce/design-system-react';
import { UserContext } from '../../context';
import './styles.scss';

function Questions() {
    const { step, setStep, questions } = useContext(UserContext);
    const [questionCurrent, setQuestionCurrent] = useState(1);

    const changeQuestion = () => {
        const min = 1;
        const max = 16;
        const rand = Math.floor(min + Math.random() * (max - min));
        setQuestionCurrent(rand)
    }

    let question = questions[`${questionCurrent}`]

    return (
        <>
        <div>
            <p>Read the question and relax and think about your answer. Make sure you keep in under 30 sec. You can always practice more.</p>
        </div>
        <Card
            id="ExampleCard"
            heading=""
            className="ia-card"
        >
            <div className="card-content">
                <div>
                <h2 className="question">Q:</h2>
                <div className='quiz-content'>
                <p className="questions-statement">{question}</p>
                <div className={'ctas'}>
                <Button
                        className="cta1"
						label="Skip"
						onClick={changeQuestion}
						variant="outline-brand"
					/>

                <Button
                        className="cta2"
                        label="Next"
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