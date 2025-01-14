<template>
  <v-main>
    <div class="content">
      
      <div class="custom-app-bar">
        <div class="nav-items" :class="{ 'dark-text': theme=='dark' }">
          <v-card-title class="menu-item first-item" @click="this.$router.push('/about')">About Us</v-card-title>
          <v-card-title class="menu-item" @click="this.$router.push('/visiting')">Visiting</v-card-title>
          <v-card-title class="menu-item" @click="this.$router.push('/exhibits')">Exhibits</v-card-title>
          <v-card-title class="menu-item" @click="this.$router.push('/projects')">Projects</v-card-title>
          <v-card-title class="menu-item make-room">Store</v-card-title>
          <v-card-title class="menu-item" @click="this.$router.push('/events')">Events</v-card-title>
          <v-card-title class="menu-item" @click="this.$router.push('/volunteer')">Volunteer</v-card-title>
          <v-card-title class="menu-item" @click="this.$router.push('/contact')">Contact Us</v-card-title>
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
      <router-view />
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
    margin-top: 150px;
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
    margin-top: -200px;
  }
  .custom-app-bar {
    height: 300px;
  }
</style>

<script setup>
  import logoRed from '@/assets/logo_red.png'
  import banner from '@/assets/banner_name_ohio.png'
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
        ORMColor: "#bb0000"
      }
    },
    methods: {
      setDark() {
        this.theme = "dark";
        // this.ORMColor = "#bb0000";
        this.$emit('settheme', this.theme);
      },
      setLight() {
        this.theme = "light";
        // this.ORMColor = "#880000";
        this.$emit('settheme', this.theme);
      }
    },
    computed: {
      isDarkTheme() {
        // console.log(this.$vuetify.theme.dark);
        return this.theme == "dark";
      }
    }
  }
</script>