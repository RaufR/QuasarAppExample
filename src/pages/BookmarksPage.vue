<!--<template>-->
  <!--<div>-->
    <!--<div v-for="post in bookmarks" :key="post.id" style="margin-bottom: 20px;">-->
      <!--<PostCard :single-post="post" />-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--import  axios from "axios";-->
<!--import { db } from "../firebase/init";-->
<!--import PostCard from "../components/Business/PostCard";-->
<!--import { Notify } from 'quasar'-->
<!--export default {-->
  <!--name: "BookmarksPage",-->
  <!--components: {PostCard},-->
  <!--data() {-->
    <!--return {-->
      <!--bookmarks: []-->
    <!--}-->
  <!--},-->
  <!--async created() {-->
    <!--try {-->
      <!--const res = await db.collection('users').doc(this.$route.params.id).get();-->
      <!--const bookmarks = res.data().bookmarks;-->
      <!--bookmarks.forEach(bookmark => {-->
        <!--axios.get(`https://ideasjungle.com/node/get_post/?id=${bookmark}`)-->
          <!--.then((res) => {-->
            <!--this.bookmarks.push(res.data.post)-->
          <!--})-->
      <!--})-->
    <!--} catch (e) {-->
      <!--this.$router.push("/404")-->
    <!--}-->
  <!--},-->
  <!--async mounted() {-->

  <!--}-->
<!--}-->
<!--</script>-->

<!--<style>-->

<!--</style>-->
