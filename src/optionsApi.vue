<template>
<p>
  {{ message }}
</p>
<p v-if="status==='active'">active</p>
<p v-else-if="status==='pending'">pending</p>
<p v-else>inactive</p>
<button @click="toggleStatus">Toggle Status</button>
<ul>
  <li v-for="task in tasks">{{ task }}</li>
</ul>
<p :href="link">google</p>
</template>
<script>
export default{
  data(){
    return{
      message:"hello everyone!!!",
      status:"inactive",
      tasks:["task one","task two","task three"],
      link:"https://www.google.com"
    }
  },
  methods:{
    toggleStatus(){
      if(this.status==="active"){
        this.status="pending"
      }
      else if(this.status==="pending"){
        this.status="inactive"
      }
      else{
        this.status="active"
      }
    }
  }
}
</script>