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
                        label="Next"
                        onClick={() => setStep(step + 1)}
                        variant="brand"
                    />
                </div>
            </div>
        </Card>
        </>
    );
}

export default Questions;