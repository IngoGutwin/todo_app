<template>
  <div class="mx-auto max-w-xl mt-10 relative">
    <form ref="userInput" @submit.prevent="saveItem">
      <input
        type="text"
        v-model="newItem"
        placeholder="Create a new todo..."
        class="todo-field mb-6"
      />

      <button>
        <CrossIcon
          v-if="deleteButton === true"
          class="absolute top-0 right-5 mt-5"
          @click="clearForm"
        />
      </button>
    </form>

    <ToDoItem v-for="(item, index) in todoList" :key="index" class="todo-field">
      <template #check>
        <CheckIcon />
      </template>

      {{ item }}

      <template #cross>
        <CrossIcon />
      </template>
    </ToDoItem>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: "",
      todoList: [],
      deleteButton: false,
    };
  },
  watch: {
    newItem: function (value) {
      if (value.length > 0) {
        this.deleteButton = true;
      } else if (value.length === 0) {
        this.deleteButton = false;
      }
    },
  },
  methods: {
    saveItem() {
      this.todoList.push(this.newItem);
      this.newItem = "";
      console.log(this.todoList);
      this.clearForm();
    },
    clearForm() {
      this.$refs.userInput.reset();
    },
  },
};
</script>

<style scoped>
.todo-field {
  @apply w-full h-16 rounded-md px-6 bg-white dark:bg-dark_theme-very-dark-blue text-light_theme-dark-grayish-blue dark:text-dark_theme-dark-grayish-blue;
}
.todo-field:focus {
  outline: none;
}
</style>
