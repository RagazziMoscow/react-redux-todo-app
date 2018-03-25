const initialState = 'SHOW_ALL';


export default (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_FILTER':
            return action.filter;
        default:
            return state;
    }
}