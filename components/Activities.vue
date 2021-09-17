<template>
  <div class="container">
    <h2 class="activity__heading">Recent Activity</h2>
    <div class="row">
      <div class="column">
        <CardOne />
        <CardTwo />
        <Review />
        <CardTwo />
      </div>
      <div class="column">
        <CardOne />
        <Review />
        <CardTwo />
        <CardOne />

      </div>
      <div class="column">
        <CardOne />
        <CardOne />
        <CardTwo />
        <Review />
      </div>
    </div>
    <div class="collections_browse">
      <a href="#" class="browse">Show more activity in Montreal</a>
    </div>
  </div>
</template>
<script>
import { Activities } from "../data";
import Review from "./Review.vue";
import CardTwo from "./CardTwo.vue";
import CardOne from "./CardOne.vue";
export default {
  components: {
    Review,
    CardTwo,
    CardOne
  }
};
</script>
<style>
a {
  text-decoration: none;
  color: #0073bb;
  font-weight: 500;
  font-size: 1rem;
}
a:hover {
  text-decoration: underline;
}
.container {
  padding: 2.5rem 15%;
  width: 100%;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
.activity__heading {
  font-size: 1.4rem;
  font-weight: 700;
  color: #d32323;
  text-align: center;
  margin-bottom: 1.5rem;
}
.card {
  width: 32%;
  height: auto;
  background-color: transparent;
  margin-top: 1rem;
  border-radius: 4px;
  padding-bottom: 7px;
  border: 1px solid rgba(216, 215, 215, 0.712);
}
.card__top {
  padding: 0px 10px;
}
.wrapper {
  display: flex;
  border-bottom: 1px solid rgba(216, 215, 215, 0.712);
  padding: 15px 0px;
}
.remove-bb {
  border-bottom: none;
}
.card-top-image {
  width: 2rem;
  height: 2rem;
  border-radius: 3px;
  margin-right: 0.6rem;
}
.card-top-heading {
  font-weight: 600;
  font-size: 0.9rem;
}
.card-top-text {
  font-size: 0.86rem;
}
.card__body {
  /* padding: 7px; */
}
.card-body-heading {
  display: inline-block;
  margin: 0.6rem;
  margin-left: 10px;
  font-size: 0.9rem;
  font-weight: 600;
}
.review-heading {
  margin-right: 10px;
}
.card-body-image {
  width: 100%;
}
.review__footer {
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  color: #999;
  width: 100%;
}
.card__footer {
  width: 100%;
  padding: 10px;
  display: flex;
  color: #999;
  width: 100%;
}
.like-box {
  display: flex;
  color: #999;
  width: 100%;
}
.like-box:hover {
  cursor: pointer;
  color: #0073bb;
}
.like {
  margin-left: 10px;
}
.like:hover {
  color: #0073bb;
}
.browse:hover,
.collection__text-heading:hover {
  text-decoration: underline;
}
.collections_browse {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 0.97rem;
  margin-top: 1.1rem;
}

/* 5 Star Rating */
.rating {
  direction: ltr;
  unicode-bidi: bidi-override;
  color: #ddd; /* Personal choice */
  font-size: 0.3rem;
  margin: 10px 0px;
}
.rating input {
  display: none;
}
.rating label:hover,
.rating label:hover ~ label,
.rating input:checked + label,
.rating input:checked + label ~ label {
  color: #ffc107; /* Personal color choice. Lifted from Bootstrap 4 */
}
.review__text {
  font-size: 0.8rem;
}
.text-box {
  margin: 0px 10px;
  border-bottom: 1px solid rgba(216, 215, 215, 0.712);
  border-top: 1px solid rgba(216, 215, 215, 0.712);
  padding-bottom: 10px;
}
.icon-box {
  color: #999;
}
.svg-smile:hover {
  fill: green;
  cursor: pointer;
}
.svg-badge:hover,
.svg-light:hover {
  fill: red;
  cursor: pointer;
}
.svg-glass:hover {
  fill: #0073bb;
  cursor: pointer;
}
.flex {
  display: flex;
}
.img-box {
  border: 1px solid rgba(216, 215, 215, 0.712);
  border-radius: 4px;
  margin: 0 5px;
  margin-top: 5px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  border-bottom: 1px solid rgba(216, 215, 215, 0.712);
  padding-bottom: 2rem;
}

/* Create four equal columns that sits next to each other */
.column {
  -ms-flex: 33.333%; /* IE10 */
  flex: 33.333%;
  max-width: 33.333%;
  padding: 0 4px;
}

.column .card {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 325px) {
  .container {
  padding: 2.5rem 2%;
  }
}
</style>
