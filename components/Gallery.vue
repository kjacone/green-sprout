<script setup lang="ts">
import { ref, computed } from 'vue';
import { useGallery } from '~/composables/useGallery';

const props = defineProps<{
  preview?: boolean;
  count?: number;
}>();


const { images } = useGallery();

// Limit images if preview mode is enabled
const displayedImages = computed(() => {
  if (props.preview && props.count) {
    return images.slice(0, props.count);
  }
  return images;
});

// Popup (lightbox) state
const showPopup = ref(false);
const selectedImage = ref<{ url: string; alt: string; caption: string } | null>(null);

function openPopup(img: any) {
  selectedImage.value = img;
  showPopup.value = true;
}

function closePopup() {
  showPopup.value = false;
  selectedImage.value = null;
}
</script>

<template>
  <div class="relative">
    <!-- Gallery Grid -->
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      aria-label="Photo gallery"
    >
      <figure
        v-for="(img, idx) in displayedImages"
        :key="img.url"
        class="rounded-lg overflow-hidden bg-green-100 shadow-sm cursor-pointer"
        @click="openPopup(img)"
      >
        <img
          :src="img.url"
          :alt="img.alt"
          class="object-cover w-full h-32 sm:h-40 transition-transform hover:scale-105"
          loading="lazy"
        />
        <figcaption class="p-2 text-xs text-green-700 text-center">
          {{ img.caption }}
        </figcaption>
      </figure>
    </div>

    <!-- Popup Modal -->
    <div
      v-if="showPopup && selectedImage"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      @click.self="closePopup"
    >
      <div class="bg-white rounded-lg max-w-3xl w-full shadow-lg overflow-hidden">
        <img
          :src="selectedImage.url"
          :alt="selectedImage.alt"
          class="w-full max-h-[70vh] object-contain bg-black"
        />
        <div class="p-4 text-center">
          <p class="text-gray-700 text-sm">{{ selectedImage.caption }}</p>
          <button
            @click="closePopup"
            class="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
