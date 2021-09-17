<template>
  <div class="collections">
    <h1 class="collection__heading">Featured Collections</h1>
    <div class="collection__container">
      <div class="collection" v-for="collection in collections" :key="collection.id">
        <img class="collection__photo" :src="require('../static/images/' + collection.image)" alt="collection photo" />
        <div class="collection__text">
          <a href="#" class="collection__text-heading"
            >{{collection.title}}</a
          >
          <p>
            {{collection.description}}
          </p>
          <p>{{collection.places}} Places ·<span class="author">{{collection.author}}</span></p>
        </div>
      </div>
      <!-- <div class="collection">
        <img class="collection__photo" src="../static/images/348s.jpg" alt="collection photo" />
        <div class="collection__text">
          <a href="#" class="collection__text-heading"
            >Entreprises et organismes des Noirs - Black...</a
          >
          <p>
            This is a growing collection of Black-owned businesses in Montréal,
            created in conversation with the businesses
          </p>
          <p class="places">48 Places ·<span class="author">By Risa D.</span></p>
        </div>
      </div>
      <div class="collection">
        <img class="collection__photo" src="../static/images/348s.jpg" alt="collection photo" />
        <div class="collection__text">
          <a href="#" class="collection__text-heading"
            >Entreprises et organismes des Noirs - Black...</a
          >
          <p>
            This is a growing collection of Black-owned businesses in Montréal,
            created in conversation with the businesses
          </p>
          <p class="places">48 Places ·<span class="author">By Risa D.</span></p>
        </div>
      </div>
      <div class="collection">
        <img class="collection__photo" src="../static/images/348s.jpg" alt="collection photo" />
        <div class="collection__text">
          <a href="#" class="collection__text-heading"
            >Entreprises et organismes des Noirs - Black...</a
          >
          <p>
            This is a growing collection of Black-owned businesses in Montréal,
            created in conversation with the businesses
          </p>
          <p class="places">48 Places ·<span class="author">By Risa D.</span></p>
        </div>
      </div> -->
    </div>
    <div class="collections_browse">
      <a href="#" class="browse">Browse more collections</a>
    </div>
  </div>
</template>
<script>
import {Collections} from "../data"
export default {
  data () {
    return {
      collections: []
    }
  },
  mounted () {
    this.setCollections()
  },
  methods: {
    setCollections() {
      this.collections = Collections
    }
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: #0073bb;
}
.collections {
  padding: 2.8rem 15%;
  width: 100%;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
}
.collection__heading {
  font-size: 1.1rem;
  font-weight: 700;
  color: #d32323;
  text-align: center;
  margin-bottom: 1rem;
}
.collection__container {
  border: 1px solid rgba(216, 215, 215, 0.712);
  border-radius: 3px;
  padding: 0rem .7rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-self: auto;
  width: 100%;
}
.collection {
  display: flex;
  padding: .7rem 0rem;
  border-bottom: 1px solid rgba(216, 215, 215, 0.712);
  width: 28.7rem;
  line-height: 1.1rem;
}
.collection__photo {
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 3px;
  margin-right: 1rem;
}
.collection__text {
  font-size: .9rem;
}
.collection__text-heading {
  font-size: .9rem;
  font-weight: 700;
}
.browse:hover, .collection__text-heading:hover {
  text-decoration: underline;
}
.collections_browse {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: .97rem;
  margin-top: 1.1rem;
  text-align: center;
}
.places {
  color: #999;
}
.author {
  color: #0073bb;
}
.collection:nth-last-of-type(-n+2) {
    border: none;
}

@media screen and (max-width: 425px) {
  .collection {
    flex-direction: column;
  }
  .collection__photo {
    width: 100%;
    object-fit: cover;
    height: 7rem;
  }
}
</style>
