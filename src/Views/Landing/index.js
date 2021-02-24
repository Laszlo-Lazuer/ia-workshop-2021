import { useContext } from 'react';
import {Button, Card} from '@salesforce/design-system-react';
import { UserContext } from '../../context';
import './styles.scss';

function Landing() {
    const { step, setStep } = useContext(UserContext);

    return (
        <div className='landing-page'>
            <Card
                id="readyCar"
                heading={null}
                className={'ia-card'}
            >
                <div className="card-content">
                    <div>
                        <h2 className={'card-statement'}>Are you ready for an interview?</h2>
                    </div>
                <div>
                <Button
                        className="cta"
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