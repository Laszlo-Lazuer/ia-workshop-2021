import { useContext } from 'react';
import {Button, Card} from '@salesforce/design-system-react';
import { UserContext } from '../../context';
import './styles.scss';

function Questions() {
    const { step, setStep } = useContext(UserContext);

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
                <h2 className="question">Q1:</h2>
                <div className='quiz-content'>
                <p className="questions-statement">What are three positive things your last boss would say about you?</p>
                {/* </div> */}
                <div className={'ctas'}>
                <Button
						// disabled
                        className="cta1"
						label="Skip"
						onClick={null}
						variant="outline-brand"
					/>

                <Button
                        // disabled
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