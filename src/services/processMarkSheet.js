import markSheetData from '../services/markSheetData';
const { map, reduce, values } = require('@laufire/utils/collection');

const passMark = 35;
const getResultCount = (context) => {
	const { data } = context;

	data.reduce((acc, cur) => ({
		countPass: cur.result === 'pass' ? acc.countPass + 1 : acc.countPass,
		countFail: cur.result === 'fail' ? acc.countFail + 1 : acc.countFail,
	}), { countPass: 0, countFail: 0 });
};

const getResult = (context) => {
	const { data, config: { subjects }} = context;
	const result = Math.min(...values(map(subjects, (subject, key) =>
		data[key]))) > passMark
		? 'pass'
		: 'fail';

	return { ...data, result };
};

const getRank = (context) => {
	const { data } = context;
	const sortedMarkSheets = data.sort((a, b) => b.total - a.total);
	const studentResult = sortedMarkSheets.map((markSheet) =>
		getResult({ ...context, data: markSheet }));
	const rank = studentResult.map((
		student, index, array
	) => ({
		...student,
		rank: student.result === 'pass'
			? array.filter((mark) =>
				(mark.total > student.total)
				&& (mark.result === 'pass')).length + 1
			: '-',
	}));

	return rank;
};

const getTotal = (context) => {
	const { data, config: { subjects }} = context;

	return reduce(
		subjects, (
			acc, cur, key
		) => acc + data[key], 0
	);
};

const getSum = (context) => {
	const { data } = context;

	const totalMarks = data.map((sheet) => ({
		...sheet,
		total: getTotal({ ...context, data: sheet }),
	}));

	const rank = getRank({ ...context, data: totalMarks });

	getResultCount({ ...context, data: rank });

	return rank;
};

const processMarkSheet = (context) =>
	getSum({ ...context, data: markSheetData });

export default processMarkSheet;
