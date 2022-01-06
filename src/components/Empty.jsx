import { FaFrown } from 'react-icons/fa'

const Empty = () => {
    return (
        <div className='empty'>
            <FaFrown size={30} />
            Nothing added to the list
        </div>
    )
}

export default Empty
