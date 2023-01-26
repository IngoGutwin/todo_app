<template>
    <div class="heading">
        <h1 class="xs:text-xl sm:text-5xl font-bold uppercase text-white">
            todo
        </h1>

        <button @click="$emit('changeTheme')" class="text-white">
            <IconSun v-if="currentTheme === 'dark'" />

            <IconMoon v-else-if="currentTheme === 'light'" />
        </button>
    </div>

    <a href="https://github.com/IngoGutwin/todo_app" class="text-black"
        >Link to reporitory</a
    >
</template>

<script>
export default {
    props: {
        currentTheme: { type: String, required: true },
    },
};
</script>

<style scoped>
.heading {
    @apply mx-auto flex justify-between items-center xs:pt-12 sm:pt-20;
}
</style>
