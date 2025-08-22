<template>
  <footer class="bg-green-900 text-green-50 w-full px-4 py-8 mt-8">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <!-- Contact Info -->
      <div class="mb-6 md:mb-0">
        <h3 class="font-bold text-lg mb-2">Contact Us</h3>
        <ul>
          <li>Email: <a href="mailto:info@greensproutkenya.org" class="underline hover:text-green-200">info@greensproutkenya.org</a></li>
          <li>Phone: <a href="tel:+254712345678" class="underline hover:text-green-200">+254 712 345 678</a></li>
          <li>P.O. Box 1234, Nairobi, Kenya</li>
        </ul>
      </div>
      <!-- Social Links -->
      <div class="mb-6 md:mb-0">
        <h3 class="font-bold text-lg mb-2">Follow Us</h3>
        <SocialLinks />
      </div>
      <!-- Legal/Copyright -->
      <div>
        <h3 class="font-bold text-lg mb-2">&copy; {{ new Date().getFullYear() }} Green Sprout Kenya</h3>
        <p class="text-green-100 text-sm">All rights reserved.<br/>Empowering nature, nurturing community.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SocialLinks from '~/components/SocialLinks.vue';
</script>
