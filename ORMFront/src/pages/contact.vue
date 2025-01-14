<template>
   <v-card>
      <v-card-title class="header">Contact Us</v-card-title>
      <v-card-text class="body">
         If you have questions or comments, send us a message or give us a call!
      </v-card-text>
      <v-card-actions>
         <v-container>
            <v-row>
               <v-col>
                  <v-btn @click="openPhone()"><v-icon icon="mdi-phone"></v-icon>{{ phoneNumber }}</v-btn>
               </v-col>
            </v-row>
            <v-row>
               <v-col>
                  <v-btn @click="openEmail()"><v-icon icon="mdi-email"></v-icon>{{ email }}</v-btn>
               </v-col>
            </v-row>
         </v-container>
      </v-card-actions>
   </v-card>
   
</template>

<style>
.header {font-size: 50px; text-align: center;}
.body {font-size: 20px;}
</style>

<script>

export default {
    name: "Contact Us",
    components: {

    },
    data() {
      return {
         phoneNumber: "614-885-7345",
         email: "info@ohiorailwaymuseum.org"
      }
    },
    methods: {
      openPhone() {
         window.open("tel:"+this.phoneNumber);
      },
      openEmail() {
         window.open("mailto:"+this.email);
      }
    },
  }
</script>
