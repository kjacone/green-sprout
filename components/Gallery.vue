<script setup lang="ts">
import { useGallery } from '~/composables/useGallery';

const { images } = useGallery();
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" aria-label="Photo gallery">
    <figure v-for="(img, idx) in images" :key="img.url" class="rounded-lg overflow-hidden bg-green-100 shadow-sm">
      <img :src="img.url" :alt="img.caption" class="object-cover w-full h-32 sm:h-40" loading="lazy"/>
      <figcaption class="p-2 text-xs text-green-700 text-center">{{ img.caption }}</figcaption>
    </figure>
  </div>
</template>
