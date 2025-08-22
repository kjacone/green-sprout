<script setup>
import DonateOptions from '~/components/DonateOptions.vue';
</script>

<template>
  <main class="max-w-2xl mx-auto px-4 py-10">
    <section class="mb-10 text-center">
      <h1 class="text-3xl font-bold text-green-800 mb-4">Support Our Mission</h1>
      <p class="text-green-900 mb-6">Every shilling counts. Your generosity plants hope in schools, empowers youth, and greens communities across Kenya. Choose a giving method below:</p>
      <DonateOptions />
      <div class="mt-6 bg-green-50 rounded-lg py-4 px-6">
        <p class="font-semibold text-green-700">For large gifts, corporate partnerships, or foundations, email us at <a href="mailto:support@greensproutkenya.org" class="text-blue-600 underline">support@greensproutkenya.org</a>.</p>
      </div>
    </section>
  </main>
</template>
