<script lang="ts">
import {defineComponent} from 'vue'
import {Carousel, Slide, Navigation as CarouselNavigation, Pagination as CarouselPagination} from 'vue3-carousel'
import Widget from "../ui/Widget.vue";

export default defineComponent({
  name: "ProjectCarousel",
  components: {Slide, Carousel, Widget, CarouselNavigation, CarouselPagination},
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      iframeObserver: null as IntersectionObserver | null,
      originalAutoplay: 4000,
      config: {
        itemsToShow: 1,
        gap: 5,
        autoplay: 4000,
        wrapAround: true,
        pauseAutoplayOnHover: true,
      }
    }
  },
  mounted() {
    const iframe = this.$refs.projectIframe as HTMLIFrameElement | undefined
    if (iframe) {
      const rootEl = (this.$el as HTMLElement).querySelector('.carousel') || null
      this.iframeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.originalAutoplay = this.config.autoplay || 0
            this.config.autoplay = 0
          } else {
            this.config.autoplay = this.originalAutoplay || 4000
          }
        })
      }, {root: rootEl, threshold: 0.5})
      this.iframeObserver.observe(iframe)
    }
  },
  beforeUnmount() {
    if (this.iframeObserver) {
      this.iframeObserver.disconnect()
      this.iframeObserver = null
    }
  },
  methods: {
    emitClick(image: string) {
      this.$emit('image-click', image)
    }
  }
})
</script>

<template>
  <Carousel v-bind="config" class="carousel cursor-pointer">
    <Slide v-if="project.video">
      <div class="rounded-2xl w-full h-auto overflow-hidden">
        <iframe
            ref="projectIframe"
            :src="project.video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            loading="lazy"
            class="w-full aspect-video"
        ></iframe>
      </div>
    </Slide>
    <Slide v-for="(image, idx) in project.images" :key="idx" class="flex items-center justify-center" @click="emitClick(image)">
      <img :src="image" :alt="project.title" class="rounded-2xl"/>
    </Slide>
    <template #addons>
      <CarouselNavigation/>
      <CarouselPagination/>
    </template>
  </Carousel>
</template>

<style scoped>
.carousel {
  --vc-nav-background: rgba(0, 0, 0, 0.3);
  --vc-nav-color: white;
  --vc-nav-color-hover: #5ec0ff;
  --vc-nav-border-radius: 20%;
  --vc-nav-width: 40px;
  --vc-nav-height: 40px;

  --vc-pgn-background-color: white;
  --vc-pgn-active-color: #5ec0ff;
  --vc-pgn-border-radius: 5px;
  --vc-pgn-height: 5px;
  --vc-pgn-width: 10px;
  --vc-png-bottom: 0px;
}

.carousel__pagination {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 10px;
}
</style>