<template>
  <section>
    <div class="container">
      <div class="main-content">
        <div class="Heading">
          <p>{{ job.type }}</p>
          <h1>{{ job.title }}</h1>
          <p class="location">{{ job.location }}</p>
        </div>
        <div class="details">
          <h4>Job Description</h4>
          <p>{{ job.description }}</p>
          <h4>Salary</h4>
          <p>{{ job.salary }} per annum</p>
        </div>
      </div>
      <div class="side-content">
        <div class="Heading">
          <h3>Company Info</h3>
          <p class="title">{{ job.company.name }}</p>
          <p>{{ job.company.description }}</p>
          <hr />
          <p class="title">Contact Email:</p>

          <b class="contact">{{ job.company.contactEmail }}</b>
          <p class="title">Contact Phone:</p>
          <b class="contact">{{ job.company.contactPhone }}</b>
        </div>

        <div class="Heading">
          <h3>Manage Job</h3>
          <button class="edit-btn"><RouterLink :to="`/jobs/edit/${job.id}`">Edit Job</RouterLink></button>
          <button class="delete-btn" @click="deleteJob(job.id)">
            Delete Job
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import axios from "axios";
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import {useToast} from "vue-toastification";

const router = useRouter();
const toast=useToast()
const props = defineProps({
  job: Object,
});

const deleteJob = async (Id) => {
  try {
    console.log(Id);
    const confirmDelete = confirm("Do you want to delete the Job");
    if (confirmDelete) {
      await axios.delete(`http://localhost:5000/jobs/${Id}`);
      toast.success("Job is deleted successfully");
      router.push("/jobs");
    }
  } catch (e) {
    console.log(e);
  }
};
</script>
<style scoped>
section {
  background-color: rgb(189, 245, 227);
}

.container {
  display: flex;
  gap: 10px;
}

.main-content {
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.side-content {
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title {
  font-size: larger;
}

.contact {
  display: inline-block;
  width: 60%;
  background-color: rgb(145, 239, 207);
  padding: 10px 100px 10px 10px;
  border-radius: 10px;
}

.Heading,
.details {
  width: 90%;
  padding: 10px;
  margin: 10px;
  background-color: aliceblue;
  border-radius: 10px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);

  h4 {
    color: rgb(1, 65, 1);
  }
}

.location {
  color: rgb(203, 69, 69);
}

button {
  width: 80%;
  color: white;
  padding: 10px;
  border-radius: 50px;
  margin: 10px 0px;
}

button:hover {
  cursor: pointer;
  background-color: rgb(180, 180, 170);
}

.edit-btn {
  background-color: rgb(22, 221, 155);
}

.delete-btn {
  background-color: rgb(227, 14, 14);
}
</style>
