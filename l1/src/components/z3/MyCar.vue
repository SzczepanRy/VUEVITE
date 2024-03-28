<template>

  <div class="main">
    <div :style="{ background:car.hex_color}" class="h1">
      kolor auta
    </div>
    <div class="h2">
      {{ car.car_type }}
    </div>
    <img :src="car.image" alt="aa" srcset="">
    <div class="fo">
      <p>{{ car.id }}</p>
      <p>{{ car.car_name }}</p>
      <button @click="click(car)">info</button>
      <button @click="add(car)">add</button>
    </div>
  </div>
</template>
  
  <script>
  export default {
    data() {
        return {
          car:this.car
        };
    },
    methods: {
        click(car) {
            alert(JSON.stringify(car,5,2));
        },
        add(car){
          this.addFunc(car)
        }
    },
     props: ["car","addFunc"],
  };
  </script>
  
  <style scoped>

  </style>
  