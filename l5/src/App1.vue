<script>
import Comp from "./components/z1.vue";
export default {
    data() {
        return {};
    },

    methods: {
        load() {
            (async () => {
                let res = await fetch("https://jsonplaceholder.typicode.com/posts", { method: "get" });
                let data = await res.json();
                this.$store.commit("data", data);
            })();
        },
    },
    mounted() {
        this.load();
    },
    computed: {
        stateData() {
            return this.$store.state.data;
        },
    },
    components: { Comp },
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
        <Comp v-for="obj in this.$store.state.data" :obj="obj" :key="obj.id"> </Comp>
    </div>
    <HelloWorld msg="Vite + Vue" />
</template>
