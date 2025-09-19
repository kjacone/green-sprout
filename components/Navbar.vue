<template>
  <nav class="bg-white/95 dark:bg-gray-900 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-emerald-100 dark:border-emerald-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center group cursor-pointer">
          <NuxtLink to="/" class="flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
            <!-- Custom SVG Logo -->
            <div class="relative">
              <span class="inline-block align-middle text-4xl">🌱</span>
              <!-- Subtle glow effect -->
              <div class="absolute inset-0 bg-emerald-400/20 rounded-full blur-lg -z-10 group-hover:bg-emerald-400/30 transition-colors duration-300 dark:group-hover:bg-emerald-400/20"></div>
            </div>
            <!-- Logo Text -->
            <div class="flex flex-col">
              
              <span class="text-2xl font-bold bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800 bg-clip-text text-transparent dark:bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300 dark:bg-clip-text dark:text-transparent">
                GreenSproutKenya
              </span>
              <span class="text-xs text-emerald-600 dark:text-emerald-400 text-center font-medium tracking-wide">
                Making a Difference
              </span>
            </div>
          </NuxtLink>
        </div>

        <!-- Desktop Nav Links -->
        <div class="hidden lg:flex lg:space-x-1 dark:text-gray-100">
          <template v-for="(link, index) in navLinks">
            <NuxtLink 
              :to="link.url" 
              class="group relative px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-emerald-600 font-medium transition-all duration-300 rounded-xl hover:bg-emerald-50 dark:hover:text-emerald-300 dark:hover:bg-emerald-800" 
              :active-class="`text-emerald-700 bg-emerald-100 dark:text-${index === 4 ? 'white' : 'gray-100'} dark:bg-emerald-800`"
            >
              {{ link.name }}
              <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-300 group-hover:w-full group-hover:left-0 dark:bg-gradient-to-r from-emerald-400 to-emerald-300"></span>
            </NuxtLink>
          </template>
        </div>

        

        <!-- CTA Button & Mobile Menu -->
        <div class="flex items-center space-x-4">
          <!-- Donate CTA Button (Desktop) -->
          <NuxtLink 
            to="/donate" 
            class="hidden lg:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-full shadow-lg shadow-emerald-200/50 hover:shadow-xl hover:shadow-emerald-300/50 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-offset-2 dark:bg-gradient-to-r from-emerald-400 to-emerald-300 dark:text-gray-100"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            Donate
          </NuxtLink>

          <!-- Mobile Hamburger -->
          <div class="lg:hidden flex items-center">
            <button 
              @click="toggleMobileNav" 
              :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
              class="relative inline-flex items-center justify-center p-3 rounded-xl text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200 transition-all duration-300 dark:bg-emerald-800 dark:text-gray-100 dark:hover:bg-emerald-700"
            >
              <!-- Animated hamburger icon -->
              <div class="relative w-6 h-6">
                <span 
                  :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"
                  class="absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out dark:bg-emerald-500"
                ></span>
                <span 
                  :class="mobileOpen ? 'opacity-0' : 'opacity-100'"
                  class="absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out dark:bg-emerald-500"
                ></span>
                <span 
                  :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"
                  class="absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out dark:bg-emerald-500"
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Nav Menu with slide animation -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-if="mobileOpen" class="lg:hidden bg-white/95 dark:bg-gray-900 backdrop-blur-md border-t border-emerald-100 dark:border-emerald-900 overflow-hidden">
        <div class="px-4 py-6 space-y-2">
          <template v-for="(link, index) in navLinks">
            <NuxtLink 
              @click="closeMobileNav" 
              :to="link.url" 
              class="flex items-center px-4 py-3 text-gray-900 dark:text-gray-100 font-medium rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200" 
               :active-class="`text-emerald-700 bg-emerald-100 dark:text-${index === 4 ? 'white' : 'gray-100'} dark:bg-emerald-800`"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="link.icon"/>
              </svg>
              {{ link.name }}
            </NuxtLink>
          </template>
          
          <!-- Mobile Donate Button -->
          <div class="pt-4 mt-4 border-t border-emerald-100">
            <NuxtLink 
              @click="closeMobileNav"
              to="/donate" 
              class="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
              Donate Now
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const mobileOpen = ref(false);
const toggleMobileNav = () => (mobileOpen.value = !mobileOpen.value);
const closeMobileNav = () => (mobileOpen.value = false);

const navLinks = ref([
                  { name: 'Home', url: '/' },
                  { name: 'About Us', url: '/about' },
                  { name: 'Our Work', url: '/our-work' },
                  { name: 'Blogs', url: '/blogs' },
                  { name: 'Join Us', url: '/join-the-movement' },
                  { name: 'Contact', url: '/contact' },
                ])
        
          
     







</script>

<style scoped>
/* Custom scrollbar for mobile menu if needed */
.mobile-menu::-webkit-scrollbar {
  width: 4px;
}

.mobile-menu::-webkit-scrollbar-track {
  background: var(--light-background, #f1f5f9);
  background: var(--dark-background, rgba(255, 255, 255, 0.1));
}

.mobile-menu::-webkit-scrollbar-thumb {
  background: var(--light-scrollbar, #10b981);
  background: var(--dark-scrollbar, rgba(0, 0, 0, 0.3));
  border-radius: 2px;
}
</style>