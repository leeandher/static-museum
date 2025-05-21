<script setup>
import Stylist from "./components/Stylist.vue";
import Header from "./components/Header.vue";
import Error from "./components/Error.vue";
import Linker from "./components/Linker.vue";
import Description from "./components/Description.vue";
import Seller from "./components/Seller.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div id="app">
    <Stylist>
      <Header />
      <div v-if="error">
        <Error :error="error" :suffix="suffix" />
      </div>
      <div v-else>
        <Linker />
        <Description />
        <Seller />
      </div>
      <Footer />
    </Stylist>
  </div>
</template>

<style lang="scss">
#app {
  text-align: center;
  margin-top: 60px;
  max-width: 90%;
  margin: 0 auto;
}
</style>
