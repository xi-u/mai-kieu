<script lang="ts">
import {defineComponent} from 'vue'

/**
 * SideBar component
 */
export default defineComponent({
  name: "SideBar"
})
</script>

<template>
  <aside class="bg-black-light w-125 h-200 rounded-2xl">
    <!--  Side bar info, about me-->
    <section class="flex flex-col items-center justify-center gap-4 p-20">
      <figure class="bg-black-lighter w-60 h-60 flex items-center justify-center rounded-2xl">
        <img src="../assets/img/mai2.png" alt="Picture of Mai Kieu"
             class="rounded-2xl w-50 h-50"/>
      </figure>
      <div class="flex flex-col items-center justify-center gap-2 text-white-light w-full">
        <h2 class="font-poppins font-bold text-3xl ">Mai Kieu</h2>
        <p class="font-poppins text-xs bg-black-lighter p-2 rounded-lg text-white-dark">Student Software Engineering</p>
        <hr class="border-white-dark w-full opacity-30 mt-6"/>
      </div>
    </section>
    <!--    Side bar info, contact-->
    <section>
    </section>
  </aside>
</template>
