<script lang="js">
import {defineComponent} from 'vue'
import {projects} from '/src/data/projects.js'

export default defineComponent({
  name: "ProjectList",
  data() {
    return {
      projects
    }
  }
})
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <router-link
        v-for="project in projects"
        :key="project.id"
        :to="`/project/${project.id}`"
        class="block">
      <div class="flex flex-col gap-2">
        <figure class="group overflow-hidden shadow-md rounded-2xl
        ease-in-out w-70 h-40 relative">
          <img :src="project?.thumbnail" :alt="project?.title" class="rounded-2xl object-cover w-full h-full
           transition-transform duration-500 group-hover:scale-105"/>
          <div class="absolute top-0 w-full h-full bg-black/60 flex items-center justify-center
              opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p class="">View more</p>
          </div>
        </figure>
        <h2 class="text-lg">{{ project.title }}</h2>
        <p class="text-sm font-poppins-light text-white-dark">{{ project.description }}</p>
      </div>
    </router-link>

  </section>
</template>
