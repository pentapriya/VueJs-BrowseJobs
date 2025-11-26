<template>
    <section>
    <b>404 Not Found</b>
    <p>This page does not exist</p>
    <RouterLink to="/" class="back">Back</RouterLink>
    </section>
</template>

<style scoped>
section{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    
}

.back{
   border:1px solid black;
    border-radius: 10px;
    padding:6px 10px;
    margin:5px;
    background-color: cadetblue;
    text-decoration: none;
}
</style>