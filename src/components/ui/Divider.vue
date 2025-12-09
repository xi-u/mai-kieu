<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Divider"
})
</script>

<template>
  <div class="flex flex-row gap-2 py-4">
    <div class="w-24 h-2 rounded-xl
            bg-[linear-gradient(to_right,var(--color-secondary),var(--color-primary),var(--color-black-light))]">
    </div>
  </div>

</template>
