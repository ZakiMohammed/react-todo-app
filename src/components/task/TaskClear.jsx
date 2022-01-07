import { useContext } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import Button from '../shared/Button'
import TaskContext from '../../context/task/TaskContext'
import SpinnerContext from '../../context/spinner/SpinnerContext'

const TaskClear = () => {

    const { tasks } = useContext(TaskContext)
    const { loading } = useContext(SpinnerContext)

    return (
        (tasks.length !== 0 && !loading) && (
            <>
                <Button className='btn-clear'>
                    <FaTrashAlt /> Clear All
                </Button>
            </>
        )
    )
}

export default TaskClear
