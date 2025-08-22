<template>
  <nav class="bg-green-100 sticky top-0 z-30 shadow border-b border-green-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <Logo class="h-10 w-auto" />
        </div>
        <!-- Desktop Nav Links -->
        <div class="hidden md:flex md:space-x-8">
          <NuxtLink
            to="/"
            class="text-green-900 hover:text-green-600 font-medium transition-colors px-3 py-2 rounded-md"
            exact-active-class="bg-green-200"
          >Home</NuxtLink>
          <NuxtLink to="/about" class="text-green-900 hover:text-green-600 font-medium transition-colors px-3 py-2 rounded-md" active-class="bg-green-200">About Us</NuxtLink>
          <NuxtLink to="/our-work" class="text-green-900 hover:text-green-600 font-medium transition-colors px-3 py-2 rounded-md" active-class="bg-green-200">Our Work</NuxtLink>
          <NuxtLink to="/join-the-movement" class="text-green-900 hover:text-green-600 font-medium transition-colors px-3 py-2 rounded-md" active-class="bg-green-200">Join the Movement</NuxtLink>
          <NuxtLink to="/donate" class="text-green-900 hover:text-green-600 font-medium transition-colors px-3 py-2 rounded-md" active-class="bg-green-200">Donate</NuxtLink>
          <NuxtLink to="/contact" class="text-green-900 hover:text-green-600 font-medium transition-colors px-3 py-2 rounded-md" active-class="bg-green-200">Contact Us</NuxtLink>
        </div>
        <!-- Mobile Hamburger -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMobileNav" aria-label="Open menu" class="inline-flex items-center justify-center p-2 rounded-md text-green-800 hover:bg-green-200 focus:outline-none">
            <svg v-if="!mobileOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile Nav Menu -->
    <div v-if="mobileOpen" class="md:hidden bg-green-100 border-t border-green-200 px-2 pb-3">
      <NuxtLink @click="closeMobileNav" to="/" class="block px-3 py-2 text-green-900 font-medium rounded-md hover:bg-green-200" exact-active-class="bg-green-200">Home</NuxtLink>
      <NuxtLink @click="closeMobileNav" to="/about" class="block px-3 py-2 text-green-900 font-medium rounded-md hover:bg-green-200" active-class="bg-green-200">About Us</NuxtLink>
      <NuxtLink @click="closeMobileNav" to="/our-work" class="block px-3 py-2 text-green-900 font-medium rounded-md hover:bg-green-200" active-class="bg-green-200">Our Work</NuxtLink>
      <NuxtLink @click="closeMobileNav" to="/join-the-movement" class="block px-3 py-2 text-green-900 font-medium rounded-md hover:bg-green-200" active-class="bg-green-200">Join the Movement</NuxtLink>
      <NuxtLink @click="closeMobileNav" to="/donate" class="block px-3 py-2 text-green-900 font-medium rounded-md hover:bg-green-200" active-class="bg-green-200">Donate</NuxtLink>
      <NuxtLink @click="closeMobileNav" to="/contact" class="block px-3 py-2 text-green-900 font-medium rounded-md hover:bg-green-200" active-class="bg-green-200">Contact Us</NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import Logo from '~/components/Logo.vue';

const mobileOpen = ref(false);
const toggleMobileNav = () => (mobileOpen.value = !mobileOpen.value);
const closeMobileNav = () => (mobileOpen.value = false);
</script>
