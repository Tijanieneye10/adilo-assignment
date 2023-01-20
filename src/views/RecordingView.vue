<script setup>
import ModalComp from "@/components/ModalComp.vue";
import BreadCrumb from "../components/BreadCrumb.vue";
</script>
<template>
  <BreadCrumb />
  <div
    class="flex flex-col justify-center items-center border-2 border-dashed border-slate-400 rounded-2xl py-10 gap-8 ml-8 mr-32"
  >
    <img
      class="w-[10rem]"
      src="https://img.3ptechies.com/wp-content/uploads/folder-icon-512x512.png"
      alt="Folder image"
    />
    <div class="mt-y">
      <h2 class="text-lg font-medium text-center">Say hello to the world!</h2>
      <p class="text-center text-sm text-slate-500">
        Record your video/audio and share it with your team, friends, <br />
        followers and customers
      </p>
    </div>
    <div class="flex gap-5">
      <label
        for="my-modal-3"
        class="cursor-pointer flex justify-center gap-1 items-center text-white border-2 border-red-500 bg-red-500 px-4 py-1 rounded-full"
      >
        <span class="material-symbols-outlined"> record_voice_over </span>
        Start Recording</label
      >
      <button
        class="flex justify-center gap-1 items-center text-white border-2 border-[#0DABD8] bg-[#0DABD8] px-4 py-1 rounded-full"
      >
        <span class="material-symbols-outlined"> videocam </span>
        New Request
      </button>
    </div>
  </div>

  <ModalComp />
</template>
