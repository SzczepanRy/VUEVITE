<template>
    <div id="main">
        <MyButton2 :prop1="bg" :prop2="cl"></MyButton2>
        <hr>
        <MySelect></MySelect>
        <hr>
        <MySelect2 :prop1="array"></MySelect2>
    </div>
</template>

<script>
import MyButton2 from "./components/z1/MyButton2.vue";
import MySelect from "./components/z1/MySelect.vue";
import MySelect2 from "./components/z1/MySelect2.vue";
export default {
    data() {
        return {
            message: "Hello World",
            bg: "red",
            cl: "blue",
            array:["aaa","bbb","ccc","ddd"]
        };
    },
    components: { MyButton2 ,MySelect,MySelect2},
};
</script>

<style>
#main {
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    color: blue;
}
</style>
