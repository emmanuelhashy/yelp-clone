<template>
  <div class="hero">
    <Navbar />
    <div class="hero__filter">
      <div class="hero__logo-container">
        <h2 class="logo"></h2>
      </div>
      <div class="search-filter">
        <p class="find">find</p>
        <input
          type="text"
          class="hero__input"
          placeholder="Search for names.."
        />
        <p class="near">near</p>
        <input
          type="text"
          class="hero__input"
          placeholder="Search for names.."
        />
        <button class="btn-search">
          <font-awesome-icon :icon="['fas', 'search']" />
        </button>
      </div>
      <div class="hero__menu">
        <div class="menu-item">
          <span
            aria-hidden="true"
            style="width: 24px; height: 24px;"
            class="icon icon--24-plumbers-v2 icon--size-24 icon--inverse icon--fallback-inverted"
          >
            <svg role="img" class="icon_svg">
              <use xlink:href="#24x24_plumbers_v2">
                <svg id="24x24_plumbers_v2" height="24" width="24">
                  <path
                    d="M17.87 15.64a1 1 0 011.58 0c.55.7 2.33 3.09 2.33 4.5a3.12 3.12 0 11-6.24 0c0-1.41 1.79-3.8 2.33-4.5zm.79 5.61c.6 0 1.093-.471 1.12-1.07A7 7 0 0018.66 18a7 7 0 00-1.12 2.14 1.12 1.12 0 001.12 1.11zM17 5a6 6 0 016 6v3a1 1 0 01-1 1h-7a1 1 0 01-1-1v-1h-1.28A2 2 0 0111 14H7a2 2 0 01-1.72-1H2a1 1 0 01-1-1V6a1 1 0 011-1h3.28A2 2 0 017 4h1V3H6a1 1 0 010-2h6a1 1 0 110 2h-2v1h1a2 2 0 011.72 1H17zM3 7v4h2V7H3zm4 5h4V6H7v6zm14 1v-2a4 4 0 00-4-4h-4v4h2a1 1 0 011 1v1h5z"
                  ></path>
                </svg>
              </use>
            </svg>
          </span>
          <a
            class="homepage-hero_link"
            href="/search?cflt=Plumbing&amp;find_loc=Montreal%2C+QC%2C+Canada"
            >Plumbers</a
          >
        </div>
        <div class="menu-item">
          <span
            aria-hidden="true"
            style="width: 24px; height: 24px;"
            class="icon icon--24-food-v2 icon--size-24 icon--inverse icon--fallback-inverted"
          >
            <svg role="img" class="icon_svg">
              <use xlink:href="#24x24_food_v2">
                <svg id="24x24_food_v2" height="24" width="24">
                  <path
                    d="M17 1a4 4 0 014 4v4a6 6 0 01-2 4.46V20a3 3 0 11-6 0V5a4 4 0 014-4zm0 19v-5.35a6 6 0 01-2 .35v5a1 1 0 102 0zm2-11V5a2 2 0 00-4 0v8a4 4 0 004-4zm-9-8a1 1 0 011 1v5a4 4 0 01-1 2.62V20a3 3 0 11-6 0V9.62A4 4 0 013 7V2a1 1 0 012 0v3h1V2a1 1 0 012 0v3h1V2a1 1 0 011-1zM9 7H5a2 2 0 104 0zM7 21a1 1 0 001-1v-9.14A4.09 4.09 0 017 11a4.09 4.09 0 01-1-.14V20a1 1 0 001 1z"
                  ></path>
                </svg>
              </use>
            </svg>
          </span>
          <a
            class="homepage-hero_link"
            href="/search?cflt=restaurants&amp;find_loc=Montreal%2C+QC%2C+Canada"
            >Restaurants</a
          >
        </div>

        <div class="menu-item js-dropdown-toggle dropdown_toggle is-active hover">
          <span
            aria-hidden="true"
            style="width: 24px; height: 24px;"
            class="icon icon--24-at-home-services-v2 icon--size-24 icon--inverse icon--fallback-inverted"
          >
            <svg role="img" class="icon_svg">
              <use xlink:href="#24x24_at_home_services_v2">
                <svg id="24x24_at_home_services_v2" height="24" width="24">
                  <path
                    d="M8.672 14.524a1.458 1.458 0 100-2.916 1.458 1.458 0 000 2.916z"
                  ></path>
                  <path
                    d="M22 21h-3.29v-3.046a5.929 5.929 0 004.236-5.97c0-4.882-4.268-10.361-4.45-10.591a1 1 0 00-1.572-.001c-.16.202-3.454 4.43-4.27 8.757L9.06 7.721a1 1 0 00-1.12 0l-6.588 4.45a1 1 0 00-.27 1.39.99.99 0 00.918.42V21a1 1 0 100 2h20a1 1 0 000-2zM17.71 3.73c1.17 1.74 3.236 5.239 3.236 8.253 0 2.253-1.452 4.085-3.236 4.085A3.165 3.165 0 0115 14.2v-.211c.03.003.058.013.088.013a1 1 0 00.56-1.83l-1.13-.763c.232-2.874 2.094-6.046 3.192-7.678zM9 21H8v-3h1v3zm4 0h-2v-4a1 1 0 00-1-1H7a.998.998 0 00-1 1v4H4v-8.203l4.5-3.04 4.5 3.04V21zm2-3.825a4.885 4.885 0 001.71.768V21H15v-3.825z"
                  ></path>
                </svg>
              </use>
            </svg>
          </span>
          <a class="homepage-hero_link">Home Services</a>
          <span
            aria-hidden="true"
            style="width: 14px; height: 14px;"
            class="icon icon--14-triangle-down icon--size-14 icon--inverse icon--fallback-inverted u-triangle-direction-down dropdown_arrow"
          >
            <svg role="img" class="icon_svg">
              <use xlink:href="#14x14_triangle_down"></use>
            </svg>
          </span>
        </div>
        <div class="menu-item">
          <span
            aria-hidden="true"
            style="width: 24px; height: 24px;"
            class="icon icon--24-delivery-v2 icon--size-24 icon--inverse icon--fallback-inverted"
          >
            <svg role="img" class="icon_svg">
              <use xlink:href="#24x24_delivery_v2">
                <svg id="24x24_delivery_v2" height="24" width="24">
                  <path
                    d="M23.596 17a4.97 4.97 0 00-1.836-3.839L17.753 4.77a1.114 1.114 0 00-.464-.53.983.983 0 00-.432-.124c-.013 0-.023-.008-.036-.008h-4.843a1 1 0 000 2h1.656a3.534 3.534 0 00-.09 3.006l1.817 4.107A5.018 5.018 0 0013.703 16H9.748a2.537 2.537 0 01-1.488-2.107c0-1.486 1.971-1.895 2.05-1.91a1 1 0 00.815-.983V9a.998.998 0 00-1-1h-2.03V5a3.003 3.003 0 00-3-3H1.38a1 1 0 00-1 1v8a1 1 0 001 1h.28a6.56 6.56 0 00-1.115 5.203.99.99 0 00.807.77c0 .01-.005.017-.005.027a4.056 4.056 0 108.11 0h5.06a4.055 4.055 0 108.109 0l-.001-.006a.996.996 0 00.97-.994zM9.125 10v.249a3.987 3.987 0 00-2.865 3.644A3.909 3.909 0 006.86 16H2.405a4.571 4.571 0 011.621-3.646 1 1 0 00-.079-1.587L2.832 10h6.293zM2.38 4h2.715a1 1 0 011 1v3H2.832c-.153.007-.305.03-.452.072V4zM5.4 20.056A2.058 2.058 0 013.347 18h4.11a2.058 2.058 0 01-2.056 2.056zM21.425 16h-5.658a3.001 3.001 0 015.658 0zm-5.93-9.182c.175-.273.431-.484.732-.603l2.783 5.827c-.14-.012-.272-.042-.414-.042-.502.007-1 .09-1.477.248l-1.744-3.943a1.54 1.54 0 01.12-1.487zm3.076 13.238A2.058 2.058 0 0116.517 18h4.109a2.058 2.058 0 01-2.055 2.056z"
                  ></path>
                </svg>
              </use>
            </svg>
          </span>
          <a
            class="homepage-hero_link"
            href="/search?find_desc=Delivery&amp;find_loc=Montreal%2C+QC%2C+Canada"
            >Delivery</a
          >
        </div>
        <div class="menu-item js-dropdown-toggle dropdown_toggle">
          <span
            aria-hidden="true"
            style="width: 24px; height: 24px;"
            class="icon icon--24-black-owned-v2 icon--size-24 icon--inverse icon--fallback-inverted"
          >
            <svg role="img" class="icon_svg">
              <use xlink:href="#24x24_black_owned_v2">
                <svg id="24x24_black_owned_v2" height="24" width="24"><path d="M18.055 12.874a1.987 1.987 0 01-1.165.26 3.71 3.71 0 01-1.213-.544l.705 1.41H3.618l1-2h10.174a15.653 15.653 0 01-2.229-2H5V8h6.057a8.353 8.353 0 01-.89-2H4a1 1 0 00-1 1v3.764l-1.895 3.789A1 1 0 002 16h1v6a1 1 0 001 1h12a.998.998 0 001-1v-6h1a1.001 1.001 0 00.895-1.447l-.84-1.679zM11 21H9v-2h2v2zm4 0h-2v-3a1 1 0 00-1-1H8a.998.998 0 00-1 1v3H5v-5h10v5z"></path><path d="M19.9 1.03a3.625 3.625 0 00-2.582 1.37 3.625 3.625 0 00-2.58-1.37 3.091 3.091 0 00-3.092 3.293c0 3.892 5.183 6.83 5.404 6.953a.5.5 0 00.244.064c.423 0 5.696-3.196 5.696-7.017A3.092 3.092 0 0019.9 1.03z"></path></svg>
              </use>
            </svg>
          </span>
          <a class="homepage-hero_link">Black Owned</a>
          <span
            aria-hidden="true"
            style="width: 14px; height: 14px;"
            class="icon icon--14-triangle-down icon--size-14 icon--inverse icon--fallback-inverted u-triangle-direction-down dropdown_arrow"
          >
            <svg role="img" class="icon_svg">
              <use xlink:href="#14x14_triangle_down"></use>
            </svg>
          </span>
        </div>
      </div>
      <div class="hero__bottom">
        <a href="#" class="hero__bottom-link">Jack's Wife Freda </a>
        <p>Photo by <a href="#" class="hero__bottom-link">Ron L.</a></p>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "./Navbar";
export default {
  components: {
    Navbar
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.hero {
  width: 100%;
  height: auto;
  background: url("../static/images/hero.jpg") no-repeat fixed center;
  padding: 0 15%;
  padding-bottom: 1.6rem;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
}
.hero__logo-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
.logo {
  width: 160px;
  height: 80px;
  padding: 0;
  margin: 0 auto 48px;
  background-repeat: no-repeat;
  background-size: 160px 80px;
  background-image: url(https://s3-media0.fl.yelpcdn.com/assets/public/yelp_logo_www_home.yji-7d24f1680fdb98ca54a82c26cdbdc7bd.svg);
}
.search-filter {
  display: flex;
  background-color: #fff;
  align-items: center;
  height: 3rem;
  border-radius: 4px;
}
.hero__input {
  border: none;
  width: 42%;
  margin-top: 3px;
  font-size: .9rem;
}
.hero__input:focus {
  outline: none;
  border: none;
}
.find,
.near {
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
  text-transform: capitalize;
}
.near {
  border-left: 1px solid gray;
}
.btn-search {
  padding: 0rem 1.2rem;
  background-color: red;
  height: 100%;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  color: #fff;
  font-size: 1.2rem;
}
.hero__bottom {
  margin-top: 13rem;
  text-align: center;
  color: #fff;
  font-size: 1rem;
}
.hero__bottom-link {
  color: #fff;
  font-weight: 600;
}
.hero__bottom-link:hover {
  text-decoration: underline;
}
.hero__menu {
  display: flex;
  justify-content: center;
}
.icon--hover-inverse:focus,
.icon--hover-inverse:hover,
.icon--inverse {
  fill: #fff;
}
.icon {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: -0.1em;
  /* fill: #666; */
}
.icon,
svg:not(:root) {
  overflow: hidden;
}
.icon:before {
  content: "";
  background-color: transparent;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-image: url(https://s3-media0.fl.yelpcdn.com/assets/srv0/svg_icons/ddf1fc802f70/assets/sprite.png);
  background-image: linear-gradient(transparent, transparent), none;
}
.icon:before {
  position: absolute;
  display: block;
  left: 0;
}
.icon:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.menu-item {
  padding: 1.5rem 1rem;
}
.homepage-hero_link {
  color: #fff;
  font-weight: 600;
}


@media screen and (max-width: 769px) {
  .menu-item {
  padding: 1.5rem 1rem;
  font-size: .6rem;
}
.hero__menu {
  font-size: .6rem;
  flex-direction: column;
  align-items: center;
}
}
</style>
