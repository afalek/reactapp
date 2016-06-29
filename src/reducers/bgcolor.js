let defaultState = {
    currentColor: 'red'
}

let bgcolor = (state=defaultState, action) => {
    switch(action.type) {
        case 'CHANGE_BG_COLOR':
            return {currentColor: action.color}
        default:
            return state;
    }
}

export default bgcolor;
