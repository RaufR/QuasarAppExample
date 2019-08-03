<template>
  <div :id="post.id">
    <q-card style="margin-bottom: 20px;height: 300px; border-radius: 10px"  inline class="q-ma-sm">
      <q-card-media style="height: 86%;">
        <img :src="post.attachments.length === 0 ? require(`../../assets/idesjungle.jpg`) : post.attachments[0].images.full.url">
        <q-card-title slot="overlay">
          {{ post.title }}
          <span slot="subtitle">{{ post.date }}</span>
        </q-card-title>
      </q-card-media>
      <q-card-actions align="around">
        <!--<q-btn flat round icon="favorite" :color="clickEvent.color" @click="changeToRed" />-->
        <!--<q-btn flat round color="faded" icon="bookmark" :color="clickEvent.color2" @click="addToBookmark" />-->
        <q-btn flat round color="primary" icon="share" @click="actionSheet = true" />
        <router-link :to="`/post/${this.post.id}`">
          <q-btn flat color="secondary">Read More</q-btn>
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
//import {fireBase, db} from "../../firebase/init";
export default {
  name: "PostCardFullImage",
  props: ["post"],
  data() {
    return {
      clickEvent: {
        color: 'faded',
        color2: 'faded'
      },
      // userId: fireBase.auth().currentUser && fireBase.auth().currentUser.uid,
      //user: {},
      liked: false,
      isThisPostBookmarked: false,
      actionSheet: false
    }
  },
  mounted() {
    // console.log(this.userId)
    // if (this.userId) {
    //   db.collection("users").doc(this.userId).onSnapshot(snapshot => {
    //     this.user = snapshot.data();
    //     const isPostLiked = snapshot.data().likes.filter(like => like === this.post.id);
    //     if (isPostLiked.length > 0) {
    //       this.clickEvent.color = "red";
    //       this.liked = true;
    //     }
    //     const isPostBookmarked = snapshot.data().bookmarks.filter(bookmark => bookmark === this.post.id);
    //     if (isPostBookmarked.length > 0) {
    //       this.clickEvent.color2 = "red";
    //       this.isThisPostBookmarked = true;
    //     }
    //   })
    // }
  },
  methods: {
    // async changeToRed () {
    //   if (this.liked) {
    //     const res = await db.collection('users').doc(this.userId).get();
    //     const likes = res.data().likes;
    //     const filteredPosts = likes.filter(like => like !== this.post.id)
    //     db.collection('users').doc(this.userId).update({
    //       likes: filteredPosts
    //     }).then(() => {
    //       this.clickEvent.color = 'faded'
    //       this.liked = false
    //     })
    //   } else {
    //     const res = await db.collection('users').doc(this.userId).get();
    //     const likes = res.data().likes;
    //     if (likes.length > 0) {
    //       console.log(">0")
    //       const newLikeArray = [...likes, this.post.id]
    //       db.collection('users').doc(this.userId).update({
    //         likes: newLikeArray
    //       }).then(() => {
    //         this.clickEvent.color = 'red'
    //         this.liked = true
    //       })
    //     } else {
    //       const findTheLiked = likes.filter(like => like === this.post.id)
    //       if (findTheLiked.length < 1) {
    //         const newLikeArray = []
    //         newLikeArray.push(this.post.id)
    //         db.collection('users').doc(this.userId).update({
    //           likes: newLikeArray
    //         }).then(() => {
    //           this.clickEvent.color = 'red'
    //           this.liked = true
    //         })
    //       } else {
    //         const newArray = likes.filter(like => like !== this.post.id);
    //         db.collection('users').doc(this.userId).update({
    //           likes: newArray
    //         }).then(() => {
    //           this.clickEvent.color = 'red'
    //           this.liked = true
    //         })
    //       }
    //     }
    //   }
    // },
    // async addToBookmark() {
    //   if (this.isThisPostBookmarked) {
    //     const res = await db.collection('users').doc(this.userId).get();
    //     const bookmarks = res.data().bookmarks;
    //     const filteredPosts = bookmarks.filter(bookmark => bookmark !== this.post.id)
    //     db.collection('users').doc(this.userId).update({
    //       bookmarks: filteredPosts
    //     }).then(() => {
    //       this.clickEvent.color2 = 'faded'
    //       this.isThisPostBookmarked = false
    //     })
    //   } else {
    //     const res = await db.collection('users').doc(this.userId).get();
    //     const bookmarks = res.data().bookmarks;
    //     if (bookmarks.length > 0) {
    //       console.log(">0")
    //       const newBookArray = [...bookmarks, this.post.id]
    //       db.collection('users').doc(this.userId).update({
    //         bookmarks: newBookArray
    //       }).then(() => {
    //         this.isThisPostBookmarked = true
    //         this.clickEvent.color2 = "red"
    //       })
    //     } else {
    //       const findTheBookmarked = bookmarks.filter(bookmark => bookmark === this.post.id)
    //       if (findTheBookmarked.length < 1) {
    //         const newBookArray = []
    //         newBookArray.push(this.post.id)
    //         db.collection('users').doc(this.userId).update({
    //           bookmarks: newBookArray
    //         }).then(() => {
    //           this.isThisPostBookmarked = true
    //           this.clickEvent.color2 = "red"
    //         })
    //       } else {
    //         const newArray = bookmarks.filter(bookmark => bookmark !== this.post.id);
    //         db.collection('users').doc(this.userId).update({
    //           bookmarks: newArray
    //         }).then(() => {
    //           this.isThisPostBookmarked = false
    //           this.clickEvent.color2 = "red"
    //         })
    //       }
    //     }
    //   }
    // }
  }
}
</script>
