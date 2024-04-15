<script>
export default {
    computed: {
        cInGComp() {
            return this.$store.state.c;
        },
    },
    methods: {
        addInGComp() {
            this.$store.commit("plus");
        },
    },
};
</script>

<template>
    <p>grand ch comp</p>

    <h4>{{ cInGComp }}</h4>

    <button @click="addInGComp">add</button>
</template>
