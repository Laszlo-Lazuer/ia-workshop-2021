import { useContext, useEffect } from 'react';
import {Button, Card} from '@salesforce/design-system-react';
import './styles.scss';
import { UserContext } from '../../context';
// import { appContext } from '../../context';

function Landing() {
    // const {step, next, otherStep} = useContext(appContext);
    const {message, setMessage} = useContext(UserContext);


    // const nextStep = () => {
    //     setStep((step < 3)? step + 1: step)
    //     console.log('Step: ', step)
    //   }

    //   useEffect(() => {
    //   }, [step])
    return (
        <>
        {/* <h1>Value: Step {step}, other step: {otherStep}</h1> */}
        <h1>{message}</h1>
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
                        label="Set Message"
                        onClick={() => setMessage('new message!')}
                        variant="brand"
                    />
                    </div>
                </div>
            </Card>
        </>
    );
}

export default Landing;