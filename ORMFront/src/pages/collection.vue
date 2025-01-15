<template>
   <div style="width: 80%; margin-left: 10%;">
      <div class="item">
         <v-card variant="tonal" class="item-dec-left" style="left: 565px; width: 45%;">
            <template v-slot:title class="item-title">
               <span class="font-weight-black"> Norfolk and Western #578</span>
            </template>
            <v-card-text>
               578 was built in March 1910 by American Locomotive Company (Richmond Works) as a 4-6-2 "Pacific". <br> <br>
               She was donated to us in 1959 and was the museums second steam locomotive. 
               The engine pulled tourist trains on our right-of-way till the 1970s, then was put onto static display ever since. <br> <br>
               We have gotten estimates to restore her to "mainline ready" and they put it at $2,500,000.
            </v-card-text>
         </v-card>
         <v-img class="item-image-left" :width="570" src="../assets/collection/578/nw578a.jpg"></v-img>
      </div>
      <div class="item">
         <v-card variant="tonal" class="item-dec-right">
            <template v-slot:title>
               <span class="font-weight-black"> Marble Cliff Quarries #1</span>
            </template>
            <v-card-text>
               This locomotive was built in April of 1924 the Vulcan Iron Works in Wilkes-Barre, Pennsylvania as a 0-4-0T "Four-wheel switch".  <br> <br>
               She was donated to us in 1955 and was the museums first locomotive.
               #1 pulled 578 into the museum when she was donated.
            </v-card-text>
         </v-card>
         <v-img class="item-image-right" src="../assets/collection/1/294433327_10158389942146607_2347370433349133673_n.jpg"></v-img>
      </div>
      <div class="item">
         <v-card variant="tonal" class="item-dec-left">
            <template v-slot:title>
               <span class="font-weight-black">Toledo, Port Clinton and Lakeside Railway #64</span>
            </template>
            <v-card-text>
               Streetcar #64 was donated to the museum in 1953.  <br> <br>
               It originally was #41 when it was built for and operated by Ohio Public Service Company. It operated between Mansfield and Shelby during this time. <br> <br>
               The streetcar then was moved to northern Ohio and operated between Toledo and Marblehead.
            </v-card-text>
         </v-card>
         <v-img class="item-image-left" src="../assets/collection/64/268024420_10158059172716607_5870765902472746487_n.jpg"></v-img>
      </div>
   </div>
</template>
<style>
   .item-title {
      background: #111111;
   }
   .item {
      position: relative;
      height: 400px;
      width: 100%;
      display: block;
   }
   .item-dec-right {
      position: absolute !important;
      width: 60%;
      right: 390px;
      top: 20px;
      height: 260px;
      z-index: 1;
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
      z-index: 1;
   }
   .item-image-left {
      position: absolute !important;
      border-radius: 10px;
      width: 400px;
      left: 0px;
      top: 0px;
      z-index: 100;
   }
</style>
<script>
</script>
