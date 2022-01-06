import { useReducer, createContext } from 'react'
import { taskReducer } from './TaskReducers'

const TaskContext = createContext()

export const TaskProvider = ({ children }) => {

    const initialState = {
        task: {},
        tasks: [],
        loading: false
    }

    const [state, dispatch] = useReducer(taskReducer, initialState)

    const value = { ...state, dispatch }

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext
