```vue
<script lang="ts">
import { defineComponent } from 'vue'
import { projects } from '/src/data/projects.js'
import Back from "../../icons/Back.vue";
import Divider from "../ui/Divider.vue";
import Widget from "../ui/Widget.vue";
import { Carousel, Slide, Navigation as CarouselNavigation, Pagination as CarouselPagination } from 'vue3-carousel'

export default defineComponent({
  name: "ProjectDetail",
  components: { Slide, Carousel, Widget, Divider, Back, CarouselNavigation, CarouselPagination },
  data() {
    return {
      project: null as any,
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
  computed: {
    currentProject() {
      return this.project
    }
  },
  created() {
    const projectId = Number(this.$route.params.id)
    this.project = projects.find((project: any) => project.id === projectId) || null
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
      }, { root: rootEl, threshold: 0.5 })
      this.iframeObserver.observe(iframe)
    }
  },
  beforeUnmount() {
    if (this.iframeObserver) {
      this.iframeObserver.disconnect()
      this.iframeObserver = null
    }
  },
})
</script>

<template>
  <section class="text-white-light flex flex-col">
    <header class="flex flex-row gap-3">
      <router-link to="/projects" class="hover:scale-115 transition-transform duration-300">
        <Back class="text-primary w-8 h-8 -ml-3"/>
      </router-link>
      <h1 class="text-4xl font-bold">{{ currentProject.title }}</h1>
    </header>
    <Divider/>
    <div class="flex flex-col gap-4">
      <p class="text-white-dark">{{ project.date }}</p>
      <Carousel v-bind="config" class="carousel">
        <Slide v-if="currentProject.video">
          <div class="rounded-2xl w-full h-auto overflow-hidden">
            <iframe
                ref="projectIframe"
                :src="currentProject.video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                loading="lazy"
                class="w-full aspect-video"
            ></iframe>
          </div>
        </Slide>
        <Slide v-for="(image, idx) in project.images" :key="idx" class="flex items-center justify-center">
          <img :src="image" :alt="currentProject.title" class="rounded-2xl"/>
        </Slide>
        <template #addons>
          <CarouselNavigation/>
          <CarouselPagination/>
        </template>
      </Carousel>
      <p class="font-poppins-light text-md whitespace-pre-line mb-4">
        {{ currentProject.fullDescription }}
      </p>
      <h2 class="text-2xl font-bold">Technologies Used</h2>
      <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 mt-4 sm:mt-6">
        <li v-for="skill in project.technologies" :key="skill">
          <Widget :name="skill"/>
        </li>
      </ul>
    </div>
  </section>
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
