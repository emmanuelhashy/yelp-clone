<template>
  <div class="footer">
    <div class="footer__top">
      <div class="col-1">
        <h4 class="col-1__heading">About</h4>
        <a class="footer-link" href="#">About Yelp</a>
        <a class="footer-link" href="#">Careers</a>
        <a class="footer-link" href="#">Press</a>
        <a class="footer-link" href="#">Investor Relations</a>
        <a class="footer-link" href="#">Trust & Safety</a>
        <a class="footer-link" href="#">Content Guidelines</a>
        <a class="footer-link" href="#">Accessibility Statement</a>
        <a class="footer-link" href="#">Terms of Service</a>
        <a class="footer-link" href="#">Privacy Policy</a>
        <a class="footer-link" href="#">Ad Choices</a>
      </div>
      <div class="col-1">
        <h4 class="col-1__heading">Discover</h4>
        <a class="footer-link" href="#">Yelp Project Cost Guides</a>
        <a class="footer-link" href="#">Collections</a>
        <a class="footer-link" href="#">Talks</a>
        <a class="footer-link" href="#">Events</a>
        <a class="footer-link" href="#">The Local Yelp</a>
        <a class="footer-link" href="#">Yelp Blog</a>
        <a class="footer-link" href="#">Support</a>
        <a class="footer-link" href="#">Yelp Mobile</a>
        <a class="footer-link" href="#">Developers</a>
        <a class="footer-link" href="#">RSS</a>
      </div>
      <div class="col-1">
        <h4 class="col-1__heading">Yelp for Business</h4>
        <a class="footer-link" href="#">Claim your Business Page</a>
        <a class="footer-link" href="#">Advertise on Yelp</a>
        <a class="footer-link" href="#">Yelp for Restaurant Owners</a>
        <a class="footer-link" href="#">Table Management</a>
        <a class="footer-link" href="#">Business Success Stories</a>
        <a class="footer-link" href="#">Business Support</a>
        <a class="footer-link" href="#">Yelp Blog for Business</a>
      </div>
      <div class="col-1">
        <h4 class="col-1__heading">Languages</h4>
        <a class="footer-link" href="#">About Yelp</a>
        <h4 class="col-1__heading">Countries</h4>
        <a class="footer-link" href="#">Press</a>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="footer__text">Copyright © 2004–2021 Yelp Inc. Yelp, <span><img class="align-bottom" src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/7ef71bf77a33/assets/img/brand/logo_desktop.svg" alt="Yelp logo" width="38" height="19"></span>, <span><img class="align-bottom" src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/cabcef1daea2/assets/img/brand/burst_red.svg" alt="Yelp burst" width="14" height="16"></span> and related marks are registered trademarks of Yelp.</p>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
a {
  color: rgba(117,114,128,1);
  text-decoration: none;
}
.footer {
  background-color: #f4f4f4;
  padding: 2.5rem 15%;
  width: 100%;
      font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    color: #333;
}
.footer__top {
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  flex-wrap: wrap;
}
.footer-link {
  font-size: .9rem;
  color: rgba(117,114,128,1);
  text-decoration: none;
  padding-bottom: 1rem;
}
.footer-link:hover {
  text-decoration: underline;
}
.col-1__heading {
  font-weight: 700;
  margin-bottom: 1.2rem;
}
.col-1 {
  display: flex;
  flex-direction: column;
}
.footer__text {
  font-size: .8rem;
  color: rgba(117,114,128,1);
  text-decoration: none;
  padding-bottom: 2rem;
}
.align-bottom {
  margin-bottom: -5px;
}
</style>
