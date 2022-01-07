import { useContext, useEffect } from 'react'
import TaskItem from './TaskItem'
import TaskContext from '../../context/task/TaskContext'
import SpinnerContext from '../../context/spinner/SpinnerContext'
import { TASK_CONSTANTS } from '../../context/task/TaskConstants'
import * as TaskActions from '../../context/task/TaskActions'

const TaskList = () => {

    const { tasks, dispatch } = useContext(TaskContext)
    const { setLoading } = useContext(SpinnerContext)

    useEffect(() => {
        const getTasks = async () => {
            try {
                setLoading(true)

                const data = await TaskActions.getAll()

                dispatch({
                    type: TASK_CONSTANTS.GET_ALL,
                    payload: data
                })

            } catch (error) {
                window.alert(`Error Occurred: ${error.message}`)
            } finally {
                setLoading(false)
            }
        }

        getTasks()

    }, [dispatch])

    return (
        <div className='card-holder'>
            {tasks.map(task => (
                <TaskItem key={task._id} task={task} />
            ))}
        </div>
    )
}

export default TaskList
