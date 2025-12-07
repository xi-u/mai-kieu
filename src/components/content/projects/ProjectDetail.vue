<script lang="ts">
import {defineComponent} from 'vue'
import {projects} from '/src/data/projects.js'

export default defineComponent({
  name: "ProjectDetail",
  data() {
    return {
      project: null
    }
  },
  created() {
    const projectId = this.$route.params.id
    this.project = projects.find(project => project.id === projectId) || null
  }
})
</script>

<template>
  <article>
    <img :src="project?.thumbnail" :alt="project?.title" class="w-full h-auto rounded-2xl mb-6"/>
  </article>
</template>
