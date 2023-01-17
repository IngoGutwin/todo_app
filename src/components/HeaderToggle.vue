<template>
  <div class="heading">
    <h1 class="text-5xl font-bold uppercase text-white pt-3">todo</h1>

    <button @click="$emit('changeTheme')" class="w-6 h-6 text-white">
      <IconSun v-if="currentTheme === 'dark'" />

      <IconMoon v-else-if="currentTheme === 'light'" />
    </button>
  </div>
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
  @apply max-w-xl mx-auto flex justify-between items-center pt-20;
}
</style>
