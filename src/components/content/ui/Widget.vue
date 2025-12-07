<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Widget",
  props: {
    logo: {
      type: String,
      required: true
    },
    bg: {
      type: String,
      required: false,
    }
  }
})
</script>

<template>
  <li class="flex flex-col items-center gap-1 ">
    <figure class="h-30 w-30 hover:scale-105 transition-transform duration-800 ease-out rounded-3xl
    shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
            :style="{ backgroundColor: bg }">
      <slot name="logo"></slot>
    </figure>
    <p class="text-white-dark">{{ logo }}</p>
  </li>
</template>
