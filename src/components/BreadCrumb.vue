<script setup></script>
<template>
  <nav class="flex ml-6" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <a
          href="#"
          class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
        >
          Snapbyte
        </a>
      </li>
      <li>
        <div class="flex items-center">
          <svg
            aria-hidden="true"
            class="w-6 h-6 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <a
            href="#"
            class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2"
            >My Recordings</a
          >
        </div>
      </li>
    </ol>
  </nav>

  <div class="flex justify-start items-center gap-28 my-4 ml-6">
    <div>
      <p class="text-lg">My Recordings 25</p>
    </div>

    <div class="flex justify-between gap-2">
      <button
        class="flex justify-center items-center gap-1 text-slate-400 border-2 border-slate-400 px-4 py-1 rounded-full"
      >
        <span class="material-symbols-outlined"> swap_vert </span>
        By Date
      </button>
      <button
        class="flex justify-center gap-1 items-center text-slate-400 border-2 border-slate-400 px-4 py-1 rounded-full"
      >
        <span class="material-symbols-outlined"> filter_alt </span>
        Add Filter
        <span class="material-symbols-outlined text-sm">
          keyboard_arrow_down
        </span>
      </button>
      <button
        class="flex justify-center gap-1 items-center text-white border-2 border-[#0DABD8] bg-[#0DABD8] px-4 py-1 rounded-full"
      >
        <span class="material-symbols-outlined"> videocam </span>
        New Request
      </button>
      <label
        for="my-modal-3"
        class="cursor-pointer flex justify-center gap-1 items-center text-white border-2 border-red-500 bg-red-500 px-4 py-1 rounded-full"
      >
        <span class="material-symbols-outlined"> record_voice_over </span>
        Start Recording</label
      >
    </div>
  </div>
</template>
