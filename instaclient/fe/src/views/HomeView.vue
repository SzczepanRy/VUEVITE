<script>
import { RouterLink } from "vue-router"
import CarTile from "../components/CarTile.vue"
export default {
    computed: {
        load() {

            return this.$store.getters.GET_CARS_LIST
        },
        checkLoading() {
            return this.$store.getters.GET_CARS_LOADING
        }
    },
    created() {
        this.$store.dispatch("FETCH_CARS");
    },
    data() {
        return {

        }
    },
    components: { CarTile, RouterLink }
};
</script>

<template>
    <div class="load" v-if="checkLoading">
        <h1>LOADINGGG</h1>
    </div>
    <div class="home">
        <RouterLink v-for="car in load" :to="`/car/${car.id}`" :key="car.id">
                   
            <CarTile v-bind:car="car" />
        </RouterLink>
    </div>

</template>
<style scoped>
.home {
    overflow-y: scroll;
    height: calc(100vh - 220px);
}

.load {
    position: absolute;
    overflow: hidden;
    left: calc(50vw - 250px);
    top: calc(50vh - 50px);
    height: 100px;
    width: 500px;
}
</style>
