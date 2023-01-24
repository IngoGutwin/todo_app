<template>
    <main :class="currentTheme">
        <div class="background bg-no-repeat bg-top mx-auto">
            <div class="content container mx-auto xs:max-w-xs md:max-w-xl">
                <HeaderToggle
                    @change-theme="changeTheme"
                    :current-theme="currentTheme"
                />

                <ToDoListWrapper :current-theme="currentTheme" />
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
.background {
    @apply min-h-screen bg-light_theme-gray dark:bg-dark_theme-dark-blue text-light_theme-grayish-blue-300 dark:text-dark_theme-grayish-blue;
}

@screen xs {
    .background {
        @apply bg-mobile-light dark:bg-mobile-dark;
    }
}
@screen sm {
    .background {
        @apply bg-desktop-light dark:bg-desktop-dark;
    }
}
.filter-bar {
    @apply xs:text-xs sm:text-sm !important;
}
</style>
