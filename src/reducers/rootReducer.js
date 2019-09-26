const initialState = {
    taskList: [
        { title: 'Taask 111', desc: 'this is task 1 ', dueDate: '20/10/2019' },
        { title: 'Taask 222', desc: 'this is task 2', dueDate: '20/10/2016' },
        { title: 'Taask 111', desc: 'this is task 1 ', dueDate: '20/10/2019' },
        { title: 'Taask 222', desc: 'this is task 2', dueDate: '20/10/2016' }
    ]
}


export const rootReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                taskList: [...state.taskList, action.payload]
            }
        case 'EDIT':
            return {

            }
        case 'DELETE':
            return {
                ...state,
                taskList: state.taskList.filter((item, index) => (index !== action.payload))
            }
        default:
            return state
    }
}