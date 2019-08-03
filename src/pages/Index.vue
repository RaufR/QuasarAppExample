<template>
  <div class="main">
    <div class="first">
      <img src="../assets/idesjungle.jpg" alt="" style="width: 100%;height: 100%;object-fit: cover;" class="loader-img">
      <h1 class="loader-heading">Ideas Jungle</h1>
    </div>
    <h1 class="latest-post-heading">Latest Posts</h1>
    <div class="latest-posts">
      <q-carousel
        :easing="overshoot"
        infinite
        autoplay
        arrows
        animation
      >
        <q-carousel-slide v-for="post in latestPosts" :key="post.id">
          <PostCardFullImage :post="post" />
        </q-carousel-slide>
      </q-carousel>
    </div>
    <h1  class="latest-post-heading">Recomandation posts</h1>
    <div class="reco-posts">
      <div v-for="post in recommendedPost" :key="post.id">
        <PostCardColor color="teal-6" :post="post" />
      </div>
    </div>

    <h1 class="latest-post-heading">Editors pick</h1>
    <div class="reco-posts">
      <div v-for="post in editorPosts" :key="post.id">
        <PostCardColor color="amber-8" :post="post" />
      </div>
    </div>
    <h1 class="latest-post-heading">More For you</h1>
    <div class="reco-posts">
      <div v-for="post in morePosts" :key="post.id">
        <PostCardFullImage :post="post" />
      </div>
    </div>
    <!--<div class="last">-->
      <!--<h1 style="font-size: 30px;font-weight: bold;margin-bottom: 20px;">Latest posts</h1>-->
      <!--<div class="reco-posts">-->
        <!--<div v-for="post in latestPosts" :key="post.id">-->
          <!--<PostCardFullImage :post="post" />-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
      <!--<h1 style="font-size: 30px;font-weight: bold;margin-bottom: 20px; ">Recommended posts</h1>-->
      <!--<div class="editors-posts" style="background-color: aliceblue; padding: 0; margin: 0; width: 100%">-->
        <!--<q-carousel>-->
          <!--<q-carousel-slide v-for="post in recommended" :key="post.id">-->
            <!--<PostCardColor :post="post" />-->
          <!--</q-carousel-slide>-->
        <!--</q-carousel>-->
      <!--</div>-->
      <!--<h1 style="font-size: 30px;font-weight: bold;margin-bottom: 20px;">Popular posts</h1>-->
      <!--<div class="popular-posts">-->
        <!--<div v-for="post in popular" :key="post.id" style="margin-bottom: 20px;">-->
          <!--<post-card :singlePost="post" />-->
        <!--</div>-->
      <!--</div>-->
    </div>

</template>

<style>
</style>

<script>
import axios from "axios"
import PostCard from "../components/Business/PostCard";
import PostCardFullImage from "../components/Business/PostCardFullImage";
import PostCardColor from "../components/Business/PostCardColor";
import { Notify } from 'quasar'
import { LocalStorage, SessionStorage } from 'quasar'

export default {
  name: 'PageIndex',
  components: {
    PostCardColor,
    PostCardFullImage,
    PostCard
  },
  data () {
    return {
      totalPosts: [],
      latestPosts: [],
      recommendedPost: [],
      editorPosts: [],
      morePosts: [],
      isLoadedFirstTime: true,
    }
  },
  filters: {
    titleSnippet: (value) => {
      return value.slice(0, 30) + ' ...'
    },
    descriptionSnippet: (value) => {
      return value.slice(3, 50) + ' ...'
    }
  },
  mounted () {
    const f = document.querySelector('.first');
    const l = document.querySelector('.last');
    if (this.isLoadedFirstTime) {
      localStorage.setItem("isLoaded", 'true');
      setTimeout(() => {
        f.style.height = '200px'
        l.style.top = '200px'
      }, 5000)
      l.onscroll = () => {
        f.style.height = "0px"
        f.style.overflow = "hidden"
        l.style.top = '60px'
        l.style.zIndex = "1000"
      }
    } else {
      f.style.height = "0px"
      f.style.overflow = "hidden"
      l.style.top = '60px'
      l.style.zIndex = "1000"
    }
  },
  async created() {
    try {
       this.isLoadedFirstTime = false
      const business = await axios.get("https://ideasjungle.com/base/get_category_posts/?category_id=44&count=70")
       localStorage.setItem("business", JSON.stringify(business))
      this.totalPosts = business.data.posts;
       console.log("totalpost", this.totalPosts)
      this.latestPosts = this.totalPosts.slice(0,9);
      this.recommendedPost = this.totalPosts.slice(10, 14);
      this.editorPosts = this.totalPosts.slice(15, 20);
      this.morePosts = this.totalPosts.slice(21 )

      // const carrer = await axios.get("https://ideasjungle.com/node/get_category_posts/?category_id=47&count=25")
      // localStorage.setItem("carrer", JSON.stringify(carrer))
      // this.recommended = carrer.data.posts;
      // const news = await axios.get("https://ideasjungle.com/node/get_category_posts/?category_id=51&count=25")
      // localStorage.setItem("news", JSON.stringify(news))
      // this.popular = news.data.posts;
      // console.log(news.data.posts[0])

      // Save to Localstorage
      // const business1 = await axios.get("https://ideasjungle.com/base/get_category_posts/?category_id=44&count=-1")
      // localStorage.setItem("business", JSON.stringify(business1))
      // const news1 = await axios.get("https://ideasjungle.com/node/get_category_posts/?category_id=51&count=70")
      // localStorage.setItem("news", JSON.stringify(news1))
      // const start = await axios.get("https://ideasjungle.com/node/get_category_posts/?category_id=54&count=70")
      // localStorage.setItem("start", JSON.stringify(start))
      // const stock = await axios.get("https://ideasjungle.com/node/get_category_posts/?category_id=48&count=70")
      // localStorage.setItem("stock", JSON.stringify(stock))
    } catch (e) {
      // this.$router.push("/404")
    }
  },
  destroyed() {
  }
}
</script>

<style lang="stylus">
  * {
    text-decoration: none;
  }
  .card-examples
    .q-card
      width 50%
    .bigger
      width 450px
      max-width 90vw
    @media (max-width $breakpoint-xs-max)
      .q-card
        width 100%
  .main {
    width:100%;
    position relative;
  }
  .first {
    background: transparent;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    z-index: 100000;
    transition: all 1s ease-in-out;
  }
  .last {
    position: fixed;
    top: 100vh;
    left:0;
    width: 100%;
    height: 100vh;
    z-index: 100000;
    transition: all 1s ease-in-out;
    padding:10px 10px 120px 10px;
    overflow: auto;
    background #fff;
  }
  .loader-img {
    width: 100%;
    height: 100%;
    object-fit cover;
  }
  .loader-heading {
    position absolute;
    width:50%;
    top: 40%;
    left: 70%;
    transform translate( -50%, -50%);
    color: #fff;
    animation: animeText 3s ease-in-out;
    font-weight bold;
    font-size: 4rem;
  }

  @keyframes animeText {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1.5)
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1)
    }
  }
</style>
