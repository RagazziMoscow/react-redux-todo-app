export default (state = [], action) => {
    switch(action.type) {
        
        case 'ADD_TODO':
            const { id, text, status } = action.todo;
            const todo = {
                id,
                text,
                status
            };
            return [...state,todo];
        
        case 'TOGGLE_TODO_STATUS':
            return state.map(todo => {
                if (todo.id == action.id) {
                    todo.status = 'closed';
                }
                return todo;
            });

        case 'FETCH_TODOS':
            return action.payload;
        default:
            return state;
    }
}