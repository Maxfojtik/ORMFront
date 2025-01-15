<template>
  <v-main>
    <div class="content">
      <div class="custom-app-bar" v-if="!mobile">
        <div class="nav-items" :class="{ 'dark-text': theme=='dark' }">
          <v-card-title class="menu-item first-item" @click="gotoAbout()">About Us</v-card-title>
          <v-card-title class="menu-item" @click="gotoVisiting()">Visiting</v-card-title>
          <v-card-title class="menu-item" @click="gotoCollection()">Collection</v-card-title>
          <v-card-title class="menu-item" @click="gotoProjects()">Projects</v-card-title>
          <v-card-title class="menu-item make-room" @click="gotoStore()">Store</v-card-title>
          <v-card-title class="menu-item" @click="gotoEvents()">Events</v-card-title>
          <v-card-title class="menu-item" @click="gotoVolenteer()">Volunteer</v-card-title>
          <v-card-title class="menu-item" @click="gotoContact()">Contact Us</v-card-title>
          <div class="dark-mode-selector menu-item">
            <v-icon size="x-large" icon="mdi-weather-sunny" @click="setLight" v-if="isDarkTheme"/>
            <v-icon size="x-large" icon="mdi-weather-night" @click="setDark" v-if="!isDarkTheme"/>
          </div>
        </div>
        <!-- <img :src="banner" class="ml-2" v-if="!isDarkTheme"></img>
        <img :src="bannerDark" class="ml-2" v-if="isDarkTheme"></img> -->
        <div class="logo-on-top">
          <img class="logo" :src="logoRed" @click="this.$router.push('/')"></img>
        </div>
      </div>
      <div class="custom-app-bar-mobile" v-if="mobile">
        <v-app-bar :elevation="2" class="mobile-app-bar">
          <template v-slot:prepend>
            <v-app-bar-nav-icon @click="toggleNav()"></v-app-bar-nav-icon>
          </template>

          <v-app-bar-title><v-img :width="300" :src="banner" @click="gotoHome()"></v-img></v-app-bar-title>
        </v-app-bar>
        <v-navigation-drawer v-model="navOpen">
          <v-img :src="logoRed" @click="gotoHome()"></v-img>
          <v-list-item @click="gotoAbout()" title="About Us"></v-list-item>
          <v-list-item @click="gotoVisiting()" title="Visiting"></v-list-item>
          <v-list-item @click="gotoCollection()" title="Colletion"></v-list-item>
          <v-list-item @click="gotoProjects()" title="Projects"></v-list-item>
          <v-list-item @click="gotoStore()" title="Store"></v-list-item>
          <v-list-item @click="gotoEvents()" title="Events"></v-list-item>
          <v-list-item @click="gotoVolenteer()" title="Volunteer"></v-list-item>
          <v-list-item @click="gotoContact()" title="Contact Us"></v-list-item>
          <v-list-item>
            <div v-if="!isDarkTheme" @click="setDark" class="logo">Dark Mode <v-icon size="x-large" icon="mdi-weather-night"/></div>
            <div v-if="isDarkTheme" @click="setLight" class="logo">Light Mode <v-icon size="x-large" icon="mdi-weather-sunny"/></div>
          </v-list-item>
        </v-navigation-drawer>
      </div>
      <router-view/>
    </div>
  </v-main>

  <AppFooter />
</template>

<style>
  /* .dark-mode-selector {
    position: absolute;
    top: 0;
    right: 100px;
  } */
   .mobile-app-bar {
    background: #bb0000 !important;
   }
   .logo {
    cursor: pointer;
  }
  .first-item {
    margin-left: auto;
  }
  .dark-mode-selector {
    margin-left: auto;
  }
  .make-room {
    margin-left: 350px
  }
  .menu-item {
    margin-top: 120px;
  }
  .menu-item:hover {
    color: #bb0000;
    cursor: pointer;
  }
  .content {
    width: 80%;
    margin-left: 10%;
  }
  .nav-items {
    align-items: center;
    justify-content: center;
    display: flex;
    border-bottom: 1px solid black;
    z-index: 1;
  }
  .dark-text {
    border-bottom: 1px solid #cccccc;
  }
  .logo-on-top {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    margin-top: -170px;
  }
  .custom-app-bar {
    height: 300px;
  }
</style>

<script setup>
  import logoRed from '@/assets/logo_red.png'
  import banner from '@/assets/banner_name.png'
  import bannerDark from '@/assets/banner_name_ohio_dark.png'
</script>

<script>


  export default {
    name: "default layout",
    components: {

    },
    emits: ['settheme'],
    data() {
      return {
        theme: "light",
        ORMColor: "#bb0000",
        mobile: false,
        navOpen: false
      }
    },
    methods: {
      gotoHome()
      {
        this.$router.push('/');
      },
      gotoAbout()
      {
        this.$router.push('/about');
      },
      gotoVisiting()
      {
        this.$router.push('/visiting');
      },
      gotoCollection()
      {
        this.$router.push('/collection');
      },
      gotoProjects()
      {
        this.$router.push('/projects')
      },
      gotoEvents()
      {
        this.$router.push('/events')
      },
      gotoVolenteer()
      {
        this.$router.push('/volenteer')
      },
      gotoContact()
      {
        this.$router.push('/contact')
      },
      toggleNav()
      {
        this.navOpen = !this.navOpen;
      },
      setDark() {
        this.theme = "dark";
        // this.ORMColor = "#bb0000";
        this.$emit('settheme', this.theme);
        localStorage.theme = this.theme;
      },
      setLight() {
        this.theme = "light";
        // this.ORMColor = "#880000";
        this.$emit('settheme', this.theme);
        localStorage.theme = this.theme;
      },
      onResize() {
        this.mobile = window.innerWidth < 1300 || window.innerWidth < window.innerHeight;
      },
      gotoStore()
      {
        location.href='https://ohiorailwaymuseumgiftshop.square.site/';
      }
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
      });
      if(!localStorage.theme)
      {
        this.theme = "light";
      }
      else
      {
        this.theme = localStorage.theme;
      }
      this.$emit('settheme', this.theme);
      this.onResize();
    },

    beforeDestroy() { 
      window.removeEventListener('resize', this.onResize); 
    },
    computed: {
      isDarkTheme() {
        // console.log(this.$vuetify.theme.dark);
        return this.theme == "dark";
      }
    }
  }
</script>