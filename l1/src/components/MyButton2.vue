<template>
    {{ this.prop1 }}
    <button class="b" :style="{ background: prop2, color: prop1 }" @click="click">{{ title }}</button>
</template>

<script>
export default {
    data() {
        return {
            title: "button title",
            prop1: this.prop1,
            prop2: this.prop2,
        };
    },
    methods: {
        click() {
            alert(this.title);
        },
    },
    props: ["prop1", "prop2"],
};
</script>

<style scoped>
.b {
    font-size: 30px;
}
</style>
