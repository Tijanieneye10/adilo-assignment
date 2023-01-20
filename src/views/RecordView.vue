<script setup>
import ModalComp from "@/components/ModalComp.vue";
import { ref } from "vue";
import BreadCrumb from "../components/BreadCrumb.vue";

const video = ref();
const isRecording = ref(false);

console.log(isRecording.value);

function record() {
  navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    video.value.srcObject = stream;
    video.value.onloadedmetadata = () => {
      video.value.play();
    };
    const mediaRecorder = new MediaRecorder(stream);
    const recordedChunks = [];

    mediaRecorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    });

    mediaRecorder.addEventListener("stop", () => {
      const recordedBlob = new Blob(recordedChunks);
      video.value.src = URL.createObjectURL(recordedBlob);
    });

    if (!isRecording.value) {
      isRecording.value = true;
      mediaRecorder.start();
    } else {
      isRecording.value = false;
      mediaRecorder.stop();
      video.value.pause();
    }
  });
}
</script>
<template>
  <BreadCrumb />
  <div class="flex flex-col justify-center items-center py-10 gap-8 ml-8 mr-32">
    <video
      ref="video"
      class="rounded-lg"
      src=""
      control
      id="video"
      poster="https://allthings.how/wp-content/uploads/2021/12/allthings.how-how-to-record-video-on-a-windows-11-pc-record-video.png"
    ></video>

    <div class="flex gap-4">
      <button
        @click.prevent="record"
        :class="{ '!bg-red-500 border !border-red-500': isRecording }"
        class="flex justify-center gap-1 items-center text-white border-2 border-green-500 bg-green-500 px-4 py-1 rounded-full"
      >
        <span class="material-symbols-outlined"> record_voice_over </span>
        {{ isRecording ? "Stop Recording" : "Start Recording" }}
      </button>
    </div>
  </div>

  <ModalComp />
</template>
