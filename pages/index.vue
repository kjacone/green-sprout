<template>
  <main class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Hero Section: visually striking intro -->
    <section 
      aria-label="Homepage hero" 
      role="region" 
      class="relative overflow-hidden"
    >
      <!-- Background decoration -->
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-50 via-sky-50 to-indigo-50 opacity-60"></div>
      <div class="absolute top-10 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div class="absolute top-40 right-20 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      <div class="absolute -bottom-20 left-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      
      <div class="relative z-10">
        <HeroSection />
         <MissionStatement />
      </div>
    </section>

    <!-- Quick Action Buttons: drive engagement early -->
    <section 
      aria-label="Quick actions" 
      role="region" 
      class="mt-20 px-4"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Take Action Today</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 mx-auto rounded-full"></div>
        </div>
        <QuickButtons />
      </div>
    </section>
    <!-- Gallery Preview: visual storytelling -->
    <section 
      aria-label="Gallery preview" 
      role="region" 
      class="mt-24 max-w-7xl mx-auto px-4"
    >
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-indigo-600 mb-6 drop-shadow-lg">
          Our Impact in Action
        </h2>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
          See the difference we're making in communities around the world
        </p>
        <div class="w-32 h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
      </div>
      
      <div class="relative">
        <!-- Decorative floating shapes -->
        <div class="absolute -top-10 -left-10 w-32 h-32 bg-emerald-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float"></div>
        <div class="absolute -bottom-12 right-0 w-40 h-40 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float" style="animation-delay: 2s"></div>
        <div class="absolute top-1/2 left-1/2 w-24 h-24 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float" style="animation-delay: 4s"></div>

        <div class="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl shadow-gray-200/50 p-8 border border-gray-100 relative z-10">
          <Gallery :preview="true" :count="4" />
          <div class="mt-8 flex justify-center gap-4">
            <NuxtLink 
              to="/gallery"
              class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-200"
            >
              View Full Gallery
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Preview: latest stories -->
    <section 
      aria-label="Latest blog entries" 
      role="region" 
      class="mt-28 max-w-6xl mx-auto px-4"
    >
      <div class="text-center mb-16">
         <h2 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-indigo-600 mb-6 drop-shadow-lg">
          Latest Stories</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Read about recent developments, success stories, and important updates from our mission
        </p>
         <div class="w-32 h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
      </div>
      
      <div class="relative">
        <div class="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl shadow-gray-200/30 p-8 border border-gray-100">
          <BlogPreview :preview="true" :count="3" />
        </div>
      </div>
    </section>

    <!-- Newsletter Signup: build community -->
    <section 
      aria-label="Newsletter signup" 
      role="region" 
      class="mt-24 px-4"
    >
      <div class="max-w-4xl mx-auto">
        <div class="bg-gradient-to-r from-emerald-600 via-green-600 to-indigo-600 rounded-3xl p-12 text-center text-white shadow-2xl shadow-gray-300/50 relative overflow-hidden">
          <!-- Background pattern -->
          <div class="absolute inset-0 bg-white opacity-5">
            <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, white 2px, transparent 2px); background-size: 50px 50px;"></div>
          </div>
          
          <div class="relative z-10">
            <h2 class="text-3xl font-bold mb-4">Stay Connected</h2>
            <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join our community and get the latest updates on our mission, events, and ways you can help make a difference.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                class="flex-1 px-6 py-3 rounded-full bg-white text-gray-900 placeholder-gray-500 border-0 shadow-lg focus:ring-4 focus:ring-white/30 focus:outline-none"
              >
              <button class="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/30">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section: encourage conversion -->
    <section 
      aria-label="Take action" 
      role="region" 
      class="mt-28 mb-5 px-4"
    >
      <div class="max-w-4xl mx-auto text-center">
        <div class="mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Every contribution matters. Join us in creating positive change that lasts.
          </p>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <NuxtLink 
            to="/donate" 
            class="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-2xl font-semibold shadow-xl shadow-emerald-200/50 hover:shadow-2xl hover:shadow-emerald-300/50 transform hover:-translate-y-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-offset-2 text-lg min-w-[200px]"
          >
            <span class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span class="relative flex items-center gap-2">
              💚 Donate Now
            </span>
          </NuxtLink>
          
          <NuxtLink 
            to="/join-the-movement" 
            class="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-2xl font-semibold shadow-xl shadow-sky-200/50 hover:shadow-2xl hover:shadow-sky-300/50 transform hover:-translate-y-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-300 focus:ring-offset-2 text-lg min-w-[200px]"
          >
            <span class="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span class="relative flex items-center gap-2">
              🤝 Volunteer With Us
            </span>
          </NuxtLink>
        </div>
        
        <!-- Additional encouragement -->
        <div class="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-600">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>Tax-deductible donations</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-sky-500 rounded-full"></div>
            <span>Flexible volunteering</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <span>Immediate impact</span>
          </div>
        </div>
      </div>
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

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>