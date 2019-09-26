
const ADD = 'ADD';
const EDIT = 'EDIT';
const DELETE = 'DELETE';

export const add = (item) => ({
    type: ADD,
    payload: item
})

export const edit = (item) => ({
    type: EDIT,
    payload: 'item'
})

export const delet = (index) => ({
    type: DELETE,
    payload: index
})