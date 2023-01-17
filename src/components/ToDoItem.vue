<template>
  <div
    class="mx-auto max-w-xl todo-item flex justify-between self-center items-center border-b-2 border-light_theme-light-grayish-blue dark:border-dark_theme-dark-grayish-blue"
  >
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

<style></style>
