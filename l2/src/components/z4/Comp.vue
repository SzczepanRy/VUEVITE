<script>
import GComp from "./GComp.vue";
export default {
    computed: {
        cInComp() {
            return this.$store.state.c;
        },
    },
    methods: {
        addInComp() {
            this.$store.commit("plus");
        },
    },
    components: { GComp },
};
</script>

<template>
    <p>comp</p>
    <h2>{{ cInComp }}</h2>
    <button @click="addInComp">dodaj</button>
    <GComp></GComp>
    <GComp></GComp>
</template>

<style scoped></style>
