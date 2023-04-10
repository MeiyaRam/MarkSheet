import { React } from 'react';

const Table = (context) => {
	const { config: { markSheets, header }} = context;

	return (
		<table>
			<thead>
				<tr>
					{header.map((heading) =>
						<th key={ heading }>{heading}</th>)}
				</tr>
			</thead>
			{markSheets.map((mark, i) =>
				<tbody key={ i }>
					<tr>
						<td>{mark.name}</td>
						<td>{mark.tamil}</td>
						<td>{mark.english}</td>
					</tr>
				</tbody>)}
		</table>);
};

export default Table;
