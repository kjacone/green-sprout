<template>
  <div
    class="relative w-full bg-gray-100 min-h-[350px] md:min-h-[500px] flex items-center justify-center overflow-hidden"
    aria-label="Hero video section"
    role="region"
  >
    <!-- Background video -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover object-center bg-black bg-opacity-90 z-10"
      style="z-index: 0;"
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
      <!-- Fallback image -->
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80"
        alt="Students planting trees in Kenya"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
    </video>

    <!-- Dark opaque foreground overlay -->
    <!-- <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div> -->

    <!-- Optional gradient overlay for extra effect -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-green-900/50 md:to-transparent z-20" aria-hidden="true"></div>

    <!-- Content -->
    <div class="relative z-30 flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
      <h1 class="text-white text-3xl md:text-5xl font-extrabold drop-shadow-2xl max-w-2xl">
        Together We Grow: Inspiring a Greener Generation
      </h1>
      <p class="mt-4 text-lg md:text-2xl text-slate-100 font-medium max-w-xl drop-shadow-2xl">
        Empowering Kenyan youth & communities through tree-planting, education, and environmental action.
      </p>
    </div>
  </div>
</template>

<script setup>
// Purely presentational
</script>
