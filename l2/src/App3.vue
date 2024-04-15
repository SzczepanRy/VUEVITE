<script>
import Comp from "./components/z3/Comp.vue";
export default {
    data() {
        return {};
    },
    methods: {
        // add() {
        //     this.$store.commit("plus");
        //     console.log(this.$store.state.c);
        // },
    },
    computed: {
        count() {
            return this.$store.state.c;
        },
    },
    components: { Comp },
};
</script>

<template id="app">
    <p>app</p>
    <Comp></Comp>

    <Comp></Comp>
</template>

<style scoped></style>
