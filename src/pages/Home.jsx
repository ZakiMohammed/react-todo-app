import { useContext, useEffect } from 'react'
import TaskContext from '../context/task/TaskContext'
import TaskList from '../components/task/TaskList'
import { TASK_CONSTANTS } from '../context/task/TaskConstants'
import * as TaskAction from '../context/task/TaskActions'
import Spinner from '../components/Spinner'

const Home = () => {

    const { tasks, loading, dispatch } = useContext(TaskContext)

    useEffect(() => {
        const getTasks = async () => {
            try {
                dispatch({ type: TASK_CONSTANTS.SET_LOADING, payload: true })

                const data = await TaskAction.getAll()

                dispatch({
                    type: TASK_CONSTANTS.GET_ALL,
                    payload: data
                })

                dispatch({ type: TASK_CONSTANTS.SET_LOADING, payload: false })
            } catch (error) {
                dispatch({ type: TASK_CONSTANTS.SET_LOADING, payload: false })
                window.alert(`Error Occurred: ${error.message}`)
            }
        }

        getTasks()

    }, [dispatch])

    return (
        loading ? <Spinner /> : <TaskList tasks={tasks} />
    )
}

export default Home
