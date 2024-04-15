<script>
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
};
</script>

<template>
    <p>comp</p>
    <h2>{{ cInComp }}</h2>
    <button @click="addInComp">dodaj</button>
</template>

<style scoped></style>
