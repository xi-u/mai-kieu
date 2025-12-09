<script lang="ts">
import {defineComponent} from 'vue'
import Widget from "../ui/Widget.vue";

export default defineComponent({
  name: "Footer",
  components: {Widget}
})
</script>

<template>
  <footer class="text-white-dark flex flex-col items-center gap-4 my-6 opacity-30">
    <p>
      © 2025 Mai Kieu
    </p>
    <p>
      Made with
    </p>
    <div class="flex flex-row gap-4 items-center">
      <Widget name="Vue.js" size="w-20 h-20" :label="false"/>
      <Widget name="JavaScript" size="w-20 h-20" :label="false"/>
      <Widget name="Tailwind CSS" size="w-20 h-20" :label="false"/>
    </div>
  </footer>
</template>
