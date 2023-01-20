<script setup></script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box !p-0 !w-[24%] relative">
      <div class="flex justify-between border-b border-slate-300 p-5 pb-2">
        <h4 class="text-xl font-bold">New Recording</h4>
        <label for="my-modal-3" class="text-lg font-bold cursor-pointer"
          >✕</label
        >
      </div>
      <div class="p-5">
        <label for="project" class="text-slate-500"
          >Save the recordings in</label
        >
        <select
          name=""
          id=""
          class="h-[2.5rem] w-full border border-slate-300 rounded-lg mt-2"
        >
          <option value="" disabled selected>Select a project</option>
          <option value="" disabled>Desktop</option>
          <option value="" disabled>Documents</option>
        </select>

        <div class="flex justify-between mt-4">
          <p class="font-medium text-slate-400">Record screen</p>
          <input type="checkbox" class="toggle toggle-success" checked />
        </div>
        <div class="flex justify-between mt-4">
          <p class="font-medium text-slate-400">Record camera</p>
          <input type="checkbox" class="toggle toggle-success" checked />
        </div>
        <div class="flex justify-between mt-4">
          <p class="font-medium text-slate-400">Record mic</p>
          <input type="checkbox" class="toggle toggle-success" />
        </div>

        <RouterLink
          to="/record"
          class="inline-block text-center w-full px-2 py-2 rounded-full bg-[#0DABD8] mt-5 text-white"
        >
          Start Recording
        </RouterLink>
      </div>
    </div>
  </div>
</template>
