<template>
  <div class="card">
        <div class="card__top">
          <div class="wrapper">
            <img
              class="card-top-image"
              src="../static/images/348s.jpg"
              alt="card top image"
            />
            <div class="card-top-text-box">
              <a href="#" class="card-top-heading">Tracy N.</a>
              <p class="card-top-text">Added 2 photos</p>
            </div>
          </div>
        </div>
        <div class="card__body">
          <a href="#" class="card-body-heading">Burger Fiancé</a>
          <div class="img-box">
            <img
              class="card-body-image"
              src="../static/images/348s.jpg"
              alt="card body image"
            />
          </div>
        </div>
        <div class="card__footer">
          <div class="like-box">
            <font-awesome-icon :icon="['fas', 'thumbs-up']" /><span class="like"
              >Like</span
            >
          </div>
        </div>
      </div>
</template>
<script>
export default {

}
</script>
