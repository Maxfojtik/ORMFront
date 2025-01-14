<template>
  <v-app :theme="theme">
    <router-view @settheme="settheme"/>
  </v-app>
</template>

<style>
  /* Apply transition to the background color */
  .v-application {
    transition: background 0.2s ease-in-out;
  }
  .v-footer {
    transition: color 0.2s ease-in-out !important; 
    transition: background 0.2s ease-in-out  !important;
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
