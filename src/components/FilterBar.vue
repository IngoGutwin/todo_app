<template>
    <div
        class="filter-bar flex bg-white dark:bg-dark_theme-dark-blue-desaturated justify-between self-center xs:h-12 sm:h-16 px-4"
    >
        <p class="self-center items-left">
            {{ `${itemsLeft} items left` }}
        </p>

        <div class="flex self-center font-bold">
            <p class="filter-all">All</p>

            <p class="px-4 filter-active">Active</p>

            <p class="filter-completed">Completed</p>
        </div>

        <p class="self-center clear-completed">Clear Completed</p>
    </div>
</template>

<script>
export default {
    props: {
        itemsLeft: { type: Number, required: true },
    },
};
</script>

<style scoped>
.filter-all,
.filter-active,
.filter-completed,
.clear-completed {
    @apply cursor-pointer text-light_theme-grayish-blue-200 dark:text-dark_theme-grayish-blue-hover-200 hover:text-light_theme-grayish-blue-300 dark:hover:text-dark_theme-grayish-blue-hover;
}

.items-left {
    @apply text-light_theme-grayish-blue-200 dark:text-dark_theme-grayish-blue-200;
}
.filter-bar {
    @apply rounded-b-md xs:text-xs sm:text-sm;
}
</style>
