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
  <ul class="flex flex-col xl:flex-row 2xl:flex-col gap-6 sm:gap-16 2xl:gap-3 font-poppins-light">
    <li class="flex flex-row hover-effect">
      <figure class="bg-black-lighter w-12 h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
        <Email class="text-primary w-6"/>
      </figure>
      <div class="text-white-light flex flex-col ml-4 justify-center">
        <p class="text-white-dark font-extrabold text-xs">EMAIL</p>
        <p class="text-sm sm:text-base break-all">kieumai3@gmail.com</p>
      </div>
    </li>

    <li class="flex flex-row hover-effect">
      <figure class="bg-black-lighter w-12 h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
        <Phone class="text-primary w-6"/>
      </figure>
      <div class="text-white-light flex flex-col ml-4 justify-center">
        <p class="text-white-dark font-extrabold text-xs">PHONE</p>
        <p class="text-sm sm:text-base">+31 6 84 92 30 21</p>
      </div>
    </li>

    <li class="flex flex-row hover-effect">
      <figure class="bg-black-lighter w-12 h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
        <LinkedIn class="text-primary w-6"/>
      </figure>
      <div class="text-white-light flex flex-col ml-4 justify-center">
        <p class="text-white-dark font-extrabold text-xs">LINKEDIN</p>
        <p class="text-xs">
          <a href="https://www.linkedin.com/in/mai-kieu-832a69391/" target="_blank" class="hover:underline break-all">
            www.linkedin.com/...
          </a>
        </p>
      </div>
    </li>
  </ul>
</template>

