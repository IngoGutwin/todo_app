<template>
    <div
        :class="classes"
        class="bg-white dark:bg-dark_theme-dark-blue-desaturated px-4 border-light_theme-grayish-blue-100 dark:border-dark_theme-grayish-blue-hover-200"
    >
        <CheckIcon :current-theme="currentTheme" />

        <p class="w-full px-2">{{ item.name }}</p>

        <button>
            <CrossIcon />
        </button>
    </div>
</template>

<script>
export default {
    props: {
        item: { type: Object, required: true },
        currentTheme: { type: String, required: true },
    },
    data() {
        return {
            classes:
                "todo-item flex justify-between self-center items-center border-b-2 xs:h-12 sm:h-16",
        };
    },
};
</script>

<style scoped>
.todo-item:nth-child(2) {
    @apply rounded-t-md;
}
</style>
