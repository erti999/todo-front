import type { Task } from '../types/task.ts'

const API_URL = '/tasks'

export async function getTasks(): Promise <Task[]> {
    const response = await fetch (API_URL)

    if (!response.ok) {
        throw new Error('Не удалось загрузить задачи')
    }
    return response.json()
}

export async function createTask(title:string): Promise<Task> {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
    })

    if (!response.ok) {
        throw new Error('Не удалось создать задачу')
    }
    return response.json()
}

export async function updateTask(id: number, completed: boolean): Promise<Task> {
    const response = await fetch (`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ completed })
    })

    if (!response.ok) {
        throw new Error('Не удалось обновить задачу')
    }

    return response.json()
}

export async function deleteTask(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    if (!response.ok) {
        throw new Error('Не удалось удалить задачу')
    }
}