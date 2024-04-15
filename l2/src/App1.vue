<script>
import HelloWorld from "./components/z1/HelloWorld.vue";
export default {
    data() {
        return {};
    },
    methods: {
        add() {
            this.$store.commit("plus");
            console.log(this.$store.state.c);
        },
    },
    computed: {
        count() {
            return this.$store.state.c;
        },
    },
};
</script>

<template id="app">
    <p>app</p>
    {{ count }}
    <HelloWorld msg="prop" />
    <button @click="add">dodaj</button>
</template>

<style scoped></style>
