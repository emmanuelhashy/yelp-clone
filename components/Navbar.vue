<template>
  <div>
    <nav class="nav">
      <div class="nav__left">
        <a href="#" class="nav-link">write a review</a>
        <a href="#" class="nav-link">Events</a>
        <a href="#" class="nav-link">Talk</a>
        <font-awesome-icon
          icon="times"
          class=" times"
          @click="toggleNav(false)"
        />
      </div>
      <div class="nav__right">
        <a href="#" class="nav-link">Log in</a>
        <button class="btn-signup">Sign up</button>
      </div>
    </nav>
    <font-awesome-icon icon="bars" class="icon bars" @click="toggleNav(true)" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      showNav: false
    };
  },
  methods: {
    toggleNav(state) {
      this.showNav = state;
      console.log("state", state);
      const bars = document.querySelector(".bars");
      const nav = document.querySelector(".nav");
      const times = document.querySelector(".times");
      const navLinks = document.querySelectorAll(".nav-links");

      bars.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        navLinks.forEach((link, index) => {
          link.style.animmation = `navLinkFade 0.5s ease forwards ${index / 7 +
            0.3}s`;
        });
      });

      times.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        navLinks.forEach((link, index) => {
          link.style.animmation = `navLinkFade 0.5s ease forwards ${index / 7 +
            0.3}s`;
        });
      });
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.bars {
  display: none;
}
.times {
  display: none;
}
.nav {
  display: flex;
  height: 5rem;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
}
.nav-link {
  color: #fff;
  padding: 9px 12px 10px;
  font-size: 14px;
  line-height: 1.28571em;
  font-weight: 700;
  background: none;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  text-transform: capitalize;
}
.nav-link:hover {
  border-bottom: 1px solid #fff;
}
.btn-signup {
  color: #fff;
  padding: 0.5rem 1.5rem;
  font-size: 14px;
  line-height: 1.28571em;
  font-weight: 700;
  background: none;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  text-transform: capitalize;
  border: none;
  border-radius: 3px;
  border: 2px solid #fff;
}

.btn-signup:hover {
  background-color: #fff;
  color: #555555;
}

@media screen and (max-width: 620px) {
  .bars {
    display: block;
    font-size: 2rem;
    float: right;
    color: #fff;
  }

  .times {
    display: block;
    color: #fff;
  }
  .nav {
    position: absolute;
    left: 0;
    height: 100vh;
    top: 0;
    z-index: 3000;
    background-color: #202020;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 50%;
    transform: translate(-100%);
    transition: transform 0.5s ease-in;
    padding-top: 3rem;
  }
  .nav__left {
    display: flex;
    flex-direction: column;
  }
  .times {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1.5rem;
    display: block;
  }
  .nav-link {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  .body {
    overflow: hidden;
  }
  .nav-active {
    transform: translate(0%);
  }

  @keyframes navLinkFade {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
  }
}
</style>
