<template>
    <div class="main">
        <div :style="{ background: car.hex_color }" class="h1">kolor auta</div>
        <div class="h2">
            {{ car.car_type }}
        </div>
        <img :src="car.image" alt="aa" srcset="" />
        <div class="fo">
            <p>{{ car.id }}</p>
            <p>{{ car.car_name }}</p>
            <p>{{ car.car_year }}</p>

            <button @click="click(car)">info</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            car: this.car,
        };
    },
    methods: {
        click(car) {
            alert(JSON.stringify(car, 5, 2));
        },
    },
    props: ["car"],
};
</script>
