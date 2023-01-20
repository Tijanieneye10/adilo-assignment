<script setup></script>
<template>
  <header>
    <div
      class="bg-white border-b-2 border-slate-200 w-full h-[4.5rem] px-16 flex justify-between items-center relative"
    >
      <div class="logo flex items-center gap-2">
        <div
          class="flex flex-col justify-center items-center w-7 h-7 bg-yellow-600 rounded-lg"
        >
          <div class="w-4 h-4 rounded-full bg-white"></div>
        </div>
        <h1 class="text-3xl font-bold">Adilo</h1>
      </div>
      <nav>
        <ul class="flex justify-between items-center gap-10">
          <li class="">
            <a
              href=""
              class="py-6 px-2 inline-block transition-all duration-300 hover:font-bold"
              >Projects</a
            >
          </li>
          <li class="add-border">
            <div class="dropdown">
              <label tabindex="0" class="cursor-pointer m-1">
                Tools & App
                <span class="material-symbols-outlined text-sm">
                  expand_more
                </span>
              </label>
              <ul
                tabindex="0"
                class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li class="border-b border-slate-200">
                  <a>Snapbyte Recorder</a>
                </li>
                <li class="border-b border-slate-200"><a>AudioBounce</a></li>
                <li><a>Sugar Voice</a></li>
              </ul>
            </div>
          </li>
          <li class="">
            <a
              href=""
              class="py-6 px-2 transition-all duration-300 hover:font-bold inline-block"
              >Channels</a
            >
          </li>
          <li class="">
            <a
              href=""
              class="py-6 px-2 transition-all duration-300 hover:font-bold inline-block"
              >Contacts</a
            >
          </li>
          <li class="">
            <a
              href=""
              class="py-6 px-2 transition-all duration-300 hover:font-bold inline-block"
              >Analytics</a
            >
          </li>
          <li class="">
            <a
              href=""
              class="py-6 px-2 transition-all duration-300 hover:font-bold inline-block"
              >Settings</a
            >
          </li>
        </ul>
      </nav>
      <div class="profile flex justify-between items-center gap-5">
        <ul class="flex justify-between items-center gap-10">
          <li><a href="">Help</a></li>
        </ul>
        <div class="h-[40px] border-r-[2px] border-slate-400"></div>
        <div class="flex items-center justify-start gap-2">
          <img
            src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY="
            class="w-10 h-10 rounded-xl object-cover bg-black"
          />
          <div class="flex flex-col gap-0">
            <span class="font-semibold -mb-1">Cody Fisher</span>
            <span class="text-sm text-slate-400">codyfisher@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
