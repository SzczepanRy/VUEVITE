import { createStore } from "vuex";
const store = createStore({
    state: {
        c: 0,
    },

    mutations: {
        plus(state) {
            this.state.c++;
        },
        changeInStore(state, id) {
            this.state.c = id;
        },
    },
});
export default store;
