<template>
  <div id="q-app">
      <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {}
    }
  },
  created(){
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      window.open = cordova.InAppBrowser.open;
    }
  },
  }
  methods: {
    // swipeToRight() {
    //   const fullPath = this.$route.fullPath;
    //   switch (fullPath) {
    //     case "/":
    //       return this.$router.push("/business")
    //     case "/business":
    //       return this.$router.push("/career")
    //     case "/career":
    //       return this.$router.push("/start_up")
    //     case "/start_up":
    //       return this.$router.push("/news")
    //     case "/news":
    //       return this.$router.push("/stock_market")
    //     case "/stock_market":
    //       return this.$router.push("/business")
    //   }
    // }
    // ,swipeToLeft() {
    //   const fullPath = this.$route.fullPath;
    //   switch (fullPath) {
    //     case "/":
    //       return this.$router.push("/stock_market")
    //     case "/business":
    //       return this.$router.push("/stock_market")
    //     case "/career":
    //       return this.$router.push("/business")
    //     case "/start_up":
    //       return this.$router.push("/career")
    //     case "/news":
    //       return this.$router.push("/start_up")
    //     case "/stock_market":
    //       return this.$router.push("/news")
    //   }
    // }
  // },
  // destroyed() {
  //   localStorage.removeItem("isLoaded")
  // }
}
</script>

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css');

  a:hover {
    color: inherit;
  }

  .page {
    position: fixed;
    width: inherit;
  }

  @media only screen and (max-width: 755px) {
    .modal-content {
      width: 90% !important;
      height: auto !important;
    }
  }

  .openSidebar {
    transform: translateX(0) !important;
  }

  .closeSidebar {
    transform: translateX(-300px) !important;
  }
  .text-dark {
    color: #101010;
  }
  .text-light {
    color: #ffffff;
  }
  .dark {
    background: #101010 !important;
    color: #ffffff !important;
  }
  .light {
    background: #ffffff !important;
    color: #101010 !important;
  }
  .q-tabs-head {
    background: #101010 !important;
  }
  .q-card-title {
    height: auto !important;
  }
  .owl-carousel > .owl-item .active {
    width: 90% !important;
  }
  .posts-wrapper {
    width: 100%;
    height: auto;
    padding: 10px;
  }
  .latest-posts {
    width: 100%;
    height: auto;
    margin: 0 auto;
    background: #f5f5f5;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .latest-post-heading {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    margin-left: 5%;
  }
  .reco-posts {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  .editors-posts {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  .popular-posts {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  .q-card {
    border-radius: 5px;
  }
  .q-carousel-right-arrow,
  .q-carousel-left-arrow{
    width: 75px;
    height: 175px;
    border-radius: 5px;
    color: #fff;
    margin-top: -50px;
  }
  .q-carousel-right-arrow .q-icon {
    color: #fff;
    font-size: 50px;
  }
  .q-carousel-left-arrow .q-icon {
    color: #fff;
    font-size: 50px;
  }
  .editors-posts .q-carousel-left-arrow,
  .editors-posts .q-carousel-right-arrow{
    background: #67b367;
    opacity: .5;
  }
  .q-carousel-slide {
    padding: 0;
  }
  .q-tabs-head {
    height: 60px;
  }
  .q-tab-label {
    margin-top: 20px;
  }
</style>
