<script setup>
import { ref } from "vue";

defineProps({
    msg: String,
});

const count = ref(0);
</script>

<template>
    <p>comp</p>
    {{ msg }}
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
