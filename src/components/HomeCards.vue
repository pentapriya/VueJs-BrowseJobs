<template>
    <div class="homeCard">
    <Card title="For Developers" subTitle="Browse our vue jobs and start your career today" jobTags="Browse Jobs" anchorLink="browsejobs.html"/>
<Card title="For Employers" subTitle="List your jobs to find the perfect developer for the role" jobTags="Add Jobs" anchorLink="browsejobs.html" bg="#69e37a"/>
</div></template>

<script setup>

    import Card from '@/components/Card.vue';</script>

<style scoped>
.homeCard{
    
    height:20%;
    display: grid;
    grid-template-columns: 5fr 5fr;
    gap:10px;
}

</style>