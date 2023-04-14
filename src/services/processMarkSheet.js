const markSheets = [
	{
		rollno: 1,
		name: 'A',
		tamil: 99,
		english: 92,
		maths: 91,
		science: 95,
		social: 93,
	},
	{
		rollno: 2,
		name: 'B',
		tamil: 92,
		english: 21,
		maths: 73,
		science: 71,
		social: 54,
	},
	{
		rollno: 3,
		name: 'C',
		tamil: 100,
		english: 52,
		maths: 34,
		science: 38,
		social: 71,
	},
	{
		rollno: 4,
		name: 'D',
		tamil: 66,
		english: 76,
		maths: 77,
		science: 83,
		social: 95,
	},
	{
		rollno: 5,
		name: 'E',
		tamil: 39,
		english: 80,
		maths: 85,
		science: 47,
		social: 44,
	},
	{
		rollno: 6,
		name: 'F',
		tamil: 70,
		english: 93,
		maths: 57,
		science: 50,
		social: 90,
	},
	{
		rollno: 7,
		name: 'G',
		tamil: 56,
		english: 34,
		maths: 39,
		science: 99,
		social: 36,
	},
	{
		rollno: 8,
		name: 'H',
		tamil: 71,
		english: 97,
		maths: 87,
		science: 80,
		social: 69,
	},
	{
		rollno: 9,
		name: 'I',
		tamil: 25,
		english: 22,
		maths: 86,
		science: 27,
		social: 39,
	},
	{
		rollno: 10,
		name: 'J',
		tamil: 91,
		english: 52,
		maths: 43,
		science: 63,
		social: 89,
	},
	{
		rollno: 11,
		name: 'K',
		tamil: 54,
		english: 63,
		maths: 100,
		science: 75,
		social: 68,
	},
	{
		rollno: 12,
		name: 'L',
		tamil: 51,
		english: 71,
		maths: 33,
		science: 26,
		social: 64,
	},
	{
		rollno: 13,
		name: 'M',
		tamil: 42,
		english: 25,
		maths: 55,
		science: 71,
		social: 94,
	},
];
const passMark = 35;
const getResultCount = (studentMarkSheets) =>
	studentMarkSheets.reduce((acc, cur) => ({
		countPass: cur.result === 'pass' ? acc.countPass + 1 : acc.countPass,
		countFail: cur.result === 'fail' ? acc.countFail + 1 : acc.countFail,
	}), { countPass: 0, countFail: 0 });

const getResult = (marks) => {
	const result = Math.min(
		Number(marks.tamil), Number(marks.english), Number(marks.maths),
		Number(marks.science), Number(marks.social)

	) > passMark
		? 'pass'
		: 'fail';

	return { ...marks, result };
};

const getRank = (totalMarks) => {
	const sortedMarkSheets = totalMarks.sort((a, b) => b.total - a.total);
	const studentResult = sortedMarkSheets.map(getResult);
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

const getTotal = (marks) =>
	Number(marks.tamil) + Number(marks.english)
	+ Number(marks.maths) + Number(marks.science) + Number(marks.social);

const getSum = (studentMarkSheets) => {
	const totalMarks = studentMarkSheets.map((sheet) => ({
		...sheet,
		total: getTotal(sheet),
	}));
	const rank = getRank(totalMarks);

	getResultCount(rank);

	return rank;
};

const main = () => getSum(markSheets);

main();

export default main;
