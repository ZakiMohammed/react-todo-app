import { useState, useContext } from 'react'
import { FaPlus } from 'react-icons/fa'
import Button from '../shared/Button'
import TaskContext from '../../context/task/TaskContext'
import TaskConstants from '../../context/task/TaskConstants'
import SpinnerContext from '../../context/spinner/SpinnerContext'
import TaskActions from '../../context/task/TaskActions'

const TaskForm = () => {

    const [title, setTitle] = useState('')
    const { dispatch } = useContext(TaskContext)
    const { setLoading } = useContext(SpinnerContext)

    const handleTitleChange = (e) => setTitle(e.target.value)
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            if (title === '') {
                window.alert('Please enter title of your task');
                return;
            }

            const task = { title };

            setLoading(true)

            const newTask = await TaskActions.add(task)

            dispatch({ type: TaskConstants.ADD, payload: newTask })

            setLoading(false)
            setTitle('')

        } catch (error) {
            window.alert(`Error Occurred: ${error.message}`)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter you task"
                value={title}
                onChange={handleTitleChange} />
            <Button type='submit'>
                <FaPlus />
            </Button>
        </form>
    )
}

export default TaskForm
