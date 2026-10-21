<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useTaskStore } from '../stores/taskStore.ts'
import TaskForm from '../components/TaskForm.vue'
import TaskItem from '../components/TaskItem.vue'

const taskStore = useTaskStore()
const { tasks, error } = storeToRefs(taskStore)
const {
  loadTasks,
  addTask,
  toggleTask,
  removeTask,
} = taskStore

onMounted(loadTasks)
</script>

<template>
  <div class="todo-container">
    <h1>ToDo</h1>
    <h2>Мои задачи</h2> 

    <TaskForm @add="addTask" />

    <p v-if="error" class="error"> {{ error }} </p>

    <ul class="task-list">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle="toggleTask"
        @remove="removeTask"  
      />      
    </ul>
  </div>
</template>

<style scoped>
h1 { 
  margin-bottom: 8px; 
}

h2 { 
  font-size: 20px; 
  color: #aaa; 
}

.error {
  color: 
  #ff6666 
}

.todo-container {
  max-width: 650px;
  margin: 60px auto;
  padding: 20px;
}

.task-list {
  list-style: none;
  padding: 0;
  margin-top: 24px;
}
</style>