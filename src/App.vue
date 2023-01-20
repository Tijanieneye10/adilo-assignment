<script setup>
// import { RouterLink, RouterView } from "vue-router";

import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";
</script>

<template>
  <TheHeader />

  <main class="w-screen">
    <div class="flex">
      <TheSidebar />
      <div class="flex-grow bg-white h-screen px-10 py-4">
        <RouterView />
      </div>
    </div>
  </main>
</template>
