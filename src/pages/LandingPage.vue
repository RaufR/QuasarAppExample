<template>
<div class="full-screen">
  <!--<img class="full-screen-img" src="../assets/book.jpg" alt="book cover page">-->
  <div class="overlay">
    <span>
      <h4>IDEAS JUNGLE</h4>
      <p>IDEA, BUSINESS AND MONEY</p>
    </span>
  </div>
</div>
</template>

<script>

export default {
  name: 'LandingPage',
  async created () {
  }
}
</script>

<style scoped>
.text {
  text-align: center;
}
.full-screen {
  height: 99vh;
  width: 100%;
}
  .full-screen-img {
    height: 100%;
    width: 100%;
  }
  .overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 50%;
  }
  h4, p {
    text-align: center;
    color: #fff;
  }
</style>
