<template>
  <nav
    aria-label="Quick actions"
    class="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-stretch md:items-start text-center"
  >
    <!-- Donate -->
    <div class="flex flex-col items-center md:items-start flex-1">
      <NuxtLink
        to="/donate"
        class="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 transition w-full"
        aria-label="Donate to Green Sprout Kenya"
      >
        Donate
      </NuxtLink>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-300 max-w-[200px] md:max-w-none w-full text-center md:text-left">
        Support our environmental programs and help us plant more trees.
      </p>
    </div>

    <!-- Partner -->
    <div class="flex flex-col items-center md:items-start flex-1">
      <NuxtLink
        to="/join-the-movement"
        class="px-6 py-3 rounded-xl bg-yellow-400 text-green-900 font-semibold shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition w-full"
        aria-label="Partner with Green Sprout Kenya"
      >
        Partner With Us
      </NuxtLink>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-300 max-w-[200px] md:max-w-none w-full text-center md:text-left">
        Collaborate with us to create sustainable solutions together.
      </p>
    </div>

    <!-- Our Story -->
    <div class="flex flex-col items-center md:items-start flex-1">
      <NuxtLink
        to="/about"
        class="px-6 py-3 rounded-xl bg-sky-500 text-white font-semibold shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300 transition w-full"
        aria-label="Learn more about our story"
      >
        Our Story
      </NuxtLink>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-300 max-w-[200px] md:max-w-none w-full text-center md:text-left">
        Discover how Green Sprout Kenya started and our mission forward.
      </p>
    </div>
  </nav>
</template>

<script setup>
// Pure navigation component with descriptions
</script>
