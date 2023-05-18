const actions = {

	setMarkSheetInput: ({ state: { markSheet }, data: { label, value }}) =>
		({
			markSheet: {
				...markSheet,
				[label]: value,
			},
		}),

	setMarkSheets: ({ state: { markSheet, markSheets }}) =>
		({ markSheets: [...markSheets, { ...markSheet }] }),

};

export default actions;
