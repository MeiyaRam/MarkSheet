import { values, map } from '@laufire/utils/collection';
import { React } from 'react';

const getClassName = (key) => (
	key === 'total' || key === 'result' || key === 'rank'
		? 'hideText'
		: 'showText');

const TableInput = (context) => {
	const { actions, config: { markSheetData }, state } = context;

	return (
		values(map(markSheetData, ({ title, type }, key) => {
			const className = getClassName(key);

			return (
				<div key={ key }>
					<label className={ className }>
						Enter Your {title} </label>
					<input
						type={ type }
						className={ className }
						value={ state.markSheet[key] }
						onChange={ ({ target: { value }}) => actions
							.setMarkSheetInput({ label: key, value: value }) }
					/></div>);
		}))
	);
};

export default TableInput;
