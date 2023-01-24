<template>
    <div>
        <UserInput @pass-item="passItem" />

        <ToDoItem
            v-for="item in todoList"
            :key="item"
            :item="item"
            :current-theme="currentTheme"
            @check-to-do="checkToDo"
            @delete-to-do="deleteToDo"
        />
    </div>

    <FilterBar :items-left="todoList.length" />
</template>

<script>
export default {
    props: {
        currentTheme: { type: String, require: true },
    },
    data() {
        return {
            todoList: [],
            itemsLeft: 0,
        };
    },
    methods: {
        passItem(item) {
            this.todoList.push({
                number: this.todoList.length + 1,
                done: false,
                name: item,
            });
        },
        checkToDo(toDoNumber) {
            this.todoList = this.todoList.filter((item) => {
                if (item.number === toDoNumber) {
                    if (item.done === false) {
                        item.done = true;
                        return item;
                    } else if (item.done === true) {
                        item.done = false;
                        return item;
                    }
                    return item;
                }
                return item;
            });
        },
        deleteToDo(toDoNumber) {
            let itemNumber = 1;
            this.todoList = this.todoList.filter((item) => {
                if (item.number !== toDoNumber) {
                    item.number = itemNumber;
                    itemNumber++;
                    return item;
                }
            });
        },
    },
};
</script>
