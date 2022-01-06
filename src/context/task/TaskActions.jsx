import axios from 'axios'

const API_URL = process.env.REACT_APP_TODO_API

const taskAxios = axios.create({
    baseURL: `${API_URL}/api/todos/`
})

export const getAll = async () => {
    const response = await taskAxios.get()
    return response.data
};

export const add = async (task) => {
    const response = await taskAxios.post('', task, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
};

export const remove = async (id) => {
    const response = await taskAxios.delete(`${id}`, { method: 'DELETE' })
    return response.data
};

export const removeAll = async () => {
    const response = await taskAxios.delete('', { method: 'DELETE' })
    return response.data
};
