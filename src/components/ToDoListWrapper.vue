<template>
    <div>
        <UserInput @save-item="saveItem" />

        <ToDoItem v-for="item in todoList" :key="item">
            <template #check>
                <CheckIcon />
            </template>

            {{ item.name }}

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
