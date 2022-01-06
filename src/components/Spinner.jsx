import { FaSpinner } from 'react-icons/fa'

const Spinner = () => {
    return (
        <div className='loader'>
            <div>
                <FaSpinner size={60} className='' />
            </div>
        </div>
    )
}

export default Spinner
