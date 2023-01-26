<template>
    <div>
        <UserInput @pass-item="passItem" />

        <div>
            <ToDoItem
                v-for="item in outputList"
                :key="item"
                :item="item"
                :current-theme="currentTheme"
                @check-to-do="checkToDo"
                @delete-to-do="deleteToDo"
            />
        </div>
    </div>

    <FilterBar :filter-bar="filterBar" @current-filter="currentFilter" />
</template>

<script>
export default {
    props: {
        currentTheme: { type: String, require: true },
    },
    data() {
        return {
            outputList: [],
            dataBase: [],
            filterBar: {
                itemsLeft: 0,
                filterOption: "All",
            },
        };
    },
    watch: {
        outputList(newVal, oldVal) {
            if (newVal !== oldVal) this.updateItemsLeft();
        },
    },
    methods: {
        passItem(item) {
            this.dataBase.push({
                number: this.generateItemNumber(),
                done: false,
                name: item,
            });
            this.currentFilter(this.filterBar.filterOption);
        },
        generateItemNumber() {
            const chars =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
            let result = "";
            let randomNb = Math.floor(Math.random() * chars.length);
            if (randomNb === 0 || randomNb > chars.length) {
                return this.generateItemNumber();
            } else {
                for (let i = 0; i < 8; i++) {
                    result += chars.charAt(
                        Math.floor(Math.random() * randomNb)
                    );
                }
                console.log(result);
                return result;
            }
        },
        updateItemsLeft() {
            this.filterBar.itemsLeft = this.sortTheList("Active").length;
            //console.log(`database length ${this.dataBase.length}`);
            //console.log(`updateItemsLeft ${this.filterBar.itemsLeft}`);
        },
        currentFilter(option) {
            if (option === "clearCompleted") {
                this.dataBase = [...this.sortTheList("Active")];
                this.outputList = [...this.dataBase];
                this.currentFilter(this.filterBar.filterOption);
            } else {
                this.filterBar.filterOption = option;
                this.outputList = [...this.sortTheList(option)];
            }
        },
        sortTheList(filter) {
            const sortedList = this.dataBase.filter((item) => {
                if (filter === "Active") {
                    if (item.done === false) {
                        return item;
                    }
                } else if (filter === "Completed") {
                    if (item.done === true) {
                        return item;
                    }
                } else if (filter === "All") {
                    return item;
                }
            });
            return sortedList;
        },
        findItem(number, instruction) {
            return this.dataBase.find((item) => {
                if (item.number === number) {
                    if (instruction === "check") {
                        if (item.done === false) {
                            item.done = true;
                            return;
                        } else if (item.done === true) {
                            item.done = false;
                            return;
                        }
                    }
                    return item;
                }
            });
        },
        checkToDo(checkItem) {
            let instruction = "check";
            this.findItem(checkItem, instruction);
            this.updateItemsLeft();
            return;
        },
        deleteToDo(deleteItem) {
            const itemIndex = this.dataBase.indexOf(this.findItem(deleteItem));
            console.log(itemIndex);
            this.dataBase.splice(itemIndex, 1);
            this.currentFilter(this.filterBar.filterOption);
            this.updateItemsLeft();
            return;
        },
    },
};
</script>
