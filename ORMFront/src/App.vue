<template>
  <v-app :theme="theme">
    <router-view @settheme="settheme"/>
  </v-app>
</template>

<style>
  /* Apply transition to the background color */
  .v-application {
    transition: background .5s ease-in-out !important;
  }
  .v-footer {
    transition: color .5s ease-in-out !important; 
    transition: background .5s ease-in-out  !important;
  }
</style>

<script>
  export default {
    name: "App.vue",
    components: {

    },
    data() {
      return {
        theme: "light"
      }
    },
    methods: {
      settheme(th) {
        this.theme = th;
      }
    }
  }
</script>
