<template>
  <!-- start main container -->
  <div class="background">
    <!-- start app container -->
    <div class="content container">
      <!-- start container with heading and theme toggle -->
      <div class="heading">
        <h1 class="text-5xl font-bold uppercase text-white pt-3">todo - app</h1>
        <button @click="$emit('changeTheme')" class="w-6 h-6 text-white">
          <IconSun v-if="currentTheme === 'dark'" />
          <IconMoon v-else-if="currentTheme === 'light'" />
        </button>
      </div>
      <!-- end container  -->
      <!-- start container todo's input -->
      <form
        ref="userInput"
        class="mx-auto max-w-xl mt-10 relative"
        @submit.prevent="saveItem"
      >
        <input
          type="text"
          v-model="newItem"
          placeholder="Create a new todo..."
          class="input-field"
        />
        <button>
          <CrossIcon
            v-if="deleteButton === true"
            class="absolute top-0 right-5 mt-5"
            @click="clearForm"
          />
        </button>
      </form>
      <!-- end container todo's input -->
    </div>
    <!-- end container todo's app  -->
  </div>
  <!-- end main container -->
</template>

<script>
export default {
  props: {
    currentTheme: { type: String, required: true },
  },
  data() {
    return {
      newItem: "",
      todoList: [],
      deleteButton: false,
    };
  },
  watch: {
    newItem: function (value) {
      if (value.length > 0) {
        this.deleteButton = true;
      } else if (value.length === 0) {
        this.deleteButton = false;
      }
    },
  },
  methods: {
    saveItem() {
      this.todoList.push(this.newItem);
      this.newItem = "";
      console.log(this.todoList);
      this.clearForm();
    },
    clearForm() {
      this.$refs.userInput.reset();
    },
  },
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

.input-field {
  @apply w-full h-16 rounded-md px-6 bg-light_theme-very-light-gray dark:bg-dark_theme-very-dark-blue text-light_theme-dark-grayish-blue dark:text-dark_theme-dark-grayish-blue;
}
.input-field:focus {
  outline: none;
}
</style>
