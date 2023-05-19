const actions = {

	setMarkSheetInput: ({ state: { markSheet }, data: { label, value }}) =>
		({
			markSheet: {
				...markSheet,
				[label]: value,
			},
		}),

	setMarkSheets: ({ state: { markSheet, markSheets }, seed }) => ({
		markSheets: [...markSheets, { ...markSheet }],
		markSheet: seed.markSheet,
	}),

};

export default actions;
