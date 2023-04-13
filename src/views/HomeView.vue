<template>
  <div class="container">
      <div class="header"> JNCoE Results Center </div>
      <div class="body"> 
        <div class="form-container">
          <div class="input-box">
              <input  type="text" class="input-field" placeholder="Enter your Index Number" v-model="indexNo" />
          </div>  
          <div class="buttonBox">
              <button type="submit" :disabled="indexNo.length < 6" @click="getResult"> Submit </button>
          </div>
        </div>
        <div v-if="fetchData" class="results-container">
          <div class="out-box">
            <div class="out-label"> Full Name   </div>
            <div class="out-result"> {{ results.fullName }}</div>
          </div>
          <div class="out-box">
            <div class="out-label"> Course  </div>
            <div class="out-result"> {{ results.course }}</div>
          </div>
          <div class="out-box">
            <div class="out-label"> NIC  </div>
            <div class="out-result"> {{ results.nic }}</div>
          </div>
          <div class="out-final-result"> {{ results.result }} </div>
        </div>
        <div class="not-found" v-if="error" >No results found.</div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      indexNo: '',
      results: [],
      fetchData : false,
      error:false,
    }
  },
  methods: {
    async getResult() {
      const response = await fetch(`http://localhost:8090/api/v1/result/${this.indexNo}`)
      const data = await response.json()
      this.results = data ? data : []
      if(data.message !== "No Index"){
        this.fetchData = true;
        this.error = false;
      }
      else{
        this.error= true;
        this.fetchData = false;
      }
      console.log(this.results);
    }
  }
}

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
      flex-direction: column;
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

    .buttonBox button:disabled {
      background-color: #999999;
      cursor: not-allowed;
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
      cursor: pointer;
    }
    .button-box{
      display: flex;
      width: 100%;
      height: 40px;
    }

    .results-container{
      display: flex ;
      flex-direction: column;
      width: 80%;
      margin-top:20px;
      padding: 20px;
      justify-content: center;
      align-items: center;
    }

    .out-box{
      display: grid;
      grid-template-columns: 50% 50%;
      width: 80%;
      margin-top: 10px;
    }

    .out-label{
      justify-content:left;
      align-items: left;
      display: flex;
      color:#ffffff;
      font-weight: bold;
    }

    .out-result{
      justify-content:left;
      align-items: left;
      display: flex;
      color:#ffffff;
      font-weight: bold;
    }

    .out-final-result{
      display: flex;
      background-color: rgb(0, 169, 242);
      align-items: center;
      justify-content:center;
      width: 100%;
      height: 30px;
      margin-top: 20px;
      font-weight: bold;
      border-radius: 5px;
    }

    .not-found{
      margin-top: 10%;
      color: #ffffff;
      font-weight: bold;
      font-size: 16px;
      background-color: #dfc428;
      /* padding: 10px; */
      width: 50%;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

</style>
