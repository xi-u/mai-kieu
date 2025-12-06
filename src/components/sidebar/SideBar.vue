<script lang="ts">
import {defineComponent} from 'vue'
import SideBarInfo from "./SideBarInfo.vue";
import SideBarContact from "./SideBarContact.vue";

/**
 * SideBar component
 */
export default defineComponent({
  name: "SideBar",
  components: {SideBarContact, SideBarInfo}
})
</script>

<template>
  <aside class="bg-black-light 2xl:w-125 2xl:h-200 rounded-4xl flex flex-col  md:flex-row 2xl:flex-col border-primary border-2">
    <!--  Side bar info, about me-->
    <section class="flex flex-col items-center justify-center gap-4 p-20 pb-8">
      <SideBarInfo/>
    </section>
    <!--    Side bar info, contact-->
    <section class="flex flex-col items-center justify-center">
      <SideBarContact/>
    </section>
  </aside>
</template>
