<script>
export default {

    data() {
        return {
            file: false,
            album:false,
            filedata:null,
            albumdata:"",
        }
    },
    methods:{
        
    }
}
</script>


<template>
    <div class="upload">
        <form @submit="onSubmit" class="form">
            <input @input="(e) => {this.filedata=  e.target.files[0];e.target.files.length > 0 ? this.file = true : this.file = false }" type="file"> </input>
            <input @input="(e)=>{ this.albumdata = e.target.value ;e.target.value.length > 0 ? this.album= true : this.album = false }" class="album" placeholder="album "></input>
            <button v-if="this.album && this.file" >send</button>
        </form>
    </div>
</template>
<style scoped>
.upload {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 220px);
}

.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.form>button {
    all: unset;
}

.form>button:hover {
    cursor: pointer;
}
</style>