<template>
  <v-app :theme="theme">
    <router-view @settheme="settheme"/>
  </v-app>
</template>

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
