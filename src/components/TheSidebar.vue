<script setup></script>
<template>
  <div class="w-[20%] bg-[#EBF2F6] px-5 py-8 h-screen">
    <ul class="my-4">
      <li
        class="px-6 py-2 mb-4 rounded-lg bg-slate-300 flex justify-start items-center gap-3 text-slate-500 hover:bg-slate-400 transition-all duration-200"
      >
        <span class="material-symbols-outlined"> movie </span>

        <RouterLink to="/">My Recordings</RouterLink>
      </li>
      <li
        class="px-6 py-2 mb-4 rounded-lg text-slate-500 flex justify-start gap-3 items-center hover:bg-slate-400 transition-all duration-200"
      >
        <span class="material-symbols-outlined"> share </span>
        <a href="">Share</a>
      </li>
    </ul>
  </div>
</template>
