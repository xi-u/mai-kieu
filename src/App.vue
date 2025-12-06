<script setup>
import SideBar from "./components/sidebar/SideBar.vue";
import MainContent from "./components/content/MainContent.vue";
</script>

<template>
  <section class="flex items-center justify-center h-screen w-screen">
    <main class="flex flex-row gap-10 w-375">
      <!--  Sidebar-->
      <SideBar/>
      <!--  Main content-->
      <MainContent/>
    </main>
  </section>
</template>
