export const updateStyle = (id, style) => dispatch => {
	dispatch({
		type: 'UPDATE_STYLE',
		payload: {
			id,
			style,
		},
	});
}
