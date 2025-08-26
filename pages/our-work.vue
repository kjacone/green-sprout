<script setup>
import Gallery from '~/components/Gallery.vue';
import BlogPreview from '~/components/BlogPreview.vue';
import ProjectMap from '~/components/ProjectMap.vue';
</script>

<template>
  <main class="max-w-5xl mx-auto px-4 py-10">
    <section class="mb-14">
      <h1 class="text-3xl sm:text-4xl font-bold text-green-800 mb-6">Our Work in Action</h1>
       <Gallery :preview="true" :count="4" />
    </section>
    <section class="mb-14">
      <h2 class="text-2xl font-semibold text-green-700 mb-4">Latest Stories</h2>
       <BlogPreview :preview="true" :count="3" />
    </section>
    <section>
      <h2 class="text-2xl font-semibold text-green-700 mb-4">School Impact Map</h2>
      <ProjectMap />
    </section>
  </main>
</template>
