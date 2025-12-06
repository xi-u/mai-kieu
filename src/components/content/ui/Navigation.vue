<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Navigation",
  data() {
    return {
      indicator: null as HTMLElement | null
    }
  },
  mounted() {
    this.indicator = this.$refs.indicator as HTMLElement
  },
  methods: {
    moveIndicator(e: Event) {
      const target = e.currentTarget as HTMLElement
      if (this.indicator) {
        this.indicator.style.width = '0px'
        setTimeout(() => {
          if (this.indicator) {
            this.indicator.style.left = `${target.offsetLeft}px`
            this.indicator.style.width = `${target.offsetWidth}px`
          }
        }, 100)
      }
    }
  }
})
</script>

<template>
  <nav>
    <ul class="flex gap-6 text-white-light bg-black-lighter h-20 items-center justify-center rounded-bl-4xl py-8
    px-12 border-primary border-2">
      <span ref="indicator" class="absolute bg-primary transition-all ease duration-400 h-1 bottom-5 rounded-xl"></span>
      <li>
        <router-link to="/mai-kieu/about" @mouseenter="moveIndicator" active-class="!text-primary">About</router-link>
      </li>
      <li>
        <router-link to="/mai-kieu/projects" @mouseenter="moveIndicator" active-class="!text-primary">Projects</router-link>
      </li>
      <li>
        <router-link to="/mai-kieu/contact" @mouseenter="moveIndicator" active-class="!text-primary">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>
