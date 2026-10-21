<script setup lang="ts">
import type { Task } from '../types/task'

defineProps<{ task: Task }>()

const emit = defineEmits<{
    toggle: [task: Task]
    remove: [task: Task]
}>()
</script>

<template>
    <li class="task-card">
        <input 
          class="task-checkbox"
          type="checkbox" 
          :checked="task.completed" 
          @change="emit('toggle', task)"
        />

        <span 
            class="task-title"
            :class="{ 'task-completed': task.completed }"    
        >
             {{ task.title }} 
        </span>
  
        <button 
          class="delete-btn" 
          @click="emit('remove', task)" 
          title="Удалить задачу" 
          aria-label="Удалить задачу"
        >
          ×
        </button>
      </li>
</template>

<style scoped>
.task-card {
  list-style: none;
  background: #303030;
  padding: 14px;
  margin-bottom: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.task-title {
  flex: 1;
  min-width: 0;
  overflow-wrap: anywhere;
}

.task-completed {
  opacity: 0.2;
}

.delete-btn {
  margin-left: auto;
  flex-shrink: 0;
  background: transparent;
  border: none;
  color: #888;
  font-size: 26px;
  cursor: pointer;
  padding: 4px 8px;
}

.delete-btn:hover { 
    color: #ff5555; 
}

.task-checkbox {
  appearance: none;
  width: 22px;
  height: 22px;
  border: 2px solid #777;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  flex-shrink: 0;
  position: relative;
  transition: 0.2s;
}

.task-checkbox:hover { 
    border-color: #22c55e; 
}

.task-checkbox:checked { 
    background: #22c55e; 
    border-color: #22c55e; 
}

.task-checkbox:checked::after { 
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 15px;
  font-weight: bold;
}
</style>