<script>
export default {
    data() {
        return {
            MYstate: false,
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
    props: ["state"],
};
</script>

<template>
    <div class="main">
        <div class="st">
            <p>
                {{ this.$store.state.robotsState[state.id].state ? "good" : "badd" }}
            </p>
        </div>
        <div class="a">
            <button
                @click="
                    () => {
                        console.log(this.state);

                        changeState(this.state.id);
                    }
                "
            >
                change state
            </button>
        </div>
    </div>
</template>
