<template>
  <div class="container">
    <h3 class="mobile__heading">Yelp Mobile Apps</h3>
    <div class="mobile">
      <div class="tablet">
        <p class="mobile__text">Iphone, Ipad and Watch</p>
        <img class="mobile__photo" src="../static/images/ios.png" alt="Ios">
      </div>
      <div class="phone">
        <p class="mobile__text">Android</p>
        <img class="mobile__photo" src="../static/images/android.png" alt="Android">
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.container {
  padding: 4rem 15%;
  width: 100%;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
}
.mobile__heading {
  font-size: 1.4rem;
  font-weight: 700;
  color: #d32323;
  text-align: center;
  /* margin-bottom: 1rem; */
}
.mobile{
  display: flex;
  text-align: center;
  /* flex-wrap: wrap; */
  /* justify-content: space-between; */
}
.mobile__text {
  color: #333;
  font-weight: 700;
  font-size: .9rem;
}
.tablet, .phone {
    background-color: #fff;
  padding: 2.4rem 12%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid rgba(216, 215, 215, 0.712);
}
.tablet {
  margin-right: 1.2rem;
}
.phone {
  margin-left: 1.2rem;
}
.tablet:hover, .phone:hover {
  border: 1px solid #0073bb;
  color: #0073bb;
  box-shadow: 5px 10px 15px #88888848;
  cursor: pointer;
}

.mobile__photo {
  width: 100%;
}


@media screen and (max-width: 645px) {
  .mobile {
    flex-direction: column;
    align-items: center;
  }
  .tablet {
  margin-right: 0rem;
}
.phone {
  margin-left: 0rem;
}
}

</style>
