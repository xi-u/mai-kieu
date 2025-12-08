<script lang="js">
import {defineComponent} from 'vue'
import {projects} from '/src/data/projects.js'
import Back from "../../icons/Back.vue";
import Divider from "../ui/Divider.vue";
import Widget from "../ui/Widget.vue";
import ProjectCarousel from "./ProjectCarousel.vue";
import ProjectModal from "./ProjectModal.vue";
import NewWindow from "../../icons/NewWindow.vue";

export default defineComponent({
  name: "ProjectDetail",
  components: {NewWindow, ProjectModal, ProjectCarousel, Divider, Back, Widget},
  data() {
    return {
      project: null,
      showModal: false,
      modalImage: null
    }
  },
  computed: {
    currentProject() {
      return this.project
    }
  },
  created() {
    const projectId = Number(this.$route.params.id)
    this.project = projects.find(project => project.id === projectId) || null
  },
  methods: {
    openModal(image) {
      this.modalImage = image
      this.showModal = true
    }
  }
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
      <ProjectCarousel :project="currentProject" @image-click="openModal"/>
      <ProjectModal v-if="showModal" v-model:showModal="showModal" :image="modalImage"/>
      <p class="font-poppins-light text-md whitespace-pre-line ">
        {{ currentProject.fullDescription }}
      </p>
      <a v-if="currentProject.link" :href="currentProject.link" target="_blank"
         class="text-primary underline mb-4 flex flex-row items-center gap-2 hover:text-primary/80 transition-colors duration-300">
        <NewWindow class="w-4 h-4"/>
        Visit Project Link
      </a>
      <h2 class="text-2xl font-bold">Technologies Used</h2>

      <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 mt-4 sm:mt-6">
        <li v-for="skill in project.technologies" :key="skill">
          <Widget :name="skill"/>
        </li>
      </ul>
    </div>
  </section>
</template>

