<script setup>
import AboutStory from '~/components/AboutStory.vue';
import FounderMessage from '~/components/FounderMessage.vue';
import MissionVisionValues from '~/components/MissionVisionValues.vue';
import CourseBookSection from '~/components/CourseBookSection.vue';


// useHead({
//   title: post.value?.title,
//   meta: [
//     { name: 'description', content: post.value?.excerpt },
//     { property: 'og:title', content: post.value?.title },
//     { property: 'og:description', content: post.value?.excerpt },
//     { property: 'og:image', content: post.value?.coverImage || '/logo.jpeg' },
//     { property: 'og:url', content: `https://greensprout.club/about` },
//     { name: 'twitter:title', content: post.value?.title },
//     { name: 'twitter:description', content: post.value?.excerpt },
//     { name: 'twitter:image', content: post.value?.coverImage || '/logo.jpeg' },
//   ],
// });
</script>

<template>
  <main class="max-w-4xl mx-auto px-4 py-10 dark:bg-gray-900">
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
