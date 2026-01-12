<script lang="ts">
import {defineComponent} from 'vue'
import NewWindow from "../icons/NewWindow.vue";

export default defineComponent({
  name: "Link",
  components: {NewWindow},
  props: {
    href: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: false,
      default: "Visit Project Link"
    }
  }

})
</script>

<template>
  <a :href="href" target="_blank"
     class="mb-4 flex flex-row items-center gap-2 link">
    <NewWindow class="w-4 h-4"/>
    {{ text }}
  </a>
</template>