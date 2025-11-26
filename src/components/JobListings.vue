<template>
  <section>
    <div class="content">
      <h1>Browse Jobs</h1>
      <div class="grid-template">
        <JobListing
          v-for="job in props.jobs.slice(0, limit || props.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>
  <section class="buttonContent">
    <RouterLink to="/jobs" class="viewButton" v-if="showButton"
      >View All Jobs</RouterLink
    >
  </section>
</template>
<script setup>
import JobListing from "@/components/JobListing.vue";
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

const props=defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
  jobs: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px solid aliceblue;
  border-radius: 10px;
  background-color: aliceblue;
  padding: 0 10px;

  h1 {
    text-align: center;
  }
}

.grid-template {
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
}

.buttonContent {
  display: flex;
  justify-content: center;
}

.viewButton {
  width: 100px;
  border: 1px solid black;
  background-color: aquamarine;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  padding: 10px;
  margin: 10px;
  justify-content: center;
  align-items: center;
}

.viewButton:hover {
  background-color: aliceblue;
}
</style>
