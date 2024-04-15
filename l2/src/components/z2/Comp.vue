<script>
export default {
    computed: {
        cInComp() {
            return this.$store.state.c;
        },
    },
};
</script>

<template>
    <p>comp</p>
    <h2>{{ cInComp }}</h2>
</template>

<style scoped></style>
