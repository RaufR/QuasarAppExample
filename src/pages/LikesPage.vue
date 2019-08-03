<!--<template>-->
  <!--<div>-->
    <!--<div v-for="post in likes" :key="post.id" style="margin-bottom: 20px;">-->
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
    <!--name: "LikesPage",-->
    <!--components: {PostCard},-->
    <!--data() {-->
      <!--return {-->
        <!--likes: []-->
      <!--}-->
    <!--},-->
    <!--async created() {-->
      <!--try {-->
        <!--const res = await db.collection('users').doc(this.$route.params.id).get();-->
        <!--const likes = res.data().likes;-->
        <!--likes.forEach(like => {-->
          <!--axios.get(`https://ideasjungle.com/node/get_post/?id=${like}`)-->
            <!--.then((res) => {-->
              <!--this.likes.push(res.data.post)-->
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
