<template>
    <div
        class="group p-4 todo-item flex justify-between self-center items-center border-b-2 rounded-t-md bg-white dark:bg-dark_theme-dark-blue-desaturated px-4 border-light_theme-grayish-blue-100 dark:border-dark_theme-grayish-blue-hover-200"
    >
        <CheckIcon
            :current-theme="currentTheme"
            :marked-to-do="item.done"
            @click.prevent="checkToDo"
        />

        <p class="w-full px-4 break-all" :class="{ 'checked-todo': item.done }">
            {{ item.name }}
        </p>

        <CrossIcon
            @click.prevent="deleteToDo"
            class="lg:invisible group-hover:enabled:visible"
        />
    </div>
</template>

<script>
export default {
    emits: ["checkToDo", "deleteToDo", "check-to-do", "delete-to-do"],
    props: {
        item: { type: Object, required: true },
        currentTheme: { type: String, required: true },
    },
    methods: {
        checkToDo() {
            this.$emit("checkToDo", this.item.number);
        },
        deleteToDo() {
            this.$emit("deleteToDo", this.item.number);
        },
    },
};
</script>

<style scoped>
.checked-todo {
    @apply line-through text-dark_theme-grayish-blue dark:text-dark_theme-grayish-blue-200;
}
</style>
