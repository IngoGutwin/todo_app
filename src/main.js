import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

import AppWrapper from "./components/AppWrapper.vue";
import ToDoItem from "./components/ToDoItem.vue";

const app = createApp(App);

app.component("AppWrapper", AppWrapper);
app.component("ToDoItem", ToDoItem);

app.mount("#app");
