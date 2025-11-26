<template>
    <JobListing  v-for="job in jobData" :key="job.id" :job="job"/>
</template>

<script setup>
import JobListing from "@/components/JobListing.vue";
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
}

})

</script>