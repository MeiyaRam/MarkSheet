import { React } from 'react';
const { map, values } = require('@laufire/utils/collection');

const TableBody = (context) => {
	const { data, config: { markSheetData }} = context;

	return (
		data.map((student, i) => {
			const className = student.result === 'pass' ? 'pass' : 'fail';

			return (
				<tr key={ i }>
					{values(map(markSheetData, (markSheet, key) =>
						<td key={ key }>{student[key]}</td>))}
				</tr>
			);
		}));
};
const Table = (context) => {
	const { config: { markSheetData }} = context;

	return (
		<table>
			<thead>
				<tr>
					{values(map(markSheetData, (mark, i) =>
						<th key={ i }>{mark.title}</th>))}
				</tr>
			</thead>
			<tbody>
				<TableBody { ...context }/>
			</tbody>
		</table>);
};

export default Table;
