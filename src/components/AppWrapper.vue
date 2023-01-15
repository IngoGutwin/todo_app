<template>
  <!-- start main container -->
  <div class="background">
    <div class="content container">
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
      <form class="mx-auto max-w-xl mt-10">
        <button>Go</button>
        <input
          type="search"
          v-model="newTodo"
          @keydown.enter="saveItem(newTodo)"
          placeholder="Create a new todo..."
          class="w-full h-16 rounded-md px-6"
        />
      </form>
    </div>
    <!-- end container todo's input -->
  </div>
  <!-- end main container -->
</template>

<script>
import CheckButton from "./icons/CheckButton.vue";

export default {
  props: {
    currentTheme: { type: String, required: true },
  },
  data() {
    return {
      newTodo: "",
      todoList: [],
    };
  },
  methods: {
    saveItem() {
      this.todoList.append(this.newTodo);
      console.log(this.todoList);
    },
  },
  components: { CheckButton },
};
</script>

<style scoped>
.content {
  @apply mx-auto h-screen;
}

.background {
  @apply bg-light_theme-very-light-gray dark:bg-dark_theme-very-dark-blue bg-no-repeat bg-bg-desktop-light dark:bg-bg-desktop-dark bg-top mx-auto;
}
.heading {
  @apply max-w-xl mx-auto flex justify-between items-center pt-20;
}
</style>
