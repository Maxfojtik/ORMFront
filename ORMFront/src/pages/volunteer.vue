<template>
   <v-card>
      <v-card-title class="header">Volunteer</v-card-title>
      <v-card-subtitle class="subtitle">"Those who can, do. Those who can do more, volunteer" -Unknown </v-card-subtitle>
      <v-card-text>
         To say that this is a labor of love would be an understatement. Our compensation is the satisfaction of a job well done and our best effort given.
         Volunteering offers the greatest opportunity to learn about railroading and its role in the growth of our nation, while contributing to the quality of life in the community.
         The Ohio Railway Museum is an all volunteer organization with members filling all positions from president to track hand. We are always seeking people with skills and time to 
         help us protect, preserve and present the museum's collection to the public.
         <br><br>
         You can click the link below to download and print the Volunteer Application form, fill it out and either send it to 
         <a href="mailto:info@ohiorailwaymuseum.org?subject=Volunteering">our email</a> or <a href="https://maps.app.goo.gl/Yxxg3J1bWu2t4atD7" target="_blank">990 Proprietors Road Worthington, Ohio 43085</a>.
      </v-card-text>
      <v-card-actions>
         <v-container>
            <v-row>
               <v-col>
                  <v-btn @click="downloadPDF()">Volunteer Application</v-btn>
               </v-col>
            </v-row>
         </v-container>
      </v-card-actions>
   </v-card>
</template>

<style>
.header { text-align: center;}
.subtitle {text-align: center; font-style: italic;}
</style>

<script>
export default {
    name: "Volunteer",
    components: {

    },
    methods: {
      downloadPDF() {
         const pdfPath = '.../assets/ORM-VolunteerApplication.pdf';
         const link = document.createElement('a');
         link.href = pdfPath;
         link.download = 'ORMVolunteerApplication';
         link.click();
      }
    },
  }
</script>
