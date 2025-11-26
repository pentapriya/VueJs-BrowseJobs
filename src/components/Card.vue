<template>
    <div class="card-container" :style="{backgroundColor:bg}">
       <div class="card-content"><h2>{{ title }}</h2>
       <p>{{ subTitle }}</p>
       <RouterLink to="anchorLink">{{jobTags}}</RouterLink></div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
    title:{
        type:String,
        default:"test title"
    },
    subTitle:{
        type:String,
        default:"test sub title"
    },
    anchorLink:{
        type:String,
        default:"index.html"
    },
    jobTags:{
        type:String,
        default:"Add jobs"
    },
    bg:{
        type:String,
        default:"#ec9797"
    }
})
</script>

<style scoped>
.card-container{
    display: flex;
    flex-direction: column;
    margin:10px;
    border-radius: 10px;
}

.card-content{
    padding: 10px;
    margin:10px;
    display: flex;
    gap:10px;
    flex-direction: column;
    border-radius: 10px;

    a{
        border:2px solid black;
        border-radius: 10px;
        padding:15px;
        text-align: center;

    }
    a:hover{
        background-color: aliceblue;
    }
}


</style>