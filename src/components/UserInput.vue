<template>
    <div class="mx-auto max-w-xl mt-10 relative">
        <input
            type="type"
            v-model="currentItem"
            placeholder="Create a new todo..."
            class="input-field mb-6"
            @keyup.enter="passItem"
        />

        <button>
            <CrossIcon
                v-if="deleteButton === true"
                class="absolute top-0 right-5 mt-5"
                @click.prevent="currentItem = ''"
            />
        </button>
    </div>
</template>

<script>
export default {
    emits: ["saveItem"],
    data() {
        return {
            currentItem: "",
            deleteButton: false,
        };
    },
    watch: {
        currentItem: function (value) {
            if (value.length > 0) {
                this.deleteButton = true;
            } else if (value.length === 0) {
                this.deleteButton = false;
            }
        },
    },
    methods: {
        passItem() {
            this.$emit("saveItem", this.currentItem);
            this.currentItem = "";
        },
    },
};
</script>

<style scoped>
.input-field {
    @apply w-full h-16 rounded-md px-6 bg-white dark:bg-dark_theme-very-dark-blue text-light_theme-dark-grayish-blue dark:text-dark_theme-dark-grayish-blue;
}
.input-field:focus {
    outline: none;
}
</style>
