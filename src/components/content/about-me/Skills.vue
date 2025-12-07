<script lang="ts">
import {defineComponent} from 'vue'
import Widget from "../ui/Widget.vue";

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
      <Widget logo="HTML">
        <template #logo>
          <img src="/src/assets/img/logo/html.png" alt="HTML" class="object-cover w-full h-full rounded-3xl"/>
        </template>
      </Widget>
      <Widget logo="CSS">
        <template #logo>
          <img src="/src/assets/img/logo/css.png" alt="CSS" class="object-cover w-full h-full rounded-3xl"/>
        </template>
      </Widget>
      <Widget logo="JavaScript">
        <template #logo>
          <img src="/src/assets/img/logo/js.png" alt="JavaScript" class="object-cover w-full h-full rounded-3xl"/>
        </template>
      </Widget>
      <Widget logo="TypeScript">
        <template #logo>
          <img src="/src/assets/img/logo/ts.png" alt="TypeScript" class="object-cover w-full h-full rounded-3xl"/>
        </template>
      </Widget>
      <Widget logo="Tailwind CSS">
        <template #logo>
          <img src="/src/assets/img/logo/tailwind.png" alt="Tailwind CSS"
               class="object-cover w-full h-full rounded-3xl"/>
        </template>
      </Widget>
      <Widget logo="Vue.js">
        <template #logo>
          <img src="/src/assets/img/logo/vue.png" alt="Vue" class="object-cover w-full h-full rounded-3xl"/>
        </template>
      </Widget>
      <Widget logo="Vite">
        <template #logo>
          <img src="/src/assets/img/logo/vite.png" alt="Vite" class="object-cover w-full h-full rounded-3xl"/>
        </template>
      </Widget>
      <Widget logo="Node.js" bg="#8CC500">
        <template #logo>
          <img src="/src/assets/img/logo/nodejs.png" alt="Node.js" class="object-cover w-full h-full rounded-3xl"/>
        </template>
      </Widget>
      <Widget logo="Express.js" bg="#ffffff">
        <template #logo>
          <img src="/src/assets/img/logo/express.png" alt="Express.js" class="object-cover w-full h-full rounded-3xl"/>
        </template>
      </Widget>
      <Widget logo="Java" bg="#ffffff">
        <template #logo>
          <img src="/src/assets/img/logo/java.png" alt="Java" class="object-cover w-full h-full rounded-3xl"/>
        </template>
      </Widget>
      <Widget logo="Spring Boot" bg="#6DB33F">
        <template #logo>
          <img src="/src/assets/img/logo/springboot.png" alt="Spring Boot"
               class="object-cover w-full h-full rounded-3xl"/>
        </template>
      </Widget>
      <Widget logo="mySQL" bg="#4479A1">
        <template #logo>
          <img src="/src/assets/img/logo/sql.png" alt="mySQL" class="object-cover w-full h-full rounded-3xl"/>
        </template>
      </Widget>
      <Widget logo="JPA Hibernate">
        <template #logo>
          <img src="/src/assets/img/logo/jpa.png" alt="JPA Hibernate" class="object-cover w-full h-full rounded-3xl"/>
        </template>
      </Widget>
      <Widget logo="VSCode">
        <template #logo>
          <img src="/src/assets/img/logo/vscode.png" alt="VSCode" class="object-cover w-full h-full rounded-3xl"/>
        </template>
      </Widget>
      <Widget logo="IntelliJ IDEA">
        <template #logo>
          <img src="/src/assets/img/logo/intellij.png" alt="Intellij IDEA"
               class="object-cover w-full h-full rounded-3xl"/>
        </template>
      </Widget>
      <Widget logo="Git" bg="#F05032">
        <template #logo>
          <img src="/src/assets/img/logo/git.png" alt="Git" class="object-cover w-full h-full rounded-3xl"/>
        </template>
      </Widget>
      <Widget logo="Docker" bg="#0091E2">
        <template #logo>
          <img src="/src/assets/img/logo/docker.png" alt="Docker" class="object-cover w-full h-full rounded-3xl"/>
        </template>
      </Widget>
      <Widget logo="Figma">
        <template #logo>
          <img src="/src/assets/img/logo/figma.png" alt="Figma" class="object-cover w-full h-full rounded-3xl"/>
        </template>
      </Widget>
    </ul>
  </div>
</template>
