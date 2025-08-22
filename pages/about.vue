<script setup>
import AboutStory from '~/components/AboutStory.vue';
import FounderMessage from '~/components/FounderMessage.vue';
import MissionVisionValues from '~/components/MissionVisionValues.vue';
import CourseBookSection from '~/components/CourseBookSection.vue';
</script>

<template>
  <main class="max-w-4xl mx-auto px-4 py-10">
    <section class="mb-12">
      <AboutStory />
    </section>
    <section class="mb-12">
      <FounderMessage />
    </section>
    <section class="mb-12">
      <MissionVisionValues />
    </section>
    <section>
      <CourseBookSection />
    </section>
  </main>
</template>
