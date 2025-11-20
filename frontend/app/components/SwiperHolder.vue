<template>
  <div class="swiper-main-holder">
    <swiper 
      v-if="slides?.length" 
      :modules="modules"
      :speed="params?.speed"
      :loop="params?.loop"
      :pagination="params?.pagination"
      :slidesPerView="params?.slidesPerView"
      :spaceBetween="params?.spaceBetween"
      :autoplay="params?.autoplay"
      @swiper="onSwiper">
        <swiper-slide v-for="{ hl1, hl2, desc, btn, image } in slides" :style="{ backgroundImage: image && `url(${image})` }">
          <div class="info-box">
            <div v-if="hl1" class="hl1">{{ hl1 }}</div>
            <div v-if="hl2" class="hl2">{{ hl2 }}</div>
            <p v-if="desc" class="desc">{{ desc }}</p>
            <div v-if="btn"  class="btn-holder">
              <a class="btn"
                :href="btn?.link"
                :style="{
                  backgroundColor: btn?.bgColor, 
                  color: btn?.color 
                }">{{ btn?.text }}</a>
            </div>
          </div>
        </swiper-slide>
    </swiper>
    <div class="swiper-custom-nav-holder" v-if="params?.customNavigation">
      <button class="swiper-custom-nav prev" @click="swiper.slidePrev()">
        &#8592;
      </button>
      <button class="swiper-custom-nav next" @click="swiper.slideNext()">
        &#8594;
      </button>
    </div>
  </div>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination, Autoplay } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      params: {},
      slides: [
        { 
          hl1: String,
          hl2: String,
          desc: String,
          btn: { text: String, bgColor: String, link: String },
          image: String
        }
      ]
    },
    setup() {
      
      const swiper = ref();
      const onSwiper = (createdSwiper) => {
        swiper.value = createdSwiper; 
      };

      return {
        swiper,
        onSwiper,
        modules: [Pagination, Autoplay],
      };
    },
  };
</script>

<style lang="scss">

  .swiper-main-holder {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .swiper { height: 100%; }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center center;
  }

  .info-box {
    padding: 2rem;
    text-align: center;
    max-width: 400px;

    .hl1 {
      font-size: 2rem;
      font-weight: bold;
      color: white;
      margin-bottom: 1rem;
    }

    .hl2 {
      font-size: 1.5rem;
      color: white;
      margin-bottom: 1rem;
    }

    .desc {
      font-size: 1rem;
      color: white;
      margin-bottom: 1.5rem;
    }

    .btn-holder {
      button {
        background-color: green;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        cursor: pointer;
        font-weight: bold;
        transition: all 0.3s ease;

        &:hover {
          background-color: darkgreen;
          transform: translateY(-2px);
        }
      }
    }
  }

  .swiper-custom-nav-holder {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    pointer-events: none;
  }

  .swiper-custom-nav {
    border: none;
    background: #ffffff;
    color: #4c4848;
    pointer-events: all;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0.8;

    &:hover {
      background-color: #4c4848;
      color: #ffffff;
    }
  }
</style>
