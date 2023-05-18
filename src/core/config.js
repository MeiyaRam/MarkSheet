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

	markSheets:
	['rollNo', 'name', 'tamil', 'english', 'maths', 'science', 'social'],

};

export default config;
