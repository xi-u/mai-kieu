<script lang="ts">
import {defineComponent} from 'vue'
import Navigation from "./ui/Navigation.vue";

export default defineComponent({
  name: "MainContent",
  components: {Navigation}
})
</script>

<template>
  <section class="bg-black-light h-auto w-full rounded-4xl relative overflow-hidden border-primary border-2">
    <Navigation class="absolute right-0"/>
    <div class="p-12">
      <router-view/>
    </div>
  </section>
</template>
