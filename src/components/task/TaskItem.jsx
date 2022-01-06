import { FaTimes } from 'react-icons/fa';
import Button from '../shared/Button'

const TaskItem = ({ task }) => {

    const handleRemoveTask = (e) => {
        console.log(task);
    }

    return (
        <div className='card'>
            <Button className='btn-remove' handleClick={handleRemoveTask}>
                <FaTimes />
            </Button>
            <p>{task.title}</p>
        </div>
    )
}

export default TaskItem
