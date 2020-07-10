import { TodoActionTypes, ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./ActionTypes"

export function addTodoActionCreator(text: string): TodoActionTypes {
    return {
        type: ADD_TODO,
        payload: text
    }
}

export function deleteTodoActionCreator(index: number): TodoActionTypes {
    return {
        type: DELETE_TODO,
        payload: index
    }
}

export function toggleTodoActionCreator(index: number): TodoActionTypes {
    return {
        type: TOGGLE_TODO,
        payload: index
    }
}