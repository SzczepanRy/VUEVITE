<script>
export default {
    data() {
        return {
            state: false,
        };
    },
    methods: {
        info() {},
        changeState(id) {
            this.$store.commit("changeState", id);
            // console.log(this.$store.state.robotsState[id]);
            this.getState(id);
        },
    },
    props: ["car"],
};
</script>

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
        </div>
        <div class="st">
            <p>
                {{ this.$store.state.robotsState[car.id].state ? "good" : "badd" }}
            </p>
        </div>
        <div class="a">
            <button @click="info">info</button>
            <button
                @click="
                    () => {
                        changeState(car.id);
                    }
                "
            >
                change state
            </button>
        </div>
    </div>
</template>
