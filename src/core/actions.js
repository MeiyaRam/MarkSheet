import { map } from '@laufire/utils/collection';

const actions = {

	setMarkSheetInput: ({ state: { markSheet }, data: { label, value }}) =>
		({
			markSheet: {
				...markSheet,
				[label]: value,
			},
		}),

	setMarkSheets: ({ state: { markSheet, markSheets }}) => ({
		markSheets: [...markSheets, { ...markSheet }],
		markSheet: { ...map(markSheet, () => '') },
	}),

};

export default actions;
