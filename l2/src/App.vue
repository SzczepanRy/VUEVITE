<script>
import Car from "./components/z5/Car.vue";
import State from "./components/z5/State.vue";
export default {
    data() {
        return {
            val: "-1",
        };
    },
    methods: {
        // add() {
        //     this.$store.commit("plus");
        //     console.log(this.$store.state.c);
        // },
        // getRobots() {
        //     return this.$store.robots;
        // },
        // getRobotsState() {
        //     return this.$store.robotsState;
        // },
        changeStore(id) {
            this.$store.commit("changeInStore", id);
        },
        gen() {
            this.$store.commit("gen", this.val);
        },
    },
    computed: {
        count() {
            return this.$store.state.c;
        },
    },
    components: { State, Car },
};
</script>

<template id="app">
    <p>app</p>
    <p>
        current val :
        {{ this.val }}
    </p>
    <input
        type="text"
        @input="
            (e) => {
                if (+e.target.value > 0 && +e.target.value < 7) {
                    this.val = +e.target.value;
                }
            }
        "
    />
    <button @click="gen">send</button>

    <div class="cars">
        <State
            :state="state"
            v-if="this.$store.state.robotsState.length > 0"
            v-for="state of this.$store.state.robotsState"
        ></State>
    </div>
    <hr />
    <div class="cars">
        <Car :car="car" v-if="this.$store.state.robots.length > 0" v-for="car of this.$store.state.robots"></Car>
    </div>
</template>

<style>
.main {
    width: 200px;
}
.cars {
    display: flex;
}
</style>
