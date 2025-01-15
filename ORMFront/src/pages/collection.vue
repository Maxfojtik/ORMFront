<template>
   <div :class="mobile ? 'content-mobile' : 'content'">
      <div :class="mobile ? 'item-mobile' : 'item'">
         <v-card variant="tonal" :class="mobile ? 'item-dec-mobile' : 'text-position-578 item-dec-left'">
            <template v-slot:title class="item-title">
               <span class="font-weight-black"> Norfolk and Western #578</span>
            </template>
            <v-card-text>
               578 was built in March 1910 by American Locomotive Company (Richmond Works) as a 4-6-2 "Pacific". <br>
               She was donated to us in 1959 and was the museums second steam locomotive. 
               The engine pulled tourist trains on our right-of-way till the 1970s, then was put onto static display ever since. <br> <br>
               We have gotten estimates to restore her to "mainline ready" and they put it at $2,500,000.
            </v-card-text>
         </v-card>
         <v-img :class="mobile ? 'item-image-mobile' : 'item-image-left'" :width="570" src="../assets/collection/578/nw578a.jpg"></v-img>
      </div>
      <div :class="mobile ? 'item-mobile' : 'item'">
         <v-card variant="tonal" :class="mobile ? 'item-dec-mobile' : 'item-dec-right'">
            <template v-slot:title>
               <span class="font-weight-black"> Marble Cliff Quarries #1</span>
            </template>
            <v-card-text>
               This locomotive was built in April of 1924 the Vulcan Iron Works in Wilkes-Barre, Pennsylvania as a 0-4-0T "Four-wheel switch".  <br> <br>
               She was donated to us in 1955 and was the museums first locomotive.
               #1 pulled 578 into the museum when she was donated.
            </v-card-text>
         </v-card>
         <v-img :class="mobile ? 'item-image-mobile' : 'item-image-right'" src="../assets/collection/1/294433327_10158389942146607_2347370433349133673_n.jpg"></v-img>
      </div>
      <div :class="mobile ? 'item-mobile' : 'item'">
         <v-card variant="tonal" :class="mobile ? 'item-dec-mobile' : 'item-dec-left'">
            <template v-slot:title>
               <span class="font-weight-black">Toledo, Port Clinton and Lakeside Railway #64</span>
            </template>
            <v-card-text>
               Streetcar #64 was donated to the museum in 1953.  <br> <br>
               It originally was #41 when it was built for and operated by Ohio Public Service Company. It operated between Mansfield and Shelby during this time. <br> <br>
               The streetcar then was moved to northern Ohio and operated between Toledo and Marblehead.
            </v-card-text>
         </v-card>
         <v-img :class="mobile ? 'item-image-mobile' : 'item-image-left'" src="../assets/collection/64/268024420_10158059172716607_5870765902472746487_n.jpg"></v-img>
      </div>
      <div :class="mobile ? 'item-mobile' : 'item'">
         <v-card variant="tonal" :class="mobile ? 'item-dec-mobile' : 'item-dec-right'">
            <template v-slot:title>
               <span class="font-weight-black">USAX #7178 "Roger"</span>
            </template>
            <v-card-text>
               Built in April 1943 by General Electric in Schnectady, NY, #7178 came into being during wartime for WWII.
               Built for the United States Army Transportation Corps, #7178 worked at the military base of Fort Holabird, located in Baltimore, Maryland.
               #7178 spent it's time working on the base, hauling freight, supplies, and even personnel. 
               Eventually the USATC would find themselves in need of larger and more powerful locomotives, and #7178 found itself sold to the Babcock & Wilcox Co. 
               located in Barberton, Ohio. Serving as their sole locomotive for several years, #7178 was retired in 2010 and thankfully donated to us at the museum.
            </v-card-text>
         </v-card>
         <v-img :class="mobile ? 'item-image-mobile' : 'item-image-right'" src="../assets/collection/7178/228416925_10157836170961607_5237392345074530704_n.jpg"></v-img>
      </div>
      <br>
      <br>
   </div>
</template>
<style>
   .content {
      width: 80%; margin-left: 10%;
   }
   .content-mobile {
      /*  */
   }
   .item-dec-mobile {
      position: absolute;
      top: 230px;
      left: 0px;
   }
   .item-image-mobile {
      position: absolute !important;
      border-radius: 10px;
      top: 0px;
      height: 240px;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
   }
   .item-title {
      background: #111111;
   }
   .item {
      position: relative;
      width: 100%;
      height: 325px;
      display: block;
   }
   .item-mobile {
      position: relative;
      height: 550px;
      margin-top: 10px;
      width: 100%;
      display: block;
   }
   .item-dec-right {
      position: absolute !important;
      width: 60%;
      right: 390px;
      top: 20px;
      height: 260px;
      z-index: -1;
      text-align: right;
   }
   .item-image-right {
      position: absolute !important;
      border-radius: 10px;
      width: 400px;
      right: 0px;
      top: 0px;
      z-index: 100;
   }
   .item-dec-left {
      position: absolute !important;
      width: 60%;
      left: 390px;
      top: 20px;
      height: 260px;
      z-index: -1;
   }
   .item-image-left {
      position: absolute !important;
      border-radius: 10px;
      width: 400px;
      left: 0px;
      top: 0px;
      z-index: 100;
   }
   .text-position-578 {
      left: 565px; 
      width: 45%;
   }
</style>
<script>
export default {
    name: "collection",
    components: {

    },
    emits: [],
    data() {
      return {
        mobile: false
      }
    },
    methods: {
      onResize() {
         this.mobile = window.innerWidth < 1300 || window.innerWidth < window.innerHeight;
      }
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
      });
      this.onResize();
    },

    beforeDestroy() { 
      window.removeEventListener('resize', this.onResize); 
    },
    computed: {
    }
  }
</script>
