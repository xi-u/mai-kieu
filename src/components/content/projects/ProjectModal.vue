<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ProjectModal",
  props: {
    image: {
      type: String,
      required: true
    },
    showModal: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('update:showModal', false)
    },
    onKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        this.close()
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', this.onKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.onKeydown)
  },
})
</script>

<template>
  <transition name="fade">
    <div @click="close"
         class="fixed top-0 left-0 w-full h-full z-100 flex items-center justify-center bg-black/50 backdrop-blur-xs">
      <img :src="image" alt="Project Image" class="w-1/2 rounded-xl"/>
      <button @click="close" class="absolute top-8 right-8 text-white text-4xl font-bold hover:text-primary
      transition-colors">
        ✕
      </button>
    </div>
  </transition>
</template>
