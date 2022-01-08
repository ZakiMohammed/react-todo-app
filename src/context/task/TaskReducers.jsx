import TaskConstants from './TaskConstants'

export const taskReducer = (state, { type, payload }) => {
    switch (type) {
        case TaskConstants.GET_ALL:
            return {
                ...state,
                tasks: payload,
            }
        case TaskConstants.ADD:
            return {
                ...state,
                tasks: [payload, ...state.tasks],
            }
        case TaskConstants.REMOVE:
            return {
                ...state,
                tasks: state.tasks.filter(i => i._id !== payload._id),
            }
        case TaskConstants.REMOVE_ALL:
            return {
                ...state,
                tasks: [],
            }
        case TaskConstants.SET_TASK:
            return {
                ...state,
                task: payload,
            }
        default:
            return state
    }
}
