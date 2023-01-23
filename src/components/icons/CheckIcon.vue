<template>
    <button @click="checkTodo">
        <svg
            class="w-6 h-6"
            :class="classes"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="12"
                cy="12"
                :r="radius"
                :fill="circleFill"
                :stroke="circleBorder"
            />

            <path
                d="M8 12.3041L10.6959 15L16.6959 9"
                :stroke="strockeChop"
                stroke-width="2"
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
    },
    data() {
        return {
            isactive: false,
            radius: 11.5,
            strockeChop: "#FFFFFF",
            circleBorder: "#e4e5f1",
            circleFill: "",
            classes: "icon-not-active",
        };
    },
    watch: {},
    created() {
        console.log(tailwind.theme);
    },
    methods: {},
};
</script>

<style scoped>
.icon-not-active:hover circle {
    stroke: url(#paint0_linear_0_595);
}
</style>
