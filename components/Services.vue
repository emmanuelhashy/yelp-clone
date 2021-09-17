<template>
  <div class="services">
    <h2 class="services__heading">Yelp Montreal</h2>
    <div class="services__nav">
      <p class="nav-link">Austin</p>
      <p class="nav-link">Dallas</p>
      <p class="nav-link">Houston</p>
      <p class="nav-link">San Antonio</p>
      <p class="nav-link">San Francisco</p>
      <p class="nav-link">New York</p>
      <p class="nav-link">San Joes</p>
      <p class="nav-link">Los Angeles</p>
      <p class="nav-link">Chicago</p>
      <p class="nav-link">Palo Alto</p>
      <p class="nav-link"><font-awesome-icon class="search-icon" :icon="['fas', 'search']" />More Cities</p>
    </div>
    <div class="services__content">
      <div class="service" v-for="service in services" :key="service.id">
        <img class="service__photo" :src="require('../static/images/' + service.image)" alt="restuarant image">
        <p class="service__text">{{service.name}}</p>
      </div>
      <!-- <div class="service">
        <img class="service__photo" src="../static/images/restuarant.png" alt="restuarant image">
        <p class="service__text">Restaurant</p>
      </div>
      <div class="service">
        <img class="service__photo" src="../static/images/restuarant.png" alt="restuarant image">
        <p class="service__text">Restaurant</p>
      </div>
      <div class="service">
        <img class="service__photo" src="../static/images/restuarant.png" alt="restuarant image">
        <p class="service__text">Restaurant</p>
      </div>
      <div class="service">
        <img class="service__photo" src="../static/images/restuarant.png" alt="restuarant image">
        <p class="service__text">Restaurant</p>
      </div>
      <div class="service">
        <img class="service__photo" src="../static/images/restuarant.png" alt="restuarant image">
        <p class="service__text">Restaurant</p>
      </div>
      <div class="service">
        <img class="service__photo" src="../static/images/restuarant.png" alt="restuarant image">
        <p class="service__text">Restaurant</p>
      </div>
      <div class="service">
        <img class="service__photo" src="../static/images/restuarant.png" alt="restuarant image">
        <p class="service__text">Restaurant</p>
      </div> -->
    </div>
  </div>
</template>
<script>
import {Services} from "../data"
export default {
  data () {
    return {
      services: []
    }
  },
  mounted () {
    this.setServices()
  },
  methods: {
    setServices() {
      this.services = Services
    }
  }
}
</script>
<style >
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.services {
  background-color: #f5f5f5;
  padding: 1.9rem 15%;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
}
.services__heading {
  font-size: 1.4rem;
  font-weight: 700;
  color: #d32323;
  text-align: center;
  margin-bottom: .4rem;
}
.services__nav {
  display: flex;
  border-bottom: 1px solid #999;
  justify-content: center;
  flex-wrap: wrap;
}
.nav-link {
  color: #999;
  padding: .64rem;
  font-size: .96rem;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
}
.nav-link:hover {
  border-bottom: 2px solid #d32323;
  cursor: pointer;
}
.services__content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.service {
  background-color: #fff;
  padding: 1.1rem 2.4rem;
  /* width: 15rem; */
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid rgba(216, 215, 215, 0.712);
  text-align: center;
}
.service__photo {
  width: 48%;
  height: auto;
}
.service__text {
  color: #333;
  font-weight: 600;
  font-size: .9rem;
}
.service:hover {
  border: 1px solid #0073bb;
  color: #0073bb;
  box-shadow: 5px 10px 15px #88888848;
  cursor: pointer;
}
.search-icon {
  font-size: .9rem;
  margin-right: 4px;
}


@media screen and (max-width: 645px) {
  .service {
    width: 80%;
  }
  .service__photo {
  width: 60%;
  height: auto;
}
.service__text {
  font-size: 1rem;
}
.services__content {
  justify-content: center;
}
}
</style>
