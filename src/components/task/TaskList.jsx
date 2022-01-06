import TaskItem from './TaskItem'

const TaskList = ({ tasks }) => {
    return (
        <div className='card-holder'>
            {tasks.map(task => (
                <TaskItem key={task._id} task={task} />                
            ))}
        </div>  
    )
}

export default TaskList
