import { React } from 'react';

const Button = (context) => {
	const { config: { colors }} = context;

	return (
		<div>
			<button style={ { color: 'red' } }>Click Me!</button>
			{colors.map((color) =>
				<button
					key={ color }
					style={ { background: color } }
				>{color}
				</button>)}
		</div>
	);
};

export default Button;
