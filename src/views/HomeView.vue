<template>
  <div class="container">
      <div class="header"> JNCoE Results Center </div>
      <div class="body"> 
        <div class="form-container">
          <div class="input-box">
              <input type="text" class="input-field" placeholder="Enter your Index Number" />
          </div>  
          <div class="buttonBox">
              <button type="submit" > Submit </button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>


</script>

<style lang="scss" scoped>
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 100%;
      min-height: 100vh;
      margin: 0;
      padding: 0;
    }

    .header{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 100px;
      color: #ffffff;
    }

    .input-box{
      display: flex;
      width: 100%;
      height: 40px;
    }

    .input-field{
      display: flex;
      color: #000000;
      border-radius: 5px;
      height: 100%;
      width:100%;
      border: none;
      padding-left: 10px;
      font-size: 16px;

    }

    .body{
      display: flex;
      flex-direction: row;
      width: 50%;
      align-items: center;
      justify-content: center;
    }

    .form-container{
      display: grid;
      grid-template-columns: 80% 20%;
      gap: 20px;
      height: 70%;
      width: 100%;
    }
    button{
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      background-color: #28DF99;
      border: none;
      border-radius: 5px;
      height: 100%;
      width:100%;
      font-size: 16px;
      font-weight: 500;
    }
    .button-box{
      display: flex;
      width: 100%;
      height: 40px;
    }

</style>
