<script setup>
</script>

<template>
  <div class="container">
   <div class="header" > JNCoE Results </div>
   <form>
    <div class="form-element"> 
      <div> Index No </div>
      <input type="text" placeholder="Enter Index No" />
    </div>
   </form>
  </div>
</template>

<style lang="scss" scoped>
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 100%;
    }

    .header{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 100px;
      background-color: #000000;
      color: #ffffff;
    }

    .form-element{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100px;
      color: #ffffff;
    }

</style>
