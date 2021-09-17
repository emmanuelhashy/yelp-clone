<template>
  <div class="card review">
        <div class="card__top">
          <div class="wrapper remove-bb">
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
          <div class="img-box">
            <img
              class="card-body-image"
              src="../static/images/348s.jpg"
              alt="card body image"
            />
          </div>
          <a href="#" class="card-body-heading review-heading">Burger Fiancé</a>
          <div class="text-box">
            <div class="rating" style="width: 20rem">
              <input id="rating-5" type="radio" name="rating" value="5" /><label
                for="rating-5"
                ><font-awesome-icon
                  class="fas fa-3x fa-star"
                  :icon="['fas', 'star']"
              /></label>
              <input
                id="rating-4"
                type="radio"
                name="rating"
                value="4"
                checked
              /><label for="rating-4"
                ><font-awesome-icon
                  class="fas fa-3x fa-star"
                  :icon="['fas', 'star']"
              /></label>
              <input id="rating-3" type="radio" name="rating" value="3" /><label
                for="rating-3"
                ><font-awesome-icon
                  class="fas fa-3x fa-star"
                  :icon="['fas', 'star']"
              /></label>
              <input id="rating-2" type="radio" name="rating" value="2" /><label
                for="rating-2"
                ><font-awesome-icon
                  class="fas fa-3x fa-star"
                  :icon="['fas', 'star']"
              /></label>
              <input id="rating-1" type="radio" name="rating" value="1" /><label
                for="rating-1"
                ><font-awesome-icon
                  class="fas fa-3x fa-star"
                  :icon="['fas', 'star']"
              /></label>
            </div>
            <p class="review__text">
              I visited this restaurant on a Saturday evening for my birthday.
              It was a bit busy, my friend had booked a table on the patio, but
              unfortunately, as it was raining, we were seated inside at the
              bar......
            </p>
            <a class="review__text" href="#">Continue reading</a>
          </div>
        </div>
        <div class="review__footer">
          <div class="icon-box">
            <svg
              class="svg-light"
              id="24x24_useful_outline"
              height="24"
              width="24"
            >
              <path
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-19c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9zm2 10.704V15h-4v-1.296c-1.349-.719-2.278-2.124-2.278-3.76a4.278 4.278 0 018.556 0c0 1.636-.929 3.041-2.278 3.76zM11 10a1 1 0 100-2 1 1 0 000 2zm3 6.5a2 2 0 11-4 0V16h4v.5z"
              ></path>
            </svg>
            <svg
              class="svg-smile"
              id="24x24_funny_outline"
              height="24"
              width="24"
            >
              <path
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-19c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9zm0 15a5.5 5.5 0 01-5.288-4h10.576A5.5 5.5 0 0112 18zm3.5-7a1.5 1.5 0 11.001-3.001A1.5 1.5 0 0115.5 11zm-7 0a1.5 1.5 0 11.001-3.001A1.5 1.5 0 018.5 11z"
              ></path>
            </svg>
            <svg
              class="svg-glass"
              id="24x24_cool_outline"
              height="24"
              width="24"
            >
              <path
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-19c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9zm7.994 6.765C19.647 11.612 17.97 13 15.961 13h-.003c-1.617 0-3.028-.9-3.671-2.224a.319.319 0 00-.574 0C11.07 12.1 9.659 13 8.042 13h-.003C6.03 13 4.3 11.85 4.006 9.982l-.124-.734c-.07-.305.255-.251.632-.248h14.972c.39 0 .673-.041.632.248l-.124.517zM17 15.143a5.405 5.405 0 01-5 3.357 5.405 5.405 0 01-5-3.357 8.6 8.6 0 005 1.599 8.6 8.6 0 005-1.599z"
              ></path>
            </svg>
          </div>
          <div class="icon-box">
            <svg class="svg-badge" id="24x24_compliment" height="24" width="24">
              <path
                d="M19 9A7 7 0 105 9a6.995 6.995 0 003.957 6.297L8 21.992 12.005 19 16 21.992l-.957-6.695A6.995 6.995 0 0019 9zm-7 5c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
</template>
<script>
export default {

}
</script>
