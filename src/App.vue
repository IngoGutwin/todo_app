<template>
  <main :class="currentTheme">
    <AppWrapper @change-theme="changeTheme" :current-theme="currentTheme" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      currentTheme: "light",
    };
  },
  methods: {
    changeTheme() {
      if (this.currentTheme === "light") {
        this.currentTheme = "dark";
      } else {
        this.currentTheme = "light";
      }
    },
  },
};
</script>

<style scoped></style>
