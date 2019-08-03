<template>
  <div class="not-found">
    <div class="not-found-img">
      <img src="../assets/404.svg" alt="">
    </div>
    <button class="get-back-btn" @click="getBackToHomePage">Get back to Homepage</button>
  </div>
</template>

<script>
  export default {
    name: "Page404",
    data () {
      return {}
    },
    methods: {
      getBackToHomePage () {
        this.$router.push("/")
      }
    }
  }
</script>

<style scoped>
  .not-found {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .not-found-img {
    margin-top: -200px;
  }
  .get-back-btn {
    margin-top: 50px;
    border: none;
    outline: none;
    background: #101010;
    color: #fff;
    padding: 8px 15px;
    border-radius: 3px;
    font-size: 20px;
  }
</style>
