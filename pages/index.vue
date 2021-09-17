<template>
  <div>
    <Hero/>
    <Collections/>
    <Activities/>
    <Services/>
    <Mobile/>
    <Footer/>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue"
import Collections from "../components/Collections"
import Activities from "../components/Activities"
import Services from "../components/Services"
import Mobile from "../components/Mobile"
import Footer from "../components/Footer"
export default {
  components: {
    Hero,
    Collections,
    Activities,
    Services,
    Mobile,
    Footer
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
