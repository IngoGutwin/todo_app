<template>
    <main :class="currentTheme">
        <div class="background">
            <div class="content container">
                <HeaderToggle
                    @change-theme="changeTheme"
                    :current-theme="currentTheme"
                />

                <ToDoListWrapper />
            </div>
        </div>
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

<style scoped>
.content {
    @apply mx-auto h-screen;
}
.background {
    @apply bg-light_theme-very-light-gray dark:bg-dark_theme-very-dark-blue bg-no-repeat bg-bg-desktop-light dark:bg-bg-desktop-dark bg-top mx-auto;
}
</style>
