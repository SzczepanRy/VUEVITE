<template>
    <div id="main">
        <input
            @input="
                (e) => {
                    filter(e.target.value);
                }
            "
            type="range"
            nim="1900"
            max="2080"
        />
        <div class="select">
            <MyCar :addFunc="add" :car="carObj" v-for="carObj in filterJson"></MyCar>
        </div>
    </div>
</template>

<script>
import MyCar from "./components/z6/MyCar.vue";
import MyCarCart from "./components/z6/MyCarCart.vue";
import Json from "./data/cars";
export default {
    data() {
        return {
            json: Json,
            filterJson: [],
            koszyk: [],
        };
    },
    methods: {
        add(item) {
            this.koszyk.push(item);
            console.log(this.koszyk);
        },
        filter(val) {
            this.filterJson = this.json.filter((el) => {
                console.log(el.car_year);
                if (el.car_year < val) {
                    return el;
                }
            });
        },
    },
    components: { MyCar, MyCarCart },
};
</script>

<style>
input {
    position: absolute;
    top: 50px;
    left: 50px;
}
#main {
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    color: blue;
    /* display: flex;
    flex-wrap: wrap; */
    margin: 10px;
}
.select {
    width: 100vw;
    display: flex;
}
</style>
