<script>
export default {
    data() {
        return {
            test: "a",
        };
    },
    props: ["obj"],
};
</script>

<template>
    <div>
        <h1>{{ this.obj.title }}</h1>
        <p>{{ this.obj.body }}</p>
    </div>
</template>
