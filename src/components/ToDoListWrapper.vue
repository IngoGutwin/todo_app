<template>
    <div>
        <UserInput @save-item="saveItem" />

        <ToDoItem
            v-for="item in todoList"
            :key="item"
            :item="item"
            :current-theme="currentTheme"
        />
    </div>
</template>

<script>
export default {
    props: {
        currentTheme: { type: String, require: true },
    },
    data() {
        return {
            todoList: [
                { done: false, name: "todo1" },
                { done: false, name: "todo2" },
                { done: true, name: "todo3" },
            ],
        };
    },
    methods: {
        saveItem(item) {
            this.todoList.push({ done: false, name: item });
        },
    },
};
</script>

<style scoped></style>
