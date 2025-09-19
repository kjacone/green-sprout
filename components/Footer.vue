<template>
  <footer class="bg-green-900 dark:bg-green-950 text-green-50 w-full px-6 py-10 dark:bg-gray-900 dark:text-gray-100">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Brand / About -->
      <div>
        <h2 class="text-2xl font-bold flex items-center gap-2">
          Green Sprout Kenya <span class="text-lg">🌱</span>
        </h2>
        <p class="text-green-100 mt-2 text-sm leading-relaxed dark:text-gray-300">
          Restoring our environment and empowering communities one seed at a time.  
        </p>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="font-semibold text-lg mb-3">Contact Us</h3>
        <ul class="space-y-2 text-green-100 dark:text-gray-300">
          <li class="flex items-center gap-2">
            📍 <span>Uyoma South Ward, Siaya County, Kenya</span>
          </li>
          <li class="flex items-center gap-2">
            📞 <a href="tel:+254111596189" class="hover:text-green-300 underline dark:hover:text-gray-400">+254 111 596 189</a>
          </li>
          <li class="flex items-center gap-2">
            ✉️ <a href="mailto:greensproutkenya@gmail.com" class="hover:text-green-300 underline dark:hover:text-gray-400">greensproutkenya@gmail.com</a>
          </li>
        </ul>
      </div>

      <!-- Social Links -->
      <div>
        <h3 class="font-semibold text-lg mb-3">Follow Us</h3>
        <div class="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=61575912925346" target="_blank" aria-label="Facebook"
             class="hover:text-green-300 transition dark:hover:text-gray-400">
            <i class="fab fa-facebook text-2xl"></i>
          </a>
          <a href="https://www.instagram.com/greensproutkenya" target="_blank" aria-label="Instagram"
             class="hover:text-green-300 transition dark:hover:text-gray-400">
            <i class="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://www.tiktok.com/@greensproutkenya" target="_blank" aria-label="TikTok"
             class="hover:text-green-300 transition dark:hover:text-gray-400">
            <i class="fab fa-tiktok text-2xl"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-green-800 mt-10 pt-6 text-center text-green-200 text-sm dark:border-gray-700 dark:text-gray-500">
      &copy; {{ new Date().getFullYear() }} Green Sprout Kenya.  
      <span class="block md:inline">All rights reserved.</span>  
      <br class="md:hidden"/> 🌍 Empowering nature, nurturing community.
    </div>
  </footer>
</template>

<script setup>
// Make sure you have Font Awesome installed for the social icons
// npm install @fortawesome/fontawesome-free
</script>

<style>
@import "@fortawesome/fontawesome-free/css/all.min.css";
</style>

