const subjects = {
	tamil: { title: 'Tamil', type: 'number' },
	english: { title: 'English', type: 'number' },
	maths: { title: 'Maths', type: 'number' },
	science: { title: 'Science', type: 'number' },
	social: { title: 'Social', type: 'number' },
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

};

export default config;
