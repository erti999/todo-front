<script setup lang="ts">
import { ref } from 'vue'

const newTask = ref('')
const emit = defineEmits<{ add: [title: string] }>()

function submitTask() {
    const title = newTask.value.trim()
    if (!title) return

    emit('add', title)
    newTask.value = ''
}
</script>

<template>
    <form class="task-form" @submit.prevent="submitTask">
        <input
            class="task-input"
            v-model="newTask"
            type="text"
            placeholder="Добавить задачу"
        />

        <button class="add-btn" type="submit">
            Добавить
        </button>
    </form>
</template>

<style scoped>
.task-form {
    display: flex;
    gap: 10px;
    margin-top: 24px;
}

.task-input {
    flex: 1;
    min-width: 0;
    padding: 12px 16px;
    background: #303030;
    border: 1px solid #444;
    border-radius: 10px;
    color: white;
    outline: none;
}

.task-input:focus {
    border-color: #22c55e;
}

.add-btn {
    padding: 12px 20px;
    background: #22c55e;
    color: #111;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
}

.add-btn:hover {
    background: #16a34a;
}
</style>