import { createApp } from "vue";
import App from "./App.vue";
import "./tailwind.css";

import ToDoItem from "./components/ToDoItem.vue";
import IconMoon from "./components/icons/IconMoon.vue";
import IconSun from "./components/icons/IconSun.vue";
import CrossIcon from "./components/icons/CrossIcon.vue";
import CheckIcon from "./components/icons/CheckIcon.vue";
import ToDoListWrapper from "./components/ToDoListWrapper.vue";
import UserInput from "./components/UserInput.vue";
import HeaderToggle from "./components/HeaderToggle.vue";
import FilterBar from "./components/FilterBar.vue";

const app = createApp(App);

app.component("ToDoItem", ToDoItem);
app.component("IconMoon", IconMoon);
app.component("IconSun", IconSun);
app.component("CrossIcon", CrossIcon);
app.component("CheckIcon", CheckIcon);
app.component("ToDoListWrapper", ToDoListWrapper);
app.component("UserInput", UserInput);
app.component("HeaderToggle", HeaderToggle);
app.component("FilterBar", FilterBar);

app.mount("#app");
