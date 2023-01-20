<script setup>
import BreadCrumb from "../components/BreadCrumb.vue";
import data from "../data";
import ModalComp from "@/components/ModalComp.vue";
</script>

<template>
  <!-- Breadcrumb -->
  <BreadCrumb />

  <!-- table -->
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 mt-10">
      <thead class="text-xs text-gray-900 uppercase">
        <tr>
          <th scope="col" class="pl-6 py-3">Recordings</th>
          <th scope="col" class="pl-6 py-3">Title</th>
          <th scope="col" class="pl-6 py-3">Views</th>
          <th scope="col" class="pl-6 py-3">Size</th>
          <th scope="col" class="pl-6 py-3">Last Modified</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white" v-for="(detail, index) in data" :key="index">
          <td class="px-6 py-4">
            <img
              class="w-20 rounded-md h-12 object-cover"
              src="data:image/png;base64,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"
              alt="Video thumbnail"
            />
          </td>
          <td class="px-6 py-4">
            <div class="flex flex-col">
              <p class="font-medium">{{ detail.title }}</p>
              <p class="text-slate-400">
                {{ detail.subTitle }}
              </p>
            </div>
          </td>
          <td class="px-6 py-4">{{ detail.views }}</td>
          <td class="px-6 py-4">{{ detail.size }}</td>
          <td class="px-6 py-4">{{ detail.lastModified }}</td>
          <td class="px-6 py-4">
            <button class="material-symbols-outlined cursor-pointer">
              more_horiz
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- table end -->

  <!-- Modal -->
  <ModalComp />
</template>
