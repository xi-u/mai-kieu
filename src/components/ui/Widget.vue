<script lang="js">
import {defineComponent} from 'vue'
import {skills} from '/src/data/skills.js'

export default defineComponent({
  name: "Widget",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    skillData() {
      return skills[this.name] || {};
    }
  }
})
</script>

<template>
  <li class="flex flex-col items-center gap-1">
    <figure class="h-30 w-30 hover:scale-105 transition-transform duration-800 ease-out rounded-3xl
    shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
            :style="{ backgroundColor: skillData.bg }">
      <img :src="skillData.logo" :alt="name" :title="name" class="object-cover w-full h-full rounded-3xl"/>
    </figure>
    <p class="text-white-dark">{{ name }}</p>
  </li>
</template>
