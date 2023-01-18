<template>
    <div :class="classes" class="">
        <button>
            <slot name="check"></slot>
        </button>

        <div class="w-full px-2">
            <slot></slot>
        </div>

        <button>
            <slot name="cross"></slot>
        </button>
    </div>
</template>

<script>
export default {
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
