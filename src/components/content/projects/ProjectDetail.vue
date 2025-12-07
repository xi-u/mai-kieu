<script lang="ts">
import {defineComponent} from 'vue'
import {projects} from '/src/data/projects.js'
import Back from "../../icons/Back.vue";
import Divider from "../ui/Divider.vue";
import Widget from "../ui/Widget.vue";

export default defineComponent({
  name: "ProjectDetail",
  components: {Widget, Divider, Back},
  data() {
    return {
      project: null
    }
  },
  created() {
    const projectId = Number(this.$route.params.id)
    this.project = projects.find(project => project.id === projectId) || null
  }
})
</script>

<template>
  <section class="text-white-light flex flex-col">
    <header class="flex flex-row gap-3">
      <router-link to="/projects" class="hover:scale-115 transition-transform duration-300">
        <Back class="text-primary w-8 h-8 -ml-3"/>
      </router-link>
      <h1 class="text-4xl font-bold">{{ this.project.title }}</h1>
    </header>
      <Divider/>
    <div class="flex flex-col gap-4">
      <p class="text-white-dark">{{ project.date }}</p>
      <img :src="project.thumbnail" :alt="project?.title" class="w-full h-auto rounded-2xl mb-6"/>
      <p class="font-poppins-light text-md whitespace-pre-line mb-4">
        {{ this.project.fullDescription }}
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
