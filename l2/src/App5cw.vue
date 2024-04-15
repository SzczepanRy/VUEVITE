<script>
export default {
    data() {
        return {};
    },
    methods: {
        // add() {
        //     this.$store.commit("plus");
        //     console.log(this.$store.state.c);
        // },
        changeStore(id) {
            this.$store.commit("changeInStore", id);
        },
    },
    computed: {
        count() {
            return this.$store.state.c;
        },
    },
    // components: { Comp },
};
</script>

<template id="app">
    <p>app</p>
    <h1>{{ count }}</h1>
    <button
        @click="
            () => {
                changeStore(4);
            }
        "
    >
        change
    </button>
    <button
        @click="
            () => {
                changeStore(23);
            }
        "
    >
        change
    </button>
    <button
        @click="
            () => {
                changeStore(76);
            }
        "
    >
        change
    </button>
</template>

<style scoped></style>
