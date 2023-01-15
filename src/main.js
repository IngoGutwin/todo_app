import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

import AppWrapper from "./components/AppWrapper.vue";
import ToDoItem from "./components/ToDoItem.vue";
import IconMoon from "./components/icons/IconMoon.vue";
import IconSun from "./components/icons/IconSun.vue";
import CrossIcon from "./components/icons/CrossIcon.vue";

const app = createApp(App);

app.component("AppWrapper", AppWrapper);
app.component("ToDoItem", ToDoItem);
app.component("IconMoon", IconMoon);
app.component("IconSun", IconSun);
app.component("CrossIcon", CrossIcon);

app.mount("#app");
