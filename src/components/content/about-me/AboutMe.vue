<script lang="ts">
import {defineComponent} from 'vue'
import Divider from "../ui/Divider.vue";
import Skills from "./Skills.vue";

export default defineComponent({
  name: "AboutMe",
  components: {Skills, Divider}
})
</script>

<template>
  <section class="text-white-light flex flex-col">
    <h1 class="text-4xl font-bold">About Me</h1>
      <Divider/>
    <div class="flex flex-col gap-12">
      <p class=" text-md font-poppins-light">
        Hi, I'm Mai, a second-year HBO ICT Software Engineering student at Amsterdam University of Applied Sciences.
        I have a strong passion for technology and enjoy building fun, interactive user interfaces and web applications.
        I am very enthusiastic about gaining new knowledge and continuously expanding my skills.
        I am driven to grow into a skilled software developer who contributes to innovative and user-friendly solutions.
      </p>
      <Skills/>
    </div>
  </section>
</template>
