import {Button, Card, IconSettings, Icon} from '@salesforce/design-system-react';
import './styles.scss';
import icon from '../../icons/summary_icon.png';

function Summary() {
    return (
        <>
        <div>
            <p>Well, now you have a experience under your belt and what can I say. You did it, this is the first start to really practice your questions. You can always come back and try again.</p>
        </div>
        <Card
            id="ExampleCard"
            heading={null}
        >
            <div className="card-content">
                <div>
					<div className="slds-col_padded">
                        <img src={icon} className='summary-icon' />
					</div>
                    <div>
                        <p>Thanks for stopping by</p>
                    </div>
            </div>
                <div>


                <Button
						// disabled
						label="Reset"
						onClick={null}
						variant="brand"
					/>
                </div>
            </div>
        </Card>
        </>
    );
}

export default Summary;