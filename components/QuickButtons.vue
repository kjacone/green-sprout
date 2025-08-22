<template>
  <nav aria-label="Quick actions" class="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
    <NuxtLink
      to="/donate"
      class="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
      aria-label="Donate to Green Sprout Kenya"
    >
      Donate
    </NuxtLink>
    <NuxtLink
      to="/partner"
      class="px-6 py-3 rounded-xl bg-yellow-400 text-green-900 font-semibold shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition"
      aria-label="Partner with Green Sprout Kenya"
    >
      Partner With Us
    </NuxtLink>
    <NuxtLink
      to="/about"
      class="px-6 py-3 rounded-xl bg-sky-500 text-white font-semibold shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300 transition"
      aria-label="Learn more about our story"
    >
      Our Story
    </NuxtLink>
  </nav>
</template>

<script setup>
// Pure navigation component
</script>
