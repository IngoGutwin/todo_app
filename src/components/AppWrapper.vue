<template>
  <!-- start main container -->
  <div class="content">
    <!-- start container with heading and theme toggle -->
    <div class="heading">
      <h1 class="text-5xl font-bold uppercase text-white pt-3">todo</h1>
      <button @click="$emit('changeTheme')" class="w-6 h-6 text-white">
        <IconSun v-if="currentTheme === 'dark'" />
        <IconMoon v-else-if="currentTheme === 'light'" />
      </button>
    </div>
    <!-- end container  -->
    <!-- start container todo's input -->
    <!-- end container todo's input -->
  </div>
  <!-- end main container -->
</template>

<script>
export default {
  props: {
    currentTheme: { type: String, required: true },
  },
};
</script>

<style scoped>
.content {
  @apply bg-light_theme-very-light-gray dark:bg-dark_theme-very-dark-blue h-screen bg-no-repeat bg-bg-desktop-light dark:bg-bg-desktop-dark bg-top w-full;
}
.heading {
  @apply max-w-xl mx-auto flex justify-between items-center pt-20;
}
</style>
