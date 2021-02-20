import { useContext } from 'react';
import {Button, Card} from '@salesforce/design-system-react';
import { UserContext } from '../../context';
import './styles.scss';

function Landing() {
    const { step, setStep } = useContext(UserContext);

    return (
        <>
            <Card
                id="ExampleCard"
                heading={null}
            >
                <div className="card-content">
                    <div>
                        <h3>Are you ready for an interview?</h3>
                    </div>
                <div>
                <Button
                        // disabled
                        label="Start"
                        onClick={() => setStep(step+1)}
                        variant="brand"
                    />
                    </div>
                </div>
            </Card>
        </>
    );
}

export default Landing;