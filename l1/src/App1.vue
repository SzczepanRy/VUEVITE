<template>
    <div id="main">
        <MyButton2 :prop1="bg" :prop2="cl"></MyButton2>
    </div>
</template>

<script>
import MyButton2 from "./components/MyButton2.vue";
export default {
    data() {
        return {
            message: "Hello World",
            bg: "red",
            cl: "blue",
        };
    },
    components: { MyButton2 },
};
</script>

<style>
#main {
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    color: blue;
}
</style>
