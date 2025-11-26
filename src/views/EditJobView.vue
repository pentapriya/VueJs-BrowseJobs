<template>
  <div class="body">
    <div class="container">
      <h1>Edit Job</h1>
      <form v-on:submit="updateForm">
        <label>Job Type</label>
        <select v-model="form.type" name="type" required>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>
        <label>Job Listing Name</label>
        <input
          type="text"
          placeholder="eg. Beautiful apartment in Miami"
          v-model="form.title"
          name="name"
          required
        />
        <label>Description</label>
        <textarea
          name="description"
          v-model="form.description"
          required
        ></textarea>
        <label>Salary</label>
        <select name="salary" v-model="form.salary" required>
          <option value="Full-Time">under $50k</option>
          <option value="$50k - $60k">$50k - $60k</option>
          <option value="$60k - $70k">$60k - $70k</option>
          <option value="$70k - $80k">70k - $80k</option>
          <option value="$80k - $90k">$80k - $90k</option>
          <option value="$90k - $100k">$90k - $100k</option>
          <option value="$100k - $125k">$100k - $125k</option>
          <option value="$125k - $150k">$125k - $150k</option>
          <option value="$150k - $175k">$150k - $175k</option>
          <option value="$175k - $200k">$175k - $200k</option>
        </select>
        <label>Location</label>
        <input
          type="text"
          placeholder="Company Location"
          name="location"
          v-model="form.location"
          required
        />
        <h2>Company Info</h2>
        <label>Company Name</label>
        <input
          type="text"
          placeholder="Company Name"
          name="name"
          v-model="form.company.name"
          required
        />
        <label>Company Description</label>
        <textarea
          placeholder="What does your company do"
          name="description"
          v-model="form.company.description"
          required
        ></textarea>
        <label>Contact Email</label>
        <input
          type="email"
          placeholder="Email address for applicants"
          name="contactEmail"
          v-model="form.company.contactEmail"
          required
        />
        <label>Contact Phone</label>
        <input
          type="text"
          placeholder="Optional phone for applicants"
          name="contactPhone"
          v-model="form.company.contactPhone"
        />
        <button type="submit">Update Form</button>
      </form>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const router = useRouter();
const toast = useToast();

    const route = useRoute();
    const Id = route.params.id;

const form = reactive({
  type: "Full-Time",
  title: "",
  description: "",
  salary: "",
  location: "",
  company: {
    name: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
  },
});

const updateForm = async (e) => {
  try {
    e.preventDefault();
    const newJob = {
      type: form.type,
      title: form.title,
      description: form.description,
      salary: form.salary + " per annum",
      location: form.location,
      company: {
        name: form.company.name,
        description: form.company.description,
        contactEmail: form.company.contactEmail,
        contactPhone: form.company.contactPhone,
      },
    };
    const response = await axios.put(`http://localhost:5000/jobs/${Id}`, newJob);
    toast.success("Job is Updated successfully");
    router.push(`/jobs/${response.data.id}`);
  } catch (e) {
    console.log(e);
  }

  
};

onMounted(async () => {
    const response = await axios.get(`http://localhost:5000/jobs/${Id}`);
    const jobData = response.data;
    console.log("id",Id,"response",jobData)
    form.type = jobData.type,
      form.title = jobData.title,
      form.description = jobData.description,
      form.salary = jobData.salary,
      form.location = jobData.location,
      form.company.name = jobData.company.name,
      form.company.description = jobData.company.description,
      form.company.contactEmail = jobData.company.contactEmail,
      form.company.contactPhone = jobData.company.contactPhone;
  });
</script>
<style scoped>
.body {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  background-color: bisque;
  margin: 10px;
  padding: 10px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
}

input {
  height: 30px;
  padding: 2px;
}

button {
  height: 50px;
  width: 20%;
  border-radius: 20px;
  margin-left: 250px;
}

button:hover {
  cursor: pointer;
  background-color: rgb(49, 171, 130);
}

select {
  height: 30px;
}

label {
  font-weight: 600;
}

textarea {
  height: 100px;
}
</style>
