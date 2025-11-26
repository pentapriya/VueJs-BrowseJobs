<template>
<p>
  {{ message }}
</p>
<p v-if="status==='active'">active</p>
<p v-else-if="status==='pending'">pending</p>
<p v-else>inactive</p>
<button @click="toggleStatus">Toggle Status</button>
<ul>
  <li v-for="(task,index) in tasks" :key="task">
    <span>{{ task }}</span>
     <button @click="deleteTask(index)">X</button>
  </li>
 
</ul>

<form @submit.prevent="addFormTask">
  <label for="newTask">Add form</label>
  <input type="text" name="newTask" v-model="newTask" />
  <button type="submit">Add</button>
</form>
</template>
<script setup>
import { onMounted, ref } from 'vue';


      const message=ref("hello everyone!!!");
      const status=ref("inactive");
      const tasks=ref(["task one","task two","task three"]);
      const newTask=ref("")
      
    const toggleStatus=()=>{
      if(status.value==="active"){
        status.value="pending"
      }
      else if(status.value==="pending"){
        status.value="inactive"
      }
      else{
        status.value="active"
      }
    }
    const addFormTask=()=>{
      if(newTask.value.trim() !== ""){
        tasks.value.push(newTask.value)
        newTask.value=""
      }
    }
    const deleteTask=(index)=>{
      tasks.value.splice(index,1)
    }

    onMounted(async()=>{
      try{
        const response=await fetch('https://jsonplaceholder.typicode.com/todos')
        const data=await response.json()
        tasks.value=data.map((task)=>task.title)
      }
      catch(e){
        console.log(e)
      }
    })
  
</script>