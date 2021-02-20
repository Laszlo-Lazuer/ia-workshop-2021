import { useContext } from 'react';
import {Button, Card} from '@salesforce/design-system-react';
import './styles.scss';
import { appContext, UserContext } from '../../context';

function Questions() {
    // const {step, setStep, otherStep} = useContext(appContext);
    const {message, setMessage} = useContext(UserContext);
    // const nextStep = () => {
    //     setStep((step < 3)? step + 1: step)
    //     console.log('Step: ', step)
    //   }
    return (
        <>
        <hr />
        {/* <p> Debug: Step {step}</p> */}
        <h1>{message}</h1>
        <hr />
        <div>
            <p>Read the question and relax and think about your answer. Make sure you keep in under 30 sec. You can always practice more.</p>
        </div>
        <Card
            id="ExampleCard"
            heading="Releated Items"
        >
            <div className="card-content">
                <div>
                <h3>Q1:</h3>
                <p>What are three positive things your last boss would say about you?</p>
                </div>
                <div>
                <Button
						// disabled
						label="Skip"
						onClick={null}
						variant="outline-brand"
					/>

                <Button
                        // disabled
                        label="Set Message"
                        onClick={() => setMessage('newish message!')}
                        variant="brand"
                    />
                </div>
            </div>
        </Card>
        </>
    );
}

export default Questions;