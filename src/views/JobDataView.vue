<template>
    <section class="goback"><div class="container"> <GoBackComponent /></div></section>
   
   <section>
<div v-if="selectedRoute">
    <Jobpage :job="selectedRoute" />
  </div>
  <div v-else>
    Loading job details...
  </div>
</section>
</template>
<script setup>
import Jobpage from "@/components/Jobpage.vue";
 
import { computed, onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import GoBackComponent from "@/components/GoBackComponent.vue";
 
const route=useRoute()
 
const Id = computed(() => route.params.id)
 
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
 
 
 
const selectedRoute = computed(() => {
  const selected = jobData.value.find(job => job.id === Id.value);
  return selected;
});
 
</script>
<style scoped>
.goback{
    display:flex;
    padding:10px;
   background-color: rgb(189, 245, 227);
}
 
.container{
    background-color: azure;
    border-radius: 10px;
    padding:10px 20px;
}
</style>
 