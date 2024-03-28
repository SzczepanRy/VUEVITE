<template>
select
 <select name="select" id="">
  
  <option value="val" v-for="val in array">{{val}}</option>
 </select>
</template>

<script>
export default {
  data() {
      return {
        array: [1, 2, 3]
      };
  },
  methods: {
      click() {
          alert(this.title);
      },
  },
  // props: ["prop1", "prop2"],
};
</script>

<style scoped>

</style>
