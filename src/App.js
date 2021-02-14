import logo from './logo.svg';
import './App.css';
import {IconSettings, Button } from '@salesforce/design-system-react';


function App() {

  const progress = 20;
  const value="20";

  return (
    <div className="App">
      <h1>IA 2021!</h1>
      <IconSettings iconPath="/assets/icons">
				<div className="slds-x-small-buttons_horizontal">
					<Button label="Brand" variant="brand" />

					<Button
						disabled
						label="Disabled"
						onClick={() => {
							console.log('Disabled Button Clicked');
						}}
						variant="brand"
					/>

					<Button label="Destructive" variant="destructive" />

					<Button label="Outline Brand" variant="outline-brand" />

					<div
						style={{
							backgroundColor: '#16325c',
							padding: '10px',
							marginLeft: '5px',
							display: 'inline-block',
						}}
						className="-m-horizontal--small"
					>
						<Button inverse label="Inverse" variant="base" />
					</div>
				</div>
			</IconSettings>
    </div>
  );
}

export default App;
