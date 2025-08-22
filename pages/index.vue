<template>
  <main>
    <!-- Hero Section: visually striking intro -->
    <section aria-label="Homepage hero" role="region">
      <HeroSection />
    </section>

    <!-- Mission Statement: bold, central message -->
    <section aria-label="Mission statement" role="region" class="mt-8">
      <MissionStatement />
    </section>

    <!-- Quick Action Buttons: drive engagement early -->
    <section aria-label="Quick actions" role="region" class="mt-8">
      <QuickButtons />
    </section>

    <!-- Gallery Preview: visual storytelling -->
    <section aria-label="Gallery preview" role="region" class="mt-12 max-w-5xl mx-auto px-4">
      <Gallery :preview="true" />
    </section>

    <!-- Blog Preview: latest stories -->
    <section aria-label="Latest blog entries" role="region" class="mt-12 max-w-4xl mx-auto px-4">
      <BlogPreview :count="3" />
    </section>

    <!-- CTA Section: encourage conversion -->
    <section aria-label="Take action" role="region" class="mt-16 mb-12 w-full flex flex-col items-center gap-4">
      <NuxtLink to="/donate" class="inline-block px-8 py-3 bg-green-700 text-white rounded-full font-semibold shadow-md hover:bg-green-800 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" >
        Donate Now
      </NuxtLink>
      <NuxtLink to="/join-the-movement" class="inline-block px-8 py-3 bg-sky-600 text-white rounded-full font-semibold shadow-md hover:bg-sky-700 transition focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2" >
        Volunteer With Us
      </NuxtLink>
    </section>
  </main>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue';
import MissionStatement from '~/components/MissionStatement.vue';
import QuickButtons from '~/components/QuickButtons.vue';
import Gallery from '~/components/Gallery.vue';
import BlogPreview from '~/components/BlogPreview.vue';
</script>
