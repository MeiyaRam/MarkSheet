import { React } from 'react';
const { map, values } = require('@laufire/utils/collection');

const TableBody = (context) => {
	const { data } = context;

	return (
		data.map((student, i) => {
			const className = student.result === 'pass' ? 'pass' : 'fail';

			return <tr key={ i }>
				<td>{student.rollno}</td>
				<td>{student.name}</td>
				<td>{student.tamil}</td>
				<td>{student.english}</td>
				<td>{student.maths}</td>
				<td>{student.science}</td>
				<td>{student.social}</td><td>{student.total}</td>
				<td className={ className }>{student.result}</td>
				<td>{student.rank}</td>
			</tr>;
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
