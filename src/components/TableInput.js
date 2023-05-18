import { React } from 'react';

const TableInput = (context) => {
	const {
		actions, config: { markSheets }, state,
	} = context;

	return (
		markSheets.map((label, i) =>
			<div key={ i }>
				<label>Enter Your {label} </label>
				<input
					type="text"
					value={ state.markSheet[label] }
					onChange={ ({ target: { value }}) =>
						actions.setMarkSheetInput({ label, value }) }
				/>
			</div>)
	);
};

export default TableInput;
