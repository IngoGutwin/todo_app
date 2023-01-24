<template>
    <button>
        <svg
            class="w-6 h-6"
            :class="classesSvg"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="12"
                cy="12"
                :r="circleRadius"
                :fill="fillCircle"
                :stroke="strokeCircle"
                :class="classesCircle"
            />

            <path
                d="M8 12.3041L10.6959 15L16.6959 9"
                stroke="#FFFFFF"
                stroke-width="2"
                :class="classesChop"
            />

            <defs>
                <linearGradient
                    id="paint0_linear_0_595"
                    x1="-12"
                    y1="12"
                    x2="12"
                    y2="36"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#55DDFF" />

                    <stop offset="1" stop-color="#C058F3" />
                </linearGradient>
            </defs>
        </svg>
    </button>
</template>

<script>
export default {
    props: {
        currentTheme: { type: String, required: true },
        markedToDo: { type: Boolean, required: true },
    },
    data() {
        return {
            circleRadius: 11.5,
            fillCircle: "#FFFFFF",
            strokeCircle: "#e4e5f1",
            classesSvg: "icon-not-active",
            classesCircle:
                "fill-white dark:fill-dark_theme-dark-blue-desaturated",
            classesChop:
                "stroke-white dark:stroke-dark_theme-dark-blue-desaturated",
        };
    },
    watch: {
        markedToDo: function (todoItem) {
            if (todoItem) {
                this.markToDo(todoItem);
            } else if (!todoItem) {
                this.markToDo(todoItem);
            }
        },
    },
    created() {},
    methods: {
        markToDo(condition) {
            if (condition === true) {
                this.circleRadius = 12;
                this.fillCircle = "url(#paint0_linear_0_595)";
                this.strokeCircle = 0;
                this.classesSvg = "";
                this.classesCircle = "";
                this.classesChop = "";
            } else if (condition === false) {
                this.circleRadius = 11.5;
                this.fillCircle = "#FFFFFF";
                this.strokeCircle = "#e4e5f1";
                this.classesSvg = "icon-not-active";
                this.classesCircle =
                    "fill-white dark:fill-dark_theme-dark-blue-desaturated";
                this.classesChop =
                    "stroke-white dark:stroke-dark_theme-dark-blue-desaturated";
            }
        },
    },
};
</script>

<style scoped>
.icon-not-active:hover circle {
    stroke: url(#paint0_linear_0_595);
}
</style>
