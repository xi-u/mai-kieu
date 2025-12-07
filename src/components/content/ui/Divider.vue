<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Divider"
})
</script>

<template>
  <div class="flex flex-row gap-2 py-4">
    <span class="w-6 h-2 rounded-full bg-secondary"></span>
    <span class="w-4 h-2 rounded-full bg-secondary"></span>
    <span class="w-2 h-2 rounded-full bg-secondary"></span>
  </div>

</template>
