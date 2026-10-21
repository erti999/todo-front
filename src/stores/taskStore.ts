import { ref } from 'vue'
import type { Task } from '../types/task'
import { getTasks, createTask, updateTask, deleteTask } from '../api/taskService'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', () => {
    const tasks = ref<Task[]>([])
    const error = ref('')

    async function loadTasks() {
        try { 
        tasks.value = await getTasks() 
        error.value = ''
        } catch { error.value = 'Не удалось загрузить задачи' }
    }

    async function addTask(title: string) {
    try {
        const task = await createTask(title)
        tasks.value.push(task)
        error.value = '' 
    } catch { error.value = 'Не удалось создать задачу' }
    }

    async function toggleTask(task: Task) {
    try {
        const updatedTask = await updateTask(task.id, !task.completed)
        task.completed = updatedTask.completed
        error.value = ''
    } catch { error.value = 'Не удалось обновить задачу' }
    }

    async function removeTask(task: Task) {
    try {
        await deleteTask(task.id)
        tasks.value = tasks.value.filter(t => t.id !== task.id)
        error.value = ''
    } catch { error.value = 'Не удалось удалить задачу' }
    }

    return {
        tasks, error, loadTasks, addTask, toggleTask, removeTask
    }
})