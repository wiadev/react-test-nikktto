export default (state = {}, action) => {
	switch (action.type) {
		case 'UPDATE_STYLE':
			return {
				...state,
				style: {
					...state.style,
					[action.payload.id]: {
						...state.style[action.payload.id],
						...action.payload.style,
					},
				},
			};
		default:
			return state;
	}
};
