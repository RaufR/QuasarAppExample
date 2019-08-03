<template>
    <div>
      <div class="post-content">
        <h1 class="post-title" :style="titleFontSize">{{ post.title }}</h1>
        <h6 class="post-date">{{ post.date }}</h6>
        <div class="post-img">
          <img :src="post.thumbnail_images.medium_large.url"  alt="">
        </div>
        <div class="post-desc" :style="descFontSize" v-html="post.content"></div>
      </div>
      <!--Header-->
      <div class="post-header" :class="isHeaderShown ? 'headerShown' : null">
        <div class="post-header-wrapper">
          <div class="post-header-left">
            <div class="post-header-left-back-arrow">
              <i class="fas fa-arrow-left backArrow" @click="goBack"></i>
            </div>
            <div class="post-header-left-content">
              <p>Published In: {{ post.categories[0].slug }}</p>
              <p style="font-size: 13px;">{{ post.modified.split(" ")[0] }}</p>
            </div>
          </div>
          <div class="post-header-right">
            <div class="post-header-right-letters">
              <i class="fas fa-cogs" @click="changePopDown"></i>
            </div>
            <!--<div class="post-header-right-letters" v-if="!isThisPostBookmarked">-->
              <!--<i class="far fa-bookmark" @click="addToBookmark"></i>-->
            <!--</div>-->
            <!--<div class="post-header-right-letters" v-else>-->
              <!--<i class="far fa-bookmark" style="color: red;" @click="addToBookmark"></i>-->
            <!--</div>-->
            <div class="post-header-right-letters">
              <i class="fas fa-ellipsis-v" @click="changeDotsIcon"></i>
              <div class="share" :class="isShareOpen ? 'showShare' : null">
                <span @click="changeActionSheetStatus">Share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- PopDown -->
      <div class="pop-down" :class="isPopDownShown ? 'showPopDown' : null">
        <div class="pop-down-upper">
          <div class="pop-down-upper-icon-box">
            <i class="fas fa-font" @click="smallerFontSize"></i>
          </div>
          <div class="pop-down-upper-icon-box">
            <i class="fas fa-font fa-2x" @click="biggerFontSize"></i>
          </div>
        </div>
        <div id="dkm"  class="pop-down-dark">
          <div class="pop-down-dark-left">
            Dark mode
          </div>
          <div class="pop-down-dark-right">
            <q-toggle v-model="checked" @input="enableDarkMode"></q-toggle>
          </div>
        </div>
      </div>
      <!-- Action Sheet -->
      <q-action-sheet
        v-model="actionSheet"
        title=""
        @ok="onOk"
        :actions="[
      {
        label: 'Share',
        icon: 'share',
        color: 'primary'
      },

      // // optional separator
      // {},
      //
      // // continuing with other actions
      // {
      //   label: 'Play',
      //   icon: 'gamepad'
      // },
      // {
      //   label: 'Favorite',
      //   icon: 'favorite'
      // }
    ]"
      ></q-action-sheet>
    </div>
</template>

<script>
import axios from 'axios'
// import { db, fireBase } from '../firebase/init'
export default {
  name: 'post',
  // props: ['userInfo'],
  data () {
    return {
      content: '',
      post: {},
      posts: [],
      checked: false,
      isPopDownShown: false,
      isShareOpen: false,
      actionSheet: false,
      // user: {},
      titleFontSize: {
        fontSize: "20px"
      },
      descFontSize: {
        fontSize: "14px"
      },
      // isThisPostBookmarked: false,
      // userId: fireBase.auth().currentUser && fireBase.auth().currentUser.uid
    }
  },
  async created () {
    try {
      let vm = this
      const res = await axios.get(`https://ideasjungle.com/base/get_post/?id=${this.$route.params.id}`)
      vm.post = res.data.post
      if (this.$route.params.id) {
        this.isHeaderShown = true
      }
    } catch (err) {
      console.log(err)
    }
  },
  // mounted() {
  //   if (this.userId) {
  //     db.collection("users").doc(this.userId).onSnapshot(snapshot => {
  //       this.user = snapshot.data();
  //     })
  //   }
  // },
  methods: {

    changePopDown () {
      this.isPopDownShown = !this.isPopDownShown
    },

    changeDotsIcon () {
      this.isShareOpen = !this.isShareOpen
    },
    changeActionSheetStatus() {
      this.actionSheet = true;
    },
    biggerFontSize () {
      this.titleFontSize.fontSize = "30px"
      this.descFontSize.fontSize = "18px"
    },
    smallerFontSize () {
      this.titleFontSize.fontSize = "20px"
      this.descFontSize.fontSize = "14px"
    },
    enableDarkMode() {
          const mainElement = document.querySelector('body')
          const strongEl = document.querySelector('strong')
          const popdown = document.querySelector('.pop-down')
          if (this.checked) {
            mainElement.style.background = '#101010'
            mainElement.style.color = '#ffffff'
            strongEl.style.color = '#ee514b'
            popdown.style.background = '#101010'
            popdown.style.color = '#ffffff'
          } else {
            mainElement.style.background = '#ffffff'
            mainElement.style.color = '#101010'
            strongEl.style.color = '#ee514b'
            popdown.style.background = '#ffffff'
            popdown.style.color = '#101010'
          }
    },
    // async addToBookmark() {
    //   const res = await db.collection('users').doc(this.userId).get();
    //   const bookmarks = res.data().bookmarks;
    //   if (bookmarks.length > 0) {
    //     console.log(">0")
    //     const newBookArray = [...bookmarks, this.post.id]
    //     db.collection('users').doc(this.userId).update({
    //       bookmarks: newBookArray
    //     }).then(() => {
    //       this.isThisPostBookmarked = true
    //     })
    //   } else {
    //     const findTheBookmarked = bookmarks.filter(bookmark => bookmark === this.post.id)
    //     if (findTheBookmarked.length < 1) {
    //       const newBookArray = []
    //       newBookArray.push(this.post.id)
    //       db.collection('users').doc(this.userId).update({
    //         bookmarks: newBookArray
    //       }).then(() => {
    //         this.isThisPostBookmarked = true
    //       })
    //     } else {
    //       const newArray = bookmarks.filter(bookmark => bookmark !== this.post.id);
    //       db.collection('users').doc(this.userId).update({
    //         bookmarks: newArray
    //       }).then(() => {
    //         this.isThisPostBookmarked = false
    //       })
    //     }
    //   }
    // },
    goBack() {
      this.$router.go(-1)
      setTimeout(() => {
        var element_to_scroll_to = document.getElementById(`${this.post.id}`);
        element_to_scroll_to.scrollIntoView();
      }, 1000)
    }
  }
}
</script>

<style scoped>
  .post-header {
    width: 100%;
    height: 50px;
    background: #101010;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    color: #fff;
    display: none;
  }
  .post-header-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
  .post-header-left {
    width: 70%;
    height: 100%;
    display: flex;
  }
  .post-header-right {
    width: 30%;
    height: 100%;
    display: flex;
  }
  .post-header-left-back-arrow {
    width: 30px;
    height: 50px;
    display: flex;
    align-items: center;
  }
  .post-header-left-img {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
  }
  .post-header-left-img img {
    width: 80%;
    height: 80%;
  }
  .post-header-left-content {
    width: auto;
    height: 50px;
    font-size: 12px;
    text-align: left;
    padding-top: 16px;
  }
  .post-header-left-content p {
    line-height: 0;
  }
  .post-header-left-content p:first-child {
    text-transform: uppercase;
    color: #aaa;
  }
  .post-header-left-content p:last-child {
    font-size: 18px;
  }
  .post-header-right {
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .post-header-right-letters {
    margin-left: 20px;
  }
  .pop-down {
    position: fixed;
    top: 70px;
    right: 55px;
    background: #fff;
    border: 1px solid rgba(170,170,170, .5);
    box-shadow: 1px 1px 10px 0 rgba(0,0,0,.2);
    border-radius: 3px;
    z-index: 100000;
    display: none;
    transition: all .4s ease-in-out;
    color: #101010;
  }
  .pop-down-upper {
    width: 200px;
    display: flex;
    border-bottom: 1px solid rgba(170,170,170, .5);
  }
  .pop-down-upper-icon-box {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
  }
  .pop-down-upper-icon-box:first-child {
    border-right: 1px solid rgba(170,170,170, .5);
  }
  .headerShown {
    display: block !important;
  }
  .pop-down-dark {
    padding: 10px;
    display: flex;
  }
  .pop-down-dark-left {
    width: 70%;
  }
  .pop-down-dark-right {
    width: 30%;
  }
  .showPopDown {
    display: block;
  }
  .post-content {
    width: 100%;
    height: auto;
    padding: 8px;
  }
  .post-title {
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  .post-date {
    font-size: 18px;
    color: #aaa;
    margin-bottom: 20px;
  }
  .post-img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  .post-img img {
    width: 100%;
    height: 100%;
  }
  .post-desc {
    font-size: 20px;
  }
  .share {
    position: fixed;
    top: 55px;
    right: 5px;
    border: 1px solid rgba(170,170,170, .5);
    box-shadow: 1px 1px 10px 0 rgba(0,0,0,.2);
    width: 100px;
    padding: 10px;
    color: #101010;
    z-index: 1000000;
    background: #ffffff;
    border-radius: 3px;
    display: none;
  }
  .share span {
    font-size: 20px;
    font-weight: bold;
  }
  .showShare {
    display: block;
  }
</style>
