import { React } from 'react';
import './App.scss';

const App = (context) => {
	const { config: { colors }} = context;

	return <div className="App">
		<b><i>Ready To Start.</i></b><br/>
		<button style={ { color: 'red' } }>Click Me!</button>
		{colors.map((color) =>
			<button
				key={ color }
				style={ { background: color } }
			>{color}
			</button>)}
	</div>;
};

export default App;
