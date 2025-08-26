<template>
  <nav class="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-emerald-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center group cursor-pointer">
          <NuxtLink to="/" class="flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
            <!-- Custom SVG Logo -->
            <div class="relative">
              <span class="inline-block align-middle text-4xl">🌱</span>
              <!-- Subtle glow effect -->
              <div class="absolute inset-0 bg-emerald-400/20 rounded-full blur-lg -z-10 group-hover:bg-emerald-400/30 transition-colors duration-300"></div>
            </div>
            <!-- Logo Text -->
            <div class="flex flex-col">
              
              <span class="text-2xl font-bold bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                GreenSproutKenya
              </span>
              <span class="text-xs text-emerald-600 text-center font-medium tracking-wide">
                Making a Difference
              </span>
            </div>
          </NuxtLink>
        </div>

        <!-- Desktop Nav Links -->
        <div class="hidden lg:flex lg:space-x-1">
          <NuxtLink
            to="/"
            class="group relative px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 rounded-xl hover:bg-emerald-50"
            exact-active-class="text-emerald-700 bg-emerald-100"
          >
            Home
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </NuxtLink>
          
          <NuxtLink 
            to="/about" 
            class="group relative px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 rounded-xl hover:bg-emerald-50" 
            active-class="text-emerald-700 bg-emerald-100"
          >
            About Us
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </NuxtLink>
          
          <NuxtLink 
            to="/our-work" 
            class="group relative px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 rounded-xl hover:bg-emerald-50" 
            active-class="text-emerald-700 bg-emerald-100"
          >
            Our Work
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </NuxtLink>
          
          <NuxtLink 
            to="/blogs" 
            class="group relative px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 rounded-xl hover:bg-emerald-50" 
            active-class="text-emerald-700 bg-emerald-100"
          >
            Blogs
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </NuxtLink>
          
          <NuxtLink 
            to="/join-the-movement" 
            class="group relative px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 rounded-xl hover:bg-emerald-50" 
            active-class="text-emerald-700 bg-emerald-100"
          >
            Join Us
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </NuxtLink>
          
          <NuxtLink 
            to="/contact" 
            class="group relative px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 rounded-xl hover:bg-emerald-50" 
            active-class="text-emerald-700 bg-emerald-100"
          >
            Contact
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </NuxtLink>
        </div>

        <!-- CTA Button & Mobile Menu -->
        <div class="flex items-center space-x-4">
          <!-- Donate CTA Button (Desktop) -->
          <NuxtLink 
            to="/donate" 
            class="hidden lg:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-full shadow-lg shadow-emerald-200/50 hover:shadow-xl hover:shadow-emerald-300/50 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-offset-2"
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
              class="relative inline-flex items-center justify-center p-3 rounded-xl text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200 transition-all duration-300"
            >
              <!-- Animated hamburger icon -->
              <div class="relative w-6 h-6">
                <span 
                  :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"
                  class="absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"
                ></span>
                <span 
                  :class="mobileOpen ? 'opacity-0' : 'opacity-100'"
                  class="absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"
                ></span>
                <span 
                  :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"
                  class="absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"
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
      <div v-if="mobileOpen" class="lg:hidden bg-white/95 backdrop-blur-md border-t border-emerald-100 overflow-hidden">
        <div class="px-4 py-6 space-y-2">
          <NuxtLink 
            @click="closeMobileNav" 
            to="/" 
            class="flex items-center px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200" 
            exact-active-class="text-emerald-700 bg-emerald-100"
          >
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Home
          </NuxtLink>
          
          <NuxtLink 
            @click="closeMobileNav" 
            to="/about" 
            class="flex items-center px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200" 
            active-class="text-emerald-700 bg-emerald-100"
          >
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            About Us
          </NuxtLink>
          
          <NuxtLink 
            @click="closeMobileNav" 
            to="/our-work" 
            class="flex items-center px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200" 
            active-class="text-emerald-700 bg-emerald-100"
          >
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"/>
            </svg>
            Our Work
          </NuxtLink>
          
          <NuxtLink 
            @click="closeMobileNav" 
            to="/blogs" 
            class="flex items-center px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200" 
            active-class="text-emerald-700 bg-emerald-100"
          >
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"/>
            </svg>
            Blogs
          </NuxtLink>
          
          <NuxtLink 
            @click="closeMobileNav" 
            to="/join-the-movement" 
            class="flex items-center px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200" 
            active-class="text-emerald-700 bg-emerald-100"
          >
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            Join Us
          </NuxtLink>
          
          <NuxtLink 
            @click="closeMobileNav" 
            to="/contact" 
            class="flex items-center px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200" 
            active-class="text-emerald-700 bg-emerald-100"
          >
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Contact
          </NuxtLink>
          
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
</script>

<style scoped>
/* Custom scrollbar for mobile menu if needed */
.mobile-menu::-webkit-scrollbar {
  width: 4px;
}

.mobile-menu::-webkit-scrollbar-track {
  background: #f1f5f9;
}

.mobile-menu::-webkit-scrollbar-thumb {
  background: #10b981;
  border-radius: 2px;
}
</style>