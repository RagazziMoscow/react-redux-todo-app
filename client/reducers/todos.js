const initialState = [
    {
        id: 1,
        text: 'Изучить Vue.js',
        status: 'active'
    },
    {
        id: 2,
        text: 'Ознакомиться с MongoDB',
        status: 'active'
    },
    {
        id: 3,
        text: 'Создать приложение с Redux',
        status: 'closed'
    }
];

export default (state = initialState, action) => {
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
        default:
            return state;
    }
}