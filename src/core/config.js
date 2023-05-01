const subjects = {
	tamil: { title: 'Tamil' },
	english: { title: 'English' },
	maths: { title: 'Maths' },
	science: { title: 'Science' },
	social: { title: 'Social' },
};

const config = {
	passMark: 35,

	colors: ['red', 'green', 'blue', 'yellow'],

	markSheets: [
		{ name: 'Ram', tamil: 80, english: 70 },
		{ name: 'Anita', tamil: 60, english: 45 },
	],

	header: ['Name', 'Tamil', 'English'],

	markSheetData: {
		rollNo: { title: 'RollNumber' },
		name: { title: 'Name' },
		...subjects,
		total: { title: 'Total' },
		result: { title: 'Result' },
		rank: { title: 'Rank' },
	},

	subjects: subjects,

};

export default config;
