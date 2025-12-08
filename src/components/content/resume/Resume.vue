<script lang="ts">
import {defineComponent} from 'vue'
import Divider from "../ui/Divider.vue";
import Code from "../../icons/Code.vue";
import ProjectList from "../projects/ProjectList.vue";
import EducationCap from "../../icons/EducationCap.vue";
import PersonCard from "../../icons/PersonCard.vue";
import Work from "../../icons/Work.vue";
import {education} from "/src/data/education";
import {work} from "/src/data/work";
import Timeline from "./Timeline.vue";

export default defineComponent({
  name: "Resume",
  components: {Timeline, Work, PersonCard, EducationCap, ProjectList, Code, Divider},
  data() {
    return {
      education,
      work
    }
  }
})
</script>

<template>
  <section class="text-white-light flex flex-col">
    <header class="flex flex-row items-center gap-4">
      <PersonCard class="text-secondary w-9 h-9"/>
      <h1 class="text-4xl font-bold">Resume</h1>
    </header>
    <Divider/>

    <div class=" flex flex-row items-center gap-4 mt-6">
      <EducationCap class="text-primary w-8 h-8"/>
      <h2 class="text-2xl font-bold ml-4">Education</h2>
    </div>
    <Timeline :items="education"/>

    <div class=" flex flex-row items-center gap-4 mt-6">
      <Work class="text-primary w-8 h-8"/>
      <h2 class="text-2xl font-bold ml-4">Work Experience</h2>
    </div>
    <Timeline :items="work"/>

  </section>
</template>
