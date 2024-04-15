import { createStore } from "vuex";
import cars from "./data/cars.json";
const store = createStore({
    state: {
        robots: [],
        robotsState: [],
    },

    mutations: {
        gen(state, val) {
            this.state.robots = [];
            this.state.robotsState = [];
            for (let i = 0; i < +val; i++) {
                console.log(this.state.robots);
                this.state.robots[i] = cars[i];
                this.state.robotsState[i] = { id: i, state: false };
            }
        },
        changeState(state, id) {
            for (let robot of this.state.robots) {
                if (robot.id == id) {
                    this.state.robotsState[id].state = !this.state.robotsState[id].state;
                }
            }
        },
    },
});
export default store;
