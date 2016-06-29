let defaultState = (new Date()).toString();
let date = (state=defaultState, action) => {
	switch(action.type) {
		case 'DATE_UPDATE':
			return action.date;
		default:
			return state;
	}
}

export default date;
