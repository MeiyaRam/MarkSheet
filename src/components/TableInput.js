import { values, map } from '@laufire/utils/collection';
import { React } from 'react';

const TableInput = (context) => {
	const { actions, config: { markSheetData }, state } = context;

	return (
		values(map(markSheetData, ({ title, type, style }, key) =>
			<div key={ key } style={ style }>
				<label>
					Enter Your {title} </label>
				<input
					type={ type }
					value={ state.markSheet[key] }
					onChange={ ({ target: { value }}) => actions
						.setMarkSheetInput({ label: key, value: value }) }
				/></div>))
	);
};

export default TableInput;
