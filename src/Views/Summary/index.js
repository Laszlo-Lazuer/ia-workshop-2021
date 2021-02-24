import { useContext } from 'react';
import {Button, Card, IconSettings, Icon} from '@salesforce/design-system-react';
import './styles.scss';
import icon from '../../icons/summary_icon.png';
import { UserContext } from '../../context';

function Summary() {
    const {step, setStep} = useContext(UserContext);

    return (
        <>
        <Card
            id="summaryCard"
            heading={null}
            className={'ia-card'}
        >
            <div className="card-content">
                <div className={"summary-content"}>
					<div>
                        <img src={icon} className='summary-icon' />
					</div>
                    <div className={'logo-copy'}>
                        <p>Thanks for stopping by!</p>
                    </div>
            </div>
                <div className={'summary-cta'} style={{display: 'flex'}}>
                <Button
						// disabled
						label="Restart"
						onClick={() => setStep(1)}
						variant="brand"
					/>
                </div>
            </div>
        </Card>
        </>
    );
}

export default Summary;