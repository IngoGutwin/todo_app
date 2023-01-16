<template>
  <main :class="currentTheme">
    <AppWrapper @change-theme="changeTheme" :current-theme="currentTheme" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      currentTheme: "",
    };
  },
  created() {
    this.checkForSavedTheme();
  },
  methods: {
    checkForSavedTheme() {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        this.currentTheme = savedTheme;
      } else {
        this.changeTheme();
      }
    },
    changeTheme() {
      if (this.currentTheme === "light") {
        this.currentTheme = "dark";
        localStorage.setItem("theme", this.currentTheme);
      } else {
        this.currentTheme = "light";
        localStorage.setItem("theme", this.currentTheme);
      }
    },
  },
};
</script>

<style scoped></style>
