<template>
  <swiper v-if="slides?.length" :navigation="true" :modules="modules">
    <swiper-slide v-for="{ title, image } in slides" :style="{ backgroundImage: image && `url(${image})` }">{{ title }}</swiper-slide>
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
      slides: [
        { 
          title: String,
          image: String
        }
      ]
    },
    setup() {
      return {
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
</style>
