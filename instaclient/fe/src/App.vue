<script>
import {RouterView} from "vue-router"
import CarTile from "./components/CarTile.vue"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
export default {
    data() {
        return {
            x: 1
        }
    },
    methods: {

        fetchCars() {

        }

    },
    computed: {

        get() {
        }
    },
    components: { Header,Footer,RouterView }

    , created() {
        this.$store.dispatch("FETCH_CARS");
    }
    ,


}

</script>


<template>

    <Header class="header"/>
    <div>
        <RouterView/>
    </div>
        <Footer/>
</template>

<style scoped>
.header{
    width:100vw;
    height:100px;
    display:flex;
    justify-content:center ;
    align-items: center;
    z-index: 100;
}

</style>
