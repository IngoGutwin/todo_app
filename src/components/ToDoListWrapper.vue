<template>
    <div>
        <UserInput @save-item="saveItem" />

        <ToDoItem
            v-for="item in todoList"
            :key="item"
            class="todo-field first:rounded-t-md"
        >
            <template #check>
                <CheckIcon />
            </template>

            {{ todoList }}

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
            todoList: [],
        };
    },
    methods: {
        saveItem(item) {
            let newItem = { done: false, name: item };
            this.todoList.push(newItem);
        },
    },
};
</script>

<style scoped></style>
