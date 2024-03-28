<template>
select2
 <select name="select" id="">
  
  <option value="val" v-for="val in array">{{val}}</option>
 </select>
</template>

<script>
export default {
  data() {
      return {
        array: this.prop1
      };
  },
  methods: {
      click() {
          alert(this.title);
      },
  },
  props: ["prop1"],
};
</script>

<style scoped>

</style>
