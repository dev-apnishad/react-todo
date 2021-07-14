const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TODOS/ADD':
            const i = state.findIndex(todo => todo.id === action.payload.id);
            i > -1 ? state.push(action.payload) : state[i] = action.payload
            return state;

        default:
            return state;
    }
};

export default reducer;