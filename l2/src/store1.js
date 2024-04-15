import { createStore } from "vuex";
const store = createStore({
    state: {
        c: 0,
    },

    mutations: {
        plus(state) {
            this.state.c++;
        },
    },
});
export default store;
