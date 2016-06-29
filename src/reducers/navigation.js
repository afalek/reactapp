let defaultState = {
    currentPageTitle: 'Home'
}

let navigation = (state=defaultState, action) => {
    switch(action.type) {
        case 'CHANGE_PAGE_TITLE':
            return {currentPageTitle: action.title}
        default:
            return state;
    }
}

export default navigation;
