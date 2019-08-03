<template>
  <q-layout view="lHh Lpr lFf">
    <router-link to="/">
      <q-btn
        color="red-8"
        class="fixed"
        icon="home"
        style="top: 97%; left: 50%;z-index: 20000;transform: translate(-50%, -50%);"
      />
    </router-link>
    <sidebar :closeSidebar="closeSidebar" :onDarkModeChange="onDarkModeChange" :isDarkModeOn="isDarkModeOn" />
    <q-layout-header>
      <q-toolbar color="dark">
        <q-toolbar-title class="text-center" @click="$ref.drawer.open()">
          <i class="fas fa-bars hamburger" @click="openSidebar"></i>
          <i class="fas fa-search" @click="openSearchField"></i>
          <div class="search">
            <form @submit.prevent="searchFormSubmit" class="search-form">
              <input type="text" name="search" placeholder="Search..." v-model="search">
              <button type="submit">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <!--Here will page content go-->
    <q-page-container>
      <router-view class="q-py-sm" />
    </q-page-container>
      <!--<q-layout-footer class="fixed-bottom">-->
        <!--<q-tabs class="shadow-up-2" align="justify">-->
          <!--<q-route-tab-->
            <!--name="businessTab"-->
            <!--to="/business"-->
            <!--exact-->
            <!--slot="title"-->
            <!--label="Business"-->
          <!--/>-->
          <!--<q-route-tab-->
            <!--name="careerTab"-->
            <!--to="/career"-->
            <!--exact-->
            <!--slot="title"-->
            <!--label="Career"-->
          <!--/>-->
          <!--<q-route-tab-->
            <!--name="startUpTab"-->
            <!--to="/start_up"-->
            <!--exact-->
            <!--slot="title"-->
            <!--label="Start Up"-->
          <!--/>-->
          <!--<q-route-tab-->
            <!--name="newsTab"-->
            <!--to="/news"-->
            <!--exact-->
            <!--slot="title"-->
            <!--label="News"-->
          <!--/>-->
          <!--<q-route-tab-->
            <!--name="stockMarketTab"-->
            <!--to="/stock_market"-->
            <!--exact-->
            <!--slot="title"-->
            <!--label="Stock Market"-->
          <!--/>-->
        <!--</q-tabs>-->
      <!--</q-layout-footer>-->
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import Sidebar from "./Sidebar";

export default {
  name: 'MyLayout',
  components: {Sidebar},
  props: ['singlePost'],
  data () {
    return {
      isDarkModeOn: false,
      isSearchModalOpen: false,
      search: null,
      paramId: null
    }
  },
  methods: {
    openURL,
    openHeaderSettings () {
      const el = document.querySelector('.header-dropdown')
      el.classList.toggle('open-header-dropdown')
    },
    onDarkModeChange () {
      const el = document.querySelector('#dark-mode')
      const mainElement = document.querySelector('body')
      const latestPosts = document.querySelector(".latest-posts");
      if (el.checked) {
        mainElement.style.background = '#313538'
        mainElement.style.color = '#ffffff'
        latestPosts.style.background = "transparent"
        this.isDarkModeOn = true
      } else {
        mainElement.style.background = '#ffffff'
        mainElement.style.color = '#101010'
        latestPosts.style.background = "#f5f5f5"
        this.isDarkModeOn = false
      }
    },
    openSidebar () {
      const a = document.querySelector('.main-sidebar')
      const b = document.querySelector('.back-sidebar')
      b.style.display = 'block'
      setTimeout(() => {
        a.classList.remove('closeSidebar')
        a.classList.add('openSidebar')
      }, 100)
    },
    closeSidebar (e) {
      if (e.target.className === "back-sidebar") {
        const a = document.querySelector('.main-sidebar')
        a.classList.add('closeSidebar')
        a.classList.remove('openSidebar')
        setTimeout(() => {
          const b = document.querySelector('.back-sidebar')
          b.style.display = 'none'
        }, 400)
      }
    },
    searchFormSubmit () {
      if (this.search) {
        this.$router.push(`/search/${this.search}`)
        this.search = null;
        const searchEl = document.querySelector(".search");
        searchEl.style.display = "none"
      }
    },
    openSearchField () {
      const searchEl = document.querySelector(".search");
      searchEl.style.display = "block"
    },
    goBack () {
      console.log(this.$router)
    }
  }
}
</script>

<style scoped>
  * {
    user-select: none;
  }
.settings-dropdown {
  cursor: pointer;
  position: relative;
}
.header-dropdown {
  position: absolute;
  top: 0;
  left: 100%;
  background: #fff;
  z-index: 1000;
  width: auto;
  height: auto;
  padding: 1rem;
  margin-left: .3rem;
  box-shadow: 0 0 200px 0px rgba(0,0,0,.5);
  border-radius: 2px;
  display: none;
}

.q-toolbar,
.q-toolbar-title {
  overflow: unset;
}
  .open-header-dropdown {
    display: block;
  }
  .q-toolbar {
    background: #101010 !important;
  }
  .q-toolbar-title {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  .q-link {
    font-size: 12px;
  }
  .search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    display: none;
  }
  .search-form {
    display: block;
    width: 100% !important;
    height: 50px !important;
    overflow: hidden;
    background: #101010 !important;
  }
  .search-form input:first-child {
    width: 85%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    padding: 0 20px;
    color: #aaa;
    font-size: 16px;
  }
  .search-form button {
    width: 15%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: #aaa;
  }
  .search-form input::-webkit-input-placeholder {
    color: #aaa;
    font-size: 16px;
  }
</style>
