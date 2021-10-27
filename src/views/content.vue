<template>
  <div class="bg relative flex" :style="{ height: isgood }">
    <img
      src="../assets/content/bg.jpg"
      class="bg-img"
      :style="{ height: isgood }"
    />
    <img src="../assets/content/title.png" class="title" />
    <swiper :options="swiperOption" ref="mySwiper" style="width: 100vw">
      <swiper-slide v-for="(item, index) in img" :key="index">
        <img :src="item" class="ccc"/>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev">
        <img src="../assets/content/left.png" />
      </div>
      <div class="swiper-button-next" slot="button-next">
        <img src="../assets/content/right.png" />
      </div>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "../../node_modules/swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
    props:{
    isgood:{
      type:String,
      default:'100vh'
    }
  },
  data() {
    return {
      img: [
        require("../assets/content/1.png"),
        require("../assets/content/2.png"),
        require("../assets/content/3.png"),
      ],
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 7000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        slidesPerView: 1.5,
        spaceBetween: "-10%",
        loopAdditionalSlides: 100,
        effect: "coverflow",
        // 显示分页
        pagination: {
            hideOnClick:false,
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        centeredSlides: true,
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        coverflowEffect: {
        //   rotate, //slide做3d旋转时Y轴的旋转角度。默认50。
        //   stretch, //每个slide之间的拉伸值，越大slide靠得越紧。
        //   depth, //slide的位置深度。值越大z轴距离越远，看起来越小。
        //   modifier, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
        //   slideShadows: true, //开启slide阴影。默认 true。
        },
      },
    };
  },
};
</script>
<style scoped>
.title {
  width: 5.81rem;
  height: 0.69rem;
  margin-top: 2.47rem;
  margin-bottom: 0.59rem;
}
.ccc{
   width: 100%; 
}
.flex >>> .swiper-button-prev::after {
  content: unset;
}
.flex >>> .swiper-button-prev{
    left: .25rem;
}
.flex >>> .swiper-button-next{
    right: .25rem;
}
.flex >>> .swiper-button-next::after {
  content: unset;
}

.flex >>> .swiper-pagination{
    display: none;
}
</style>