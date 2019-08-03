<!--<template>-->
  <!--<q-page>-->
    <!--<div class="posts-wrapper">-->
      <!--<h1 class="latest-post-heading">Latest posts</h1>-->
      <!--<div class="latest-posts">-->
        <!--<q-carousel-->
          <!--:easing="overshoot"-->
          <!--infinite-->
          <!--autoplay-->
          <!--arrows-->
        <!--&gt;-->
          <!--<q-carousel-slide v-for="post in latestPosts" :key="post.id">-->
            <!--<PostCardFullImage :post="post" />-->
          <!--</q-carousel-slide>-->
        <!--</q-carousel>-->
      <!--</div>-->
      <!--<h1 class="latest-post-heading">Recomandation posts</h1>-->
      <!--<div class="reco-posts">-->
        <!--<div v-for="post in recommandation" :key="post.id">-->
          <!--<PostCardFullImage :post="post" />-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</q-page>-->
<!--</template>-->

<!--<script>-->
<!--import { easing } from 'quasar'-->
<!--import axios from 'axios'-->
<!--import BookmarkModal from '../components/BookmarkModal'-->
<!--import ShareModal from '../components/ShareModal'-->
<!--import StockPageWidget from "../components/StockPageWidget";-->
<!--import PostCard from "../components/Business/PostCard";-->
<!--import PostCardFullImage from "../components/Business/PostCardFullImage";-->
<!--import PostCardColor from "../components/Business/PostCardColor";-->
<!--import { Notify } from 'quasar'-->

<!--export default {-->
  <!--name: 'StockMarketPage',-->
  <!--components: {PostCardColor, PostCardFullImage, PostCard, StockPageWidget, ShareModal, BookmarkModal},-->
  <!--data () {-->
    <!--return {-->
      <!--posts: [],-->
      <!--latestPosts: [], // 15 slider w70% h50% current-->
      <!--recommandation: [], // 10 w100% h50% img-card-->
      <!--editorsPick: [], // 15 color-card slider w100% h50%-->
      <!--popular: [], // 20 current,-->
      <!--more: [],-->
      <!--slide: 0,-->
      <!--autoplay: true,-->
      <!--overshoot: easing.overshoot,-->
      <!--colors: [-->
        <!--'primary',-->
        <!--'secondary',-->
        <!--'yellow',-->
        <!--'red',-->
        <!--'orange',-->
        <!--'grey-2'-->
      <!--],-->
      <!--modal: false,-->
      <!--thumbnailsHorizontal: false-->
    <!--}-->
  <!--},-->
  <!--async created() {-->
    <!--try {-->
      <!--const res = JSON.parse(localStorage.getItem("stock"))-->
      <!--res.data.posts.map((post, i) => {-->
        <!--if (i < 15) {-->
          <!--this.latestPosts.push(post)-->
        <!--} else if (i > 15 && i < 25) {-->
          <!--this.recommandation.push(post)-->
        <!--} else if (i > 25 && i < 40) {-->
          <!--this.editorsPick.push(post)-->
        <!--} else if (i > 40 && i < 60) {-->
          <!--this.popular.push(post)-->
        <!--} else if (i > 60 && i < 71) {-->
          <!--this.more.push(post)-->
        <!--}-->
      <!--})-->
    <!--} catch (e) {-->
      <!--this.$router.push("/404")-->
    <!--}-->
  <!--},-->
  <!--methods: {-->
    <!--changeToRed ($event) {-->
      <!--console.log($event.target.style.color = 'red')-->
    <!--},-->
    <!--openBookmarkModal () {-->
      <!--this.isModalOpen = true-->
    <!--},-->
    <!--closeModal () {-->
      <!--this.isModalOpen = false-->
    <!--},-->
    <!--openShareModal () {-->
      <!--this.isShareModalOpen = true-->
    <!--},-->
    <!--closeShareModal () {-->
      <!--this.isShareModalOpen = false-->
    <!--}-->
  <!--},-->
  <!--mounted() {-->
    <!--const el = document.querySelector(".dark")-->
    <!--if (el) {-->
      <!--const latestPosts = document.querySelector(".latest-posts");-->
      <!--latestPosts.style.background = "transparent"-->
    <!--}-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--</style>-->
