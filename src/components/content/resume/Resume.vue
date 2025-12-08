<script lang="ts">
import {defineComponent} from 'vue'
import Divider from "../ui/Divider.vue";
import Code from "../../icons/Code.vue";
import ProjectList from "../projects/ProjectList.vue";
import EducationCap from "../../icons/EducationCap.vue";

export default defineComponent({
  name: "Education",
  components: {EducationCap, ProjectList, Code, Divider}
})
</script>

<template>
  <section class="text-white-light flex flex-col">
    <header class="flex flex-row items-center gap-4">
      <EducationCap class="text-secondary w-9 h-9"/>
      <h1 class="text-4xl font-bold">Education</h1>
    </header>
    <Divider/>

    <div class="flex flex-col relative pl-8 mt-12">
      <div class="absolute left-4 top-0 w-1 h-full
            bg-gradient-to-b from-primary to-secondary rounded-xl"></div>

      <div class="flex items-start gap-4 relative mb-8">
        <div class="w-4 h-4 bg-secondary rounded-full mt-1.5"></div>
        <div>
          <p class="font-bold text-primary">2024 - Present</p>
          <p class="font-poppins-light">Amsterdam University of Applied Sciences (Hogeschool van Amsterdam)</p>
          <p class="text-white-dark text-sm mt-1">HBO-ICT - Software Engineering</p>
          <p class="text-white-dark text-xs font-poppins-light mt-1">
            Propedeuse completed cum laude <br><br>
            Currently in the 2nd year of the Bachelor's program
          </p>
        </div>
      </div>

      <div class="flex items-start gap-4 relative mb-8">
        <div class="w-4 h-4 bg-secondary rounded-full mt-1.5"></div>
        <div>
          <p class="font-bold text-primary">2019 - 2024</p>
          <p class="font-poppins-light">Helen Parkhurst</p>
          <p class="text-white-dark text-sm mt-1">HAVO N&T</p>
          <p class="text-white-dark text-xs font-poppins-light mt-1">
            HAVO completed cum laude
          </p>
        </div>
      </div>
    </div>

  </section>
</template>
