<template>
    <div class="container" :job="job">
        
            <h5>Full Time</h5>
            <h2>{{job.title}}</h2>
            <div>
                <p>{{ description }}</p>
                <a @click="toggleDescription" class="more-less">{{ showFullDescription? 'Less...':'More...' }}</a>
            </div>
            <h6>{{ job.salary }} per annum</h6>
            <hr />
            <h4>{{ job.location }}</h4>
            <RouterLink :to="`/jobs/${job.id}`" class="readmore">Read More</RouterLink>
        
    </div>
</template>
<script setup>
import { computed, defineProps, ref } from 'vue';
import { RouterLink } from 'vue-router';

const props=defineProps({
    job:Object
})

const showFullDescription=ref(false)

const toggleDescription=()=>{
    showFullDescription.value=!showFullDescription.value
}

const description=computed(()=>{
    let description=props.job.description
    if(!showFullDescription.value){
        description=description.substring(0,90)+" ... "
    }
    return description
})

</script>
<style scoped>
.container {
  margin: 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 10px;
  background-color: gray;
  padding: 10px;
  gap: 20px;

  h6 {
    color: aquamarine;
    font-size: larger;
    font-weight: 600;
  }

  hr {
    border: none;
    height: 3px;
    background-color: rgb(87, 84, 84);
    margin: 10px 0;
    border-radius: 2px;
    width: 100%;
  }
}

.container * {
  margin: 0;
}

.readmore {
  width: 30%;
  background-color: cadetblue;
  border: 2px solid black;
  border-radius: 10px;
  padding: 8px 4px;;
  text-align: center;
}

readmore:hover {
  background-color: aliceblue;
}

.more-less{
    margin:5px;
    color:azure;
    cursor: pointer;
}
</style>
