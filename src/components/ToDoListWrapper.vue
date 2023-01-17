<template>
  <div>
    <ToDoItem
      v-for="item in todoList"
      :key="item"
      class="todo-field first:rounded-t-md"
    >
      <template #check>
        <CheckIcon />
      </template>

      {{ newItem }}

      <template #cross>
        <CrossIcon />
      </template>
    </ToDoItem>
  </div>
</template>

<script>
export default {
  props: {
    newItem: { type: String, required: true },
  },
  data() {
    return {
      todoList: [],
    };
  },
  methods: {
    saveItem() {
      let saveItem = this.newItem;
      this.todoList.push(saveItem);
      console.log(saveItem);
      console.log(this.todoList);
      this.clearForm();
    },
  },
};
</script>

<style scoped></style>
