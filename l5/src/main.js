import { createApp } from "vue";
import { createStore } from "vuex";
import "./style.css";

import App from "./App1.vue";
// import App from "./App.vue";
const store = createStore({
    state: {
        data: [],
        c: 0,
    },

    mutations: {
        plus(state) {
            this.state.c++;
        },
        data(state, data) {
            this.state.data = data;
        },
    },
});
createApp(App).use(store).mount("#app");
