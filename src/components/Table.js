import { React } from 'react';
const { map, values } = require('@laufire/utils/collection');

const TableBody = (context) => {
	const { data, config: { markSheetData }} = context;

	return (
		data.map((student, i) =>

			<tr key={ i }>
				{values(map(markSheetData, (markSheet, key) => {
					const className = key === 'result'
						? student[key] === 'pass'
							? 'pass'
							: 'fail'
						: '';

					return (
						<td key={ key } className={ className }>
							{student[key]}
						</td>);
				}))}
			</tr>));
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
