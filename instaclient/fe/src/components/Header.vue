<template>

    <div class="navig">

        <RouterLink to="/" exact>Home</RouterLink>
         <RouterLink to="/upload">Upload</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/nnn">Not found</RouterLink>
    </div>


</template>

<script>
//nigga script
export default {
    data() {

        return {

            data: 1
        }
    }


}

</script>

<style scoped>
.navig {
    width: 100vw;

    display: flex;
    justify-content: space-around !important;
    align-items: center;

}
</style>
