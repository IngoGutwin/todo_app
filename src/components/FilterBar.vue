<template>
    <div class="filter-bar flex flex-wrap justify-between">
        <div class="flex grow py-5 pl-4 rounded-bl-md sm:ortder1">
            <p class="items-left">
                {{ `${filterBar.itemsLeft} items left` }}
            </p>
        </div>

        <div
            class="flex justify-center grow font-bold p-5 xs:mt-4 xs:rounded-md order-3 sm:order-2 text-center"
        >
            <p
                v-for="option in filterOptions"
                :key="option"
                :class="option.classes"
                :aria-selected="option.filterOption"
                @click.prevent="currentFilter(option.function)"
            >
                {{ `${option.function}` }}
            </p>
        </div>

        <div class="grow flex justify-end py-5 pr-4 rounded-br-md sm:order-3">
            <p class="clear-completed" @click="currentFilter('clearCompleted')">
                Clear Completed
            </p>
        </div>
    </div>
</template>

<script>
export default {
    emits: ["currentFilter", "current-filter"],
    props: {
        filterBar: { type: Object, required: true },
    },
    data() {
        return {
            filterOptions: [
                {
                    filterOption: true,
                    classes: "filter-all",
                    function: "All",
                },
                {
                    filterOption: false,
                    classes: "filter-active px-4",
                    function: "Active",
                },
                {
                    filterOption: false,
                    classes: "filter-completed",
                    function: "Completed",
                },
            ],
        };
    },
    methods: {
        currentFilter(option) {
            if (option === "clearCompleted") {
                this.$emit("currentFilter", option);
            } else {
                this.filterOptions.filter((item) => {
                    if (item.function === option) {
                        this.$emit("currentFilter", option);
                        return (item.filterOption = true);
                    }
                    item.filterOption = false;
                });
            }
        },
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

.filter-bar * {
    @apply bg-white dark:bg-dark_theme-dark-blue-desaturated;
}
[aria-selected="true"] {
    @apply text-bright-blue !important;
}
</style>
