<template>
  <div class="back-sidebar"  @click="closeSidebar">
    <div class="main-sidebar">
      <div class="inner-sidebar" :class="isDarkModeOn ? 'dark' : 'light'">
        <div  class="signed-in-content">
          <!--<div class="profile">-->
            <!--<div class="img-box">-->
              <!--<img :src="user && user.photoURL" alt="">-->
            <!--</div>-->
            <!--<h1 class="profile-title">{{ user && user.displayName }}</h1>-->
          <!--</div>-->
          <div></div>


          <div class="hr"></div>
          <div class="dark-mode-settings">
            <span :class="!isDarkModeOn ? 'text-dark' : 'text-light'">Enable Dark Mode</span>
            <input @change="onDarkModeChange" id="dark-mode" type="checkbox" name="darkMode">
            <label for="dark-mode" class="header-dropdown-label"></label>
          </div>
          <div class="hr"></div>
          <!--<div class="route-links">-->
            <!--<router-link class="route-link" to="/business">Business</router-link>-->
            <!--<router-link class="route-link" to="/career">Career</router-link>-->
            <!--<router-link class="route-link" to="/start_up">Start Up</router-link>-->
            <!--<router-link class="route-link" to="/news">news</router-link>-->
            <!--<router-link class="route-link" to="/stock_market">Stock Market</router-link>-->
            <!--<router-link class="route-link" :to="`/bookmarks/${user.uid}`">Bookmarks</router-link>-->
            <!--<router-link class="route-link" :to="`/likes/${user.uid}`">Likes</router-link>-->
            <!--<div @click="logoutTheUser" class="route-link">Logout</div>-->
          <!--</div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import { fireBase, db } from "../firebase/init";
  export default {
    name: 'Sidebar',
    props: ['closeSidebar', 'onDarkModeChange', "isDarkModeOn"],
    data () {
      return {
        // email: null,
        // password: null,
        // user: null
      }
    },
    created() {
      // fireBase.auth().onAuthStateChanged(user => {
      //   if (user) this.user = user;
      // })
    },
    methods: {
      // registerUser() {
      //   let provider = new fireBase.auth.GoogleAuthProvider();
      //   fireBase.auth().signInWithPopup(provider).then(result => {
      //     if (result.additionalUserInfo.isNewUser) {
      //       db.collection('users').doc(result.user.uid).set({
      //         user: result.additionalUserInfo.profile,
      //         darkMode: false,
      //         bookmarks: [],
      //         likes: []
      //       }).then(() => {
      //         // this.$router.push('/')
      //       })
      //     } else {
      //       // this.$router.push('/')
      //     }
      //   }).catch(err => {
      //     console.log(err)
      //   })
      // },
      // registerUserWithFB() {
      //   //
      // },
      // registerUserWithTwitter() {
      //   //
      // },
      // logoutTheUser() {
      //   fireBase.auth().signOut().then(() => {
      //     this.user = null
      //   })
      // }
    }
  }
</script>

<style scoped>
  .back-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,.5);
    z-index: 100000;
    display: none;
  }
  .main-sidebar {
    max-width: 70%;
    height: 100vh;
    transform: translateX(-300px);
    transition: all .4s ease-in-out;
  }
  .inner-sidebar {
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow: auto;
  }
  .showBack {
    opacity: 1;
    display: block;
    transition: all .4s;
  }
  .openSide {
    transform: translateX(0px);
  }
  .closeSide {
    transform: translateX(300px);
  }
  #dark-mode {
    display: none;
  }
  .header-dropdown-label {
    display: inline-block;
    width: 2.2rem;
    height: .7rem;
    background: #ccc;
    border-radius: 10rem;
    position: relative;
    cursor: pointer;
    margin-top: 10px;
    margin-right: 50px;
  }
  .header-dropdown-label::before {
    content: "";
    position: absolute;
    top: -.3rem;
    left: 0;
    width: 1.3rem;
    height: 1.3rem;
    background: #101010;
    border-radius: 50%;
    box-shadow: 0 0 150px 0 rgba(0,0,0,.8);
    transition: all .4s ease-in-out;
  }
  #dark-mode:checked + .header-dropdown-label::before {
    left: 45%;
    background: #aaa;
  }
  .dark-mode-settings {
    display: flex;
    justify-content: space-between;
  }
  .dark-mode-settings span {
    color: #101010;
    font-size: 1rem;
    margin-left: 1rem;
  }
  .sign-in-options {
    margin-top: 30px;
  }
  .sign-in-options h1 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .sign-ins {
    width: 100%;
    height: auto;
  }
  .sign-in-wrapper {
    width: 100%;
    height: 80px;
    overflow: hidden;
  }
  .sign-in-wrapper img {
    width: 100%;
    height: 100%;
  }
  .profile {
    width: 100%;
    height: auto;
    overflow: hidden;
    padding: 20px;
  }
  .img-box {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 20px;
  }
  .img-box img {
    width: 100%;
    height: 100%;
  }
  .profile-title {
    font-size: 25px;
    font-weight: 700;
  }
  .route-links {
    width: 100%;
    min-height: calc(100vh - 350px);
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .route-link {
    font-size: 22px;
    margin-bottom: 20px;
  }
  .hr {
    width: 100%;
    height: 1px;
    background: #dadada;
    margin: 20px 0;
  }
  .route-link:last-child {
    margin-top: auto;
    color: red;
  }
</style>
