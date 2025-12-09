<script lang="js">
import {defineComponent} from 'vue'
import {skills} from '/src/data/skills.js'

export default defineComponent({
  name: "Widget",
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: "h-30 w-30"
    },
    label: {
      type: Boolean,
      required: false,
      default: true
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
    <figure :class="size" class="hover:scale-105 transition-transform duration-800 ease-out rounded-3xl
    shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
            :style="{ backgroundColor: skillData.bg }">
      <img :src="skillData.logo" :alt="name" :title="name" class="object-cover w-full h-full rounded-3xl"/>
    </figure>
    <p v-if="label === true" class="text-white-dark">{{ name }}</p>
  </li>
</template>
