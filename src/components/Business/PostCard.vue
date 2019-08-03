<template>
  <div style="margin: 0 5px;" :id="singlePost.id">
    <q-card inline class="q-ma-sm" width="100">
      <q-card-media>
        <router-link :to="postRoute">
          <img :src="singlePost.attachments.length === 0 ? require(`../../assets/idesjungle.jpg`) : singlePost.attachments[0].images.full.url">
        </router-link>
      </q-card-media>
      <q-card-title>
        <router-link :to="postRoute">
          {{singlePost.title}} <br> <span style="font-size: 0.8rem;font-weight: 400;"><span>Published: </span>{{singlePost.modified.split(" ")[0]}}</span><br>
          <span style="font-size: 15px;color: #aaa;">{{ singlePost.categories[0].title.toUpperCase() }}</span>
        </router-link>
      </q-card-title>
      <q-card-actions align="around">
        <q-btn v-on:click="changeToRed()" flat round :color="clickEvent.color" icon="favorite" />
        <q-btn flat round color="faded" :color="clickEvent.color2" icon="bookmark" @click="addToBookmark" />
        <q-btn flat round color="primary" icon="share" @click="actionSheet = true" />
        <router-link :to="postRoute">
          <q-btn flat color="primary">Read More</q-btn>
        </router-link>
      </q-card-actions>
    </q-card>
    <q-action-sheet
      v-model="actionSheet"
      title="Action Sheet"
      :actions="[
          {
            label: 'Delete',
            icon: 'delete',
            color: 'red',
          },
          {
            label: 'Share',
            icon: 'share',
            color: 'primary'
          },
          {
            label: 'Play',
            icon: 'gamepad'
          },
          {
            label: 'Favorite',
            icon: 'favorite'
          }
        ]"
    />
  </div>
</template>

<script>
import {fireBase, db} from "../../firebase/init";

export default {
  props: ['singlePost', 'stock'],
  name: "PostCard",
  components: {
  },
  data () {
    return {
      postRoute: `/post/${this.singlePost.id}`,
      clickEvent: {
        color: 'faded',
        color2: 'faded'
      },
      userId: fireBase.auth().currentUser && fireBase.auth().currentUser.uid,
      user: {},
      liked: false,
      isThisPostBookmarked: false,
      actionSheet: false
    }
  },
  async created () {
  },
  mounted() {
    if (this.userId) {
      db.collection("users").doc(this.userId).onSnapshot(snapshot => {
        this.user = snapshot.data();
        const isPostLiked = snapshot.data().likes.filter(like => like === this.singlePost.id);
        if (isPostLiked.length > 0) {
          this.clickEvent.color = "red";
          this.liked = true;
        }
        const isPostBookmarked = snapshot.data().bookmarks.filter(bookmark => bookmark === this.singlePost.id);
        if (isPostBookmarked.length > 0) {
          this.clickEvent.color2 = "red";
          this.isThisPostBookmarked = true;
        }
      })
    }
  },
  methods: {
    async changeToRed () {
      if (this.userId) {
        if (this.liked) {
          const res = await db.collection('users').doc(this.userId).get();
          const likes = res.data().likes;
          const filteredPosts = likes.filter(like => like !== this.singlePost.id)
          db.collection('users').doc(this.userId).update({
            likes: filteredPosts
          }).then(() => {
            this.clickEvent.color = 'faded'
            this.liked = false
          })
        } else {
          const res = await db.collection('users').doc(this.userId).get();
          const likes = res.data().likes;
          if (likes.length > 0) {
            console.log(">0")
            const newLikeArray = [...likes, this.singlePost.id]
            db.collection('users').doc(this.userId).update({
              likes: newLikeArray
            }).then(() => {
              this.clickEvent.color = 'red'
              this.liked = true
            })
          } else {
            const findTheLiked = likes.filter(like => like === this.singlePost.id)
            if (findTheLiked.length < 1) {
              const newLikeArray = []
              newLikeArray.push(this.singlePost.id)
              db.collection('users').doc(this.userId).update({
                likes: newLikeArray
              }).then(() => {
                this.clickEvent.color = 'red'
                this.liked = true
              })
            } else {
              const newArray = likes.filter(like => like !== this.singlePost.id);
              db.collection('users').doc(this.userId).update({
                likes: newArray
              }).then(() => {
                this.clickEvent.color = 'red'
                this.liked = true
              })
            }
          }
        }
      }
    },
    async addToBookmark() {
      if (this.userId) {
        if (this.isThisPostBookmarked) {
          const res = await db.collection('users').doc(this.userId).get();
          const bookmarks = res.data().bookmarks;
          const filteredPosts = bookmarks.filter(bookmark => bookmark !== this.singlePost.id)
          db.collection('users').doc(this.userId).update({
            bookmarks: filteredPosts
          }).then(() => {
            this.clickEvent.color2 = 'faded'
            this.isThisPostBookmarked = false
          })
        } else {
          const res = await db.collection('users').doc(this.userId).get();
          const bookmarks = res.data().bookmarks;
          if (bookmarks.length > 0) {
            console.log(">0")
            const newBookArray = [...bookmarks, this.singlePost.id]
            db.collection('users').doc(this.userId).update({
              bookmarks: newBookArray
            }).then(() => {
              this.isThisPostBookmarked = true
              this.clickEvent.color2 = "red"
            })
          } else {
            const findTheBookmarked = bookmarks.filter(bookmark => bookmark === this.singlePost.id)
            if (findTheBookmarked.length < 1) {
              const newBookArray = []
              newBookArray.push(this.singlePost.id)
              db.collection('users').doc(this.userId).update({
                bookmarks: newBookArray
              }).then(() => {
                this.isThisPostBookmarked = true
                this.clickEvent.color2 = "red"
              })
            } else {
              const newArray = bookmarks.filter(bookmark => bookmark !== this.singlePost.id);
              db.collection('users').doc(this.userId).update({
                bookmarks: newArray
              }).then(() => {
                this.isThisPostBookmarked = false
                this.clickEvent.color2 = "red"
              })
            }
          }
        }
      }
    }
  }
}
</script>

<style>
  a {
    color: inherit;
    text-decoration: none;
  }
  .q-card {
    width: 100%;
    height: 450px;
    border: 1px solid rgba(255,255,255,.2);
    margin: 0;
    overflow: hidden;
  }
  .q-card-media {
    height: 50%;
  }
  .q-card-primary {
    padding: 0;
  }
  .q-card-title {
    font-size: 20px;
    font-weight: bold;
    line-height: 1.8rem;
    height: 115px;
    overflow: hidden;
  }
  .q-card-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .q-card-actions {
    padding: 0;
  }
</style>
