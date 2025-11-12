<template>
  <swiper 
    v-if="slides?.length" 
    :navigation="true" 
    :modules="modules"
    :speed="params?.speed"
    :loop="params?.loop"
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
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';

  // import required modules
  import { Navigation } from 'swiper/modules';

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

      const onSwiper = (swiper) => {
        console.log('abc swiper', swiper);
        swiper.set
      };

      return {
        onSwiper,
        modules: [Navigation],
      };
    },
  };
</script>

<style lang="scss">
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
</style>
