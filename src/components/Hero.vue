<template>
    <div class="heading">
        <div>{{ mainHeading }}</div>
    <div>{{ subHeading }}</div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps({
    mainHeading:{
        type:String,
        default:"Test Title"
    },
    subHeading:{
        type:String,
        default:"Test Sub Heading"
    },
})
</script>

<style scoped>
.heading{
    height:20%;
    background-color:azure;
    font-size: larger;
    font-weight: 600;
    color:brown;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap:5px;
    padding:10px 0px;
}

</style>