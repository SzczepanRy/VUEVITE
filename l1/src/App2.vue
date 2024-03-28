<template>
    <div id="main">
        <Car :car="carObj" v-for="carObj in json"></Car>
    </div>
</template>

<script>
import Car from "./components/z2/MyCar.vue"
import Json from "./data/cars";
export default {
    data() {
        return {
            json:Json
        };
    },
    components: {Car},
};
</script>

<style>
#main {
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    color: blue;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;

}
</style>
