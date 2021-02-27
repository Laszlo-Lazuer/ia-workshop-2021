import { useContext } from 'react';
import {Button, Card } from '@salesforce/design-system-react';
import './styles.scss';
import icon from '../../icons/summary_icon.png';
import { UserContext } from '../../context';

function Summary() {
    const { setStep } = useContext(UserContext);

    return (
        <>
        <Card
            id="summaryCard"
            heading={""}
            className={'ia-card'}
        >
            <div className="card-content">
                <div className={"summary-content"}>
					<div>
                        <img src={icon} alt='' className='summary-icon' />
					</div>
                    <div className={'logo-copy'}>
                        <p>Thanks for stopping by!</p>
                    </div>
            </div>
                <div className={'summary-cta'} style={{display: 'flex'}}>
              <Button
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