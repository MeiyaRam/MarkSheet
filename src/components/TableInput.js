import { React } from 'react';

const TableForm = (context) => {
	const { rollNo, name, actions } = context;

	return (

		<div>
			<label>Enter Your Roll Number </label>
			<input
				type="text"
				value={ rollNo }
				onChange={ (e) => actions.setRollNo(e.target.value) }
			/><br/><br/><label>Enter your Name </label>
			<input
				type="text"
				value={ name }
				onChange={ (e) => actions.setName(e.target.value) }
			/>
		</div>

	);
};

export default TableForm;
