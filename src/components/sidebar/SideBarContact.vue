<script lang="ts">
import {defineComponent} from 'vue'
import Email from "../icons/Email.vue";
import Phone from "../icons/Phone.vue";
import LinkedIn from "../icons/LinkedIn.vue";

export default defineComponent({
  name: "SideBarContact",
  components: {LinkedIn, Phone, Email}
})
</script>

<template>
  <ul class="flex flex-col gap-3">
    <li class="flex flex-row hover-effect">
      <figure class="bg-black-lighter w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
        <Email class="text-primary w-6"/>
      </figure>
      <div class="text-white-light flex flex-col ml-4 justify-center">
        <p class="text-white-dark text-xs">EMAIL</p>
        <p>kieumai3@gmail.com</p>
      </div>
    </li>

    <li class="flex flex-row hover-effect">
      <figure class="bg-black-lighter w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
        <Phone class="text-primary w-6"/>
      </figure>
      <div class="text-white-light flex flex-col ml-4 justify-center">
        <p class="text-white-dark text-xs">PHONE</p>
        <p>+31 6 84 92 30 21</p>
      </div>
    </li>

    <li class="flex flex-row hover-effect">
      <figure class="bg-black-lighter w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
        <LinkedIn class="text-primary w-6"/>
      </figure>
      <div class="text-white-light flex flex-col ml-4 justify-center">
        <p class="text-white-dark text-xs">LINKEDIN</p>
        <p class="text-xs">
          <a href="https://www.linkedin.com/in/mai-kieu-832a69391/" target="_blank" class="hover:underline">
            www.linkedin.com/...
          </a>
        </p>
      </div>
    </li>
  </ul>
</template>
