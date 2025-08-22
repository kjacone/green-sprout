<script setup>
import ContactForm from '~/components/ContactForm.vue';
import SocialLinks from '~/components/SocialLinks.vue';
</script>

<template>
  <main class="max-w-2xl mx-auto px-4 py-10">
    <section class="mb-10 text-center">
      <h1 class="text-3xl font-bold text-green-800 mb-4">Contact Us</h1>
      <p class="text-green-900 mb-4">Have a question, media inquiry, or want to connect? Fill out the form or reach us directly.</p>
      <div class="mb-6">
        <ContactForm />
      </div>
      <div class="mt-6 bg-green-50 rounded-lg py-4 px-6 text-green-900">
        <p class="font-medium">Email: <a href="mailto:info@greensproutkenya.org" class="text-blue-600 underline">info@greensproutkenya.org</a></p>
        <p class="font-medium mt-1">Phone: <a href="tel:+254700000000" class="text-blue-600 underline">+254 700 000 000</a></p>
        <div class="mt-3">
          <SocialLinks />
        </div>
      </div>
    </section>
  </main>
</template>
