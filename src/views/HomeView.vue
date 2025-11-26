<script setup> import Hero from '@/components/Hero.vue';
import JobListings from '@/components/JobListings.vue';
import HomeCards from '@/components/HomeCards.vue';
import { ref,onMounted } from "vue";
import axios from "axios";

const jobData=ref([])

onMounted(async()=>{
    try{
        
    const response=await(axios.get("http://localhost:5000/jobs"))
    jobData.value=response.data
}
catch(err){
    console.log(err)
}})
</script>

<template><Hero mainHeading="Become a vue developer"/>
<HomeCards />
<JobListings :limit="3" :showButton=true :jobs="jobData"/></template>