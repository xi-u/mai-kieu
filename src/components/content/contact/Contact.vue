<script lang="ts">
import {defineComponent} from 'vue'
import Divider from "../ui/Divider.vue";
import ProjectList from "../projects/ProjectList.vue";
import Send from "../../icons/Send.vue";
import ContactUs from "../../icons/ContactUs.vue";

export default defineComponent({
  name: "Contact",
  components: {ContactUs, Send, ProjectList, Divider},
})
</script>

<template>
  <section class="text-white-light flex flex-col">
    <header class="flex flex-row items-center gap-4">
      <ContactUs class="text-secondary h-8 w-8"/>
      <h1 class="text-4xl font-bold">Contact</h1>
    </header>
    <Divider/>
    <div class="flex flex-col gap-12">
      <p class=" text-md font-poppins-light">
        Feel free to reach out to me for any questions, collaborations, or just to say hello! Simply fill
        in the form below, or send me an email.
      </p>

      <form action="https://formspree.io/f/xgvglonl" method="POST"
            class="flex flex-col gap-8 ">
        <div class="flex flex-row items-center justify-center gap-8">
          <input type="text" name="name" placeholder="Name" required
                 class="border-black-lighter border-2 p-4 rounded-xl w-full focus-effect">
          <input type="email" name="email" placeholder="Email adress" required
                 class="border-black-lighter border-2 p-4 rounded-xl w-full focus-effect">
        </div>
        <textarea name="message" placeholder="Message" required
                  class="border-black-lighter border-2 p-4 rounded-xl h-[200px] focus-effect"></textarea>
        <div class="p-[2px] rounded-xl bg-gradient-to-r from-primary to-secondary w-1/6 ml-auto hover-effect">
          <button
              type="submit"
              class="bg-black-lighter text-white-light py-4 rounded-xl w-full hover:bg-black-light duration-400
           shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-row items-center justify-center gap-4">
            <Send class="text-white-light w-6 h-6"/>
            Send
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
