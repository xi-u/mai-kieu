<script lang="ts">
import {defineComponent} from 'vue'
import Navigation from "../ui/Navigation.vue";

export default defineComponent({
  name: "MainContent",
  components: {Navigation}
})
</script>

<template>
  <section class="bg-black-light h-auto w-full rounded-4xl relative overflow-hidden border-primary border-2">
    <Navigation class="absolute right-0"/>
    <div class="p-12 mt-20 md:mt-0">
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
