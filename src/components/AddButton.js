import { React } from 'react';

const AddButton = (context) => {
	const { actions, state } = context;

	return (
		<button
			onClick={ () => actions.setMarkSheets(state) }
		>
			Add
		</button>
	);
};

export default AddButton;
