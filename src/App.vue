<script setup>
import SideBar from "./components/sidebar/SideBar.vue";
import MainContent from "./components/content/MainContent.vue";
</script>

<template>
  <main class="flex flex-col 2xl:flex-row gap-6 sm:gap-8 lg:gap-10 w-full max-w-375 mx-auto mt-6 sm:mt-12 lg:mt-25 px-4 sm:px-6 lg:px-8">
    <!--  Sidebar-->
    <SideBar/>
    <!--  Main content-->
    <MainContent/>
  </main>
</template>
