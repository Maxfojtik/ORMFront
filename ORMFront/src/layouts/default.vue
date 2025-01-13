<template>
  <v-main>
    <v-app-bar :color = "ORMColor">
      <img :src="banner" class="ml-2"></img>
      <!-- <img :src="banner" class="ml-2" v-if="!isDarkTheme"></img>
      <img :src="bannerDark" class="ml-2" v-if="isDarkTheme"></img> -->
      <v-spacer/>
      <div class="mr-4">
        <v-icon size="x-large" icon="mdi-weather-sunny" @click="setLight" v-if="isDarkTheme"/>
        <v-icon size="x-large" icon="mdi-weather-night" @click="setDark" v-if="!isDarkTheme"/>
      </div>
    </v-app-bar>
    <router-view />
  </v-main>

  <AppFooter />
</template>

<script setup>
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