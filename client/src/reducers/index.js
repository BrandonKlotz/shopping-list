const INITIAL_STATE = {
    loading: true,
    items: []
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "REQUEST_ITEMS":
            return Object.assign({}, state, {
                loading: true
            });
        case "RECEIVE_ITEMS":
            return Object.assign({}, state, {
                loading: false,
                contacts: action.items
            });
        default:
            return state;
    }
}
