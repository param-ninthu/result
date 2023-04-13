<script setup>
import HomeView from './views/HomeView.vue';
</script>

<template>
  <main>
    <HomeView />
  </main>

</template>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@100;200;300;400;500;600&family=Poppins:wght@400;600;700;800&family=Prompt:wght@200;300;400;500;600;700;900&family=Roboto:wght@100;300;400;700;900&family=Rubik:wght@300;400;500;600;700;800;900&display=swap');

* {
  font-family:"Rubik", sans-serif;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-image: url('./assets/herobg.png');
  background-color: black; 
}
  main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

</style>
