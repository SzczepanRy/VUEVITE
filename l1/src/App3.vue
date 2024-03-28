<template>
    <div id="main">
        <div class="select">
            <MyCar :addFunc="add" :car="carObj" v-for="carObj in json"></MyCar>

        </div>
        <div class="koszyk">
            <MyCarCart :deleteFn="deleteFn" :car="cart" v-for="cart in koszyk"></MyCarCart>
            
        </div>
    </div>

</template>

<script>
import MyCar from "./components/z3/MyCar.vue"
import MyCarCart from "./components/z3/MyCarCart.vue";
import Json from "./data/cars";
export default {
    data() {
        return {
            json:Json,
            koszyk :[]
        };
    },
    methods:{
        add(item){
            this.koszyk.push(item)
            console.log(this.koszyk);
        },
        deleteFn(item){
            this.koszyk = this.koszyk.filter((el)=>{
                if(el.id != item.id){
                    return el
                }
            })
        }
    },
    components: {MyCar,MyCarCart },
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
