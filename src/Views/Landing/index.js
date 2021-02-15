import {Button, Card} from '@salesforce/design-system-react';
import './styles.scss';

function Landing() {
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
                        onClick={null}
                        variant="brand"
                    />
                    </div>
                </div>
            </Card>
        </>
    );
}

export default Landing;