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
    
      <button @click="deleteCar(car)">delete</button>
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
        deleteCar(car){
          this.deleteFn(car)
        }
    },
     props: ["car","deleteFn"],
  };
  </script>
  
  <style scoped>

  </style>
  