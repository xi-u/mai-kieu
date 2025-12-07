<script lang="js">
import {defineComponent} from 'vue'
import {Carousel, Slide, Navigation} from 'vue3-carousel'
import 'vue3-carousel/carousel.css'
import mai2 from '../../assets/img/mai2.png'
import mai from '../../assets/img/mai.png'

export default defineComponent({
  name: "SideBarInfo",
  components: {
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
      images: [
        {id: 1, url: mai2},
        {id: 2, url: mai}
      ],
      config: {
        height: 200,
        itemsToShow: 1,
        gap: 5,
        autoplay: 4000,
        wrapAround: true,
        pauseAutoplayOnHover: true,
      }
    }
  }
})
</script>

<template>
  <figure class="bg-black-lighter w-60 h-60 flex items-center justify-center rounded-4xl shadow-md hover-effect
  overflow-hidden border-primary border-2">
    <Carousel v-bind="config" class="w-full h-full">
      <Slide v-for="image in images" :key="image.id" class="flex items-center justify-center">
        <img :src="image.url" alt="Mai Kieu" class="rounded-4xl w-50 h-50 object-cover"/>
      </Slide>
    </Carousel>
  </figure>

  <div class="flex flex-col items-center justify-center gap-2 text-white-light w-full  text-center">
    <h2 class="font-poppins font-bold text-3xl ">Mai Kieu</h2>
    <p class="font-poppins text-xs bg-black-lighter p-2 rounded-xl text-white-dark  hover-effect">
      Student HBO-ICT Software Engineering
    </p>
    <p class="font-poppins text-xs bg-black-lighter p-2 rounded-xl text-white-dark  hover-effect">
      Hogeschool van Amsterdam
    </p>
    <hr class="border-white-dark w-full opacity-30 mt-6"/>
  </div>
</template>
