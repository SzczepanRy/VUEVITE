<script>
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
};
</script>

<template>
    <div>
        <button
            @click="
                () => {
                    this.add();
                }
            "
        >
            dodaj
        </button>
        <h1>{{ this.$store.state.c }}</h1>
    </div>
    <HelloWorld msg="Vite + Vue" />
</template>
