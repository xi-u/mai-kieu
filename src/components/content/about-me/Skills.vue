<script lang="ts">
import {defineComponent} from 'vue'
import Widget from "../../ui/Widget.vue";

export default defineComponent({
  name: "Skills",
  components: {Widget}
})
</script>

<template>
  <div>
    <h2 class="text-2xl sm:text-3xl font-bold">Skills</h2>
    <p class="text-xs sm:text-sm text-white-dark">Technologies I've worked with</p>
    <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 mt-4 sm:mt-6">
      <Widget name="HTML"/>
      <Widget name="CSS"/>
      <Widget name="JavaScript"/>
      <Widget name="TypeScript"/>
      <Widget name="Tailwind CSS"/>
      <Widget name="Vue.js"/>
      <Widget name="Vite"/>
      <Widget name="Node.js"/>
      <Widget name="Express.js"/>
      <Widget name="Java"/>
      <Widget name="Spring Boot"/>
      <Widget name="mySQL"/>
      <Widget name="JPA Hibernate"/>
      <Widget name="VSCode"/>
      <Widget name="IntelliJ IDEA"/>
      <Widget name="Git"/>
      <Widget name="Docker"/>
      <Widget name="Figma"/>
    </ul>
  </div>
</template>
