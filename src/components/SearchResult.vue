<template>
  <q-page class="flex flex-center">
    <div v-for="(post, i) in posts" :key="i">
      <PostCard :singlePost="post" />
    </div>
  </q-page>
</template>

<script>
  import axios from "axios";
  import PostCard from "./Business/PostCard";

  export default {
    name: "SearchResult",
    components: {PostCard},
    data() {
      return {
        posts: null
      }
    },
    async created() {
      const param = this.$route.params.search;
      const res = await axios(`https://ideasjungle.com/base/get_search_results/?search=${param}`)
      this.posts = res.data.posts;
    }
  }
</script>

<style>
</style>
