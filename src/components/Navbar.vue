<script setup>
import vueLogo from "@/Assets/Images/vue.png"
import { RouterLink,useRoute } from "vue-router";

const isActiveLink=(routePath)=>{
    const route=useRoute()
    return route.path===routePath
}
</script>

<template>
    <div class="navbar">
        <div class="navbar-content">
            <div>
                <a href="index.html">
                <img :src="vueLogo" alt="vue image"/>
            </a>
            </div>
            <div class="navbar-container">
                <RouterLink to="/" :class="isActiveLink('/')?'active':'inActive'">Home</RouterLink><RouterLink to="/jobs" :class="isActiveLink('/jobs')?'active':'inActive'">Jobs</RouterLink><RouterLink to="/jobs/add" :class="isActiveLink('/jobs/add')?'active':'inActive'">Add Job</RouterLink>
            </div>
 
        </div>
    </div>
</template>

<style scoped>
.navbar{
    background-color: aqua;
    color:white;
    width:100%;
    height:20px;
    padding:20px;
}

.navbar-content{
    display:flex;
    justify-content:space-between;  
    width:90%; 
}
img{
    width:15%;
    height:35%;
}


.active{
background-color: #ffffff; 
  color: #007bff; 
  border-radius: 8px; /* Rounded corners */
  height:20px;
  padding:6px 4px;

}

.navbar-container{
    display: flex;
    gap:30px;
}


.inactive {
  text-decoration: none;
}

</style>