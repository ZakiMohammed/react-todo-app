import { TASK_CONSTANTS } from './TaskConstants'

export const taskReducer = (state, { type, payload }) => {
    switch (type) {
        case TASK_CONSTANTS.GET_ALL:
            return {
                ...state,
                tasks: payload,
            }
        case TASK_CONSTANTS.ADD:
            return {
                ...state,
                tasks: [...payload, ...state.tasks],
            }
        case TASK_CONSTANTS.REMOVE:
            return {
                ...state,
                tasks: state.tasks.filter(i => i._id !== payload._id),
            }
        case TASK_CONSTANTS.REMOVE_ALL:
            return {
                ...state,
                tasks: [],
            }
        case TASK_CONSTANTS.SET_TASK:
            return {
                ...state,
                task: payload,
            }
        default:
            return state
    }
}
