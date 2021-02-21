import { useContext } from 'react';
import {Button, Card} from '@salesforce/design-system-react';
import { UserContext } from '../../context';
import './styles.scss';

function Landing() {
    const { step, setStep } = useContext(UserContext);

    return (
        <div className='landing-page'>
            <Card
                id="ExampleCard"
                heading={null}
            >
                <div className="card-content">
                    <div>
                        <h2 className={'landing-statement'}>Are you ready for an interview?</h2>
                    </div>
                <div>
                <Button
                        className="cta"
                        // disabled
                        label="Start"
                        onClick={() => setStep(step+1)}
                        variant="brand"
                    />
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Landing;