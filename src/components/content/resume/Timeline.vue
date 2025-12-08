<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Timeline",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
})
</script>

<template>
  <section class="flex flex-col relative pl-8  mb-6">
    <div class="absolute left-3.5 top-0 w-1 h-full
            bg-gradient-to-b from-primary to-secondary rounded-xl"></div>

    <div class="flex flex-row items-start gap-1 relative mb-8" v-for="(item, index) in items" :key="index">
      <div class="w-4 h-4 absolute -left-6 bg-secondary rounded-full mt-1.5"></div>
      <div class="flex flex-col gap-1 ml-8">
        <p class="font-bold text-primary">{{ item.date }}</p>
        <p class="font-poppins-light">{{ item.title }}</p>
        <p class="text-white-dark text-sm" v-if="item.subtitle">{{ item.subtitle }}</p>
        <p class="text-white-dark text-xs font-poppins-light" v-if="item.description">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>
