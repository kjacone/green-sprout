<template>
  <div class="relative w-full bg-gray-100 min-h-[350px] md:min-h-[500px] flex items-center justify-center overflow-hidden" aria-label="Hero image section" role="region">
    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80"
      alt="Students planting trees in Kenya"
      class="absolute inset-0 w-full h-full object-cover object-center grayscale-0 md:grayscale-0 opacity-90"
      draggable="false"
      style="z-index:0;"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-green-900/50 md:to-transparent" aria-hidden="true"></div>
    <div class="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
      <h1 class="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg max-w-2xl">
        Together We Grow: Inspiring a Greener Generation
      </h1>
      <p class="mt-4 text-lg md:text-2xl text-slate-100 font-medium max-w-xl drop-shadow">
        Empowering Kenyan youth & communities through tree-planting, education, and environmental action.
      </p>
    </div>
  </div>
</template>

<script setup>
// No logic needed; purely presentational
</script>
