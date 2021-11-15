<template>
  <div class="bg-gray-800 h-screen flex flex-col items-center p-10">
    <h1 class="text-white text-5xl font-bold">ToDo App</h1>
    <form @submit.prevent="addTodo()" class="w-6/12 flex flex-col mt-6">
      <label class="text-white font-bold p-2">New ToDo</label>
      <input
        class="text-white rounded-lg bg-gray-800 border-2 px-2 py-3"
        v-model="newTodo"
        name="newTodo"
        autocomplete="off"
      />
      <button
        class="text-black text-xl font-bold bg-primary rounded-lg p-2 mt-4"
      >
        Add ToDo
      </button>
    </form>
    <h1 class="text-white text-2xl font-bold mt-14">ToDo List</h1>
    <hr class="bg-primary w-8/12 mt-1" />
    <ul class="  ">
      <li
        class="flex flex-row justify-between "
        v-for="(todo, index) in todos"
        :key="index"
      >
        <span
          class=" text-white text-xl "
          :class="{ done: todo.done }"
          @click="doneTodo(index)"
          >{{ todo.content }}</span
        >
        <button class=" text-red-400 text-sm ml-5  " @click="removeTodo(index)">
          Remove
        </button>
      </li>
    </ul>
    <h4 class="text-white p-3" v-if="todos.length === 0">Empty list</h4>
  </div>
</template>
<script setup lang="ts">
import { ref } from "@vue/reactivity";

const newTodo = ref("");
const defaultData = [
  {
    done: false,
    content: "Write a blog post",
  },
];
const todosData = JSON.parse(localStorage.getItem("todos")!) || defaultData;
const todos = ref(todosData);
function addTodo() {
  if (newTodo.value) {
    todos.value.push({
      done: false,
      content: newTodo.value,
    });
    newTodo.value = "";
  };
  saveData();

}

  function doneTodo(todo: any) {
    todo.done = !todo.done;
    saveData();
  };

  function removeTodo(index: any) {
    todos.value.splice(index, 1);
    saveData();
  };

  function saveData() {
    const storageData = JSON.stringify(todos.value);
    localStorage.setItem("todos", storageData);
  };
</script>
