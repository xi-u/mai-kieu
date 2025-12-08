<script lang="ts">
import {defineComponent} from 'vue'
import Divider from "../ui/Divider.vue";
import Skills from "../about-me/Skills.vue";
import ProjectList from "./ProjectList.vue";
import Code from "../../icons/Code.vue";

export default defineComponent({
  name: "Projects",
  components: {Code, ProjectList, Skills, Divider}
})
</script>

<template>
  <section class="text-white-light flex flex-col">
    <header class="flex flex-row items-center gap-4">
      <Code class="text-secondary w-8 h-8"/>
    <h1 class="text-4xl font-bold">Projects</h1>
    </header>
    <Divider/>
    <div class="flex flex-col gap-12">
      <p class=" text-md font-poppins-light">
        During my studies and personal time, I have worked on various projects that showcase my skills and passion for
        software development. Here are some of the projects I have been involved in:
      </p>
      <ProjectList/>
    </div>
  </section>
</template>
