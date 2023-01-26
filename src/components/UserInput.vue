<template>
    <div class="mt-10 mx-auto relative">
        <div
            class="bg-white dark:bg-dark_theme-dark-blue-desaturated rounded-md"
        >
            <div class="w-10/12 ml-10">
                <input
                    type="text"
                    v-model="currentItem"
                    placeholder="Create a new todo..."
                    class="input-field bg-white dark:bg-dark_theme-dark-blue-desaturated"
                    :class="classes"
                    @keyup.enter="passItem"
                />
            </div>
        </div>

        <button>
            <CrossIcon
                v-if="deleteButton === true"
                class="absolute xs:top-4 sm:top-0 right-5 xs:mb-5 sm:mt-5"
                @click.prevent="currentItem = ''"
            />
        </button>
    </div>
</template>

<script>
export default {
    emits: ["passItem", "pass-item"],
    data() {
        return {
            classes: "empty-field",
            currentItem: "",
            deleteButton: false,
        };
    },
    watch: {
        currentItem: function (value) {
            if (value.length > 0) {
                this.deleteButton = true;
                this.classes = "currently-typing";
            } else if (value.length === 0) {
                this.deleteButton = false;
                this.classes = "empty-field";
            }
        },
    },
    methods: {
        passItem() {
            this.$emit("passItem", this.currentItem);
            this.currentItem = "";
        },
    },
};
</script>

<style scoped>
.input-field:focus,
.input-field {
    @apply w-full xs:h-12 sm:h-16 rounded-md px-4;
    outline: none;
}
.empty-field {
    @apply text-light_theme-grayish-blue-300 dark:text-dark_theme-grayish-blue;
}
.currently-typing {
    @apply text-light_theme-grayish-blue-300 dark:text-dark_theme-grayish-blue;
}
</style>
