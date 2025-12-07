<script lang="ts">
import {defineComponent} from 'vue'
import {projects} from '/src/data/projects.js'
import Back from "../../icons/Back.vue";
import Divider from "../ui/Divider.vue";

export default defineComponent({
  name: "ProjectDetail",
  components: {Divider, Back},
  data() {
    return {
      project: null
    }
  },
  created() {
    const projectId = Number(this.$route.params.id)
    this.project = projects.find(project => project.id === projectId) || null
    console.log(this.project)
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
    <p class="text-white-dark">{{ project.date }}</p>
    <img :src="project.thumbnail" :alt="project?.title" class="w-full h-auto rounded-2xl mb-6"/>
    <p class="font-poppins-light text-md whitespace-pre-line">
      {{ this.project.fullDescription }}
    </p>
  </section>
</template>
