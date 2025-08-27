<template>
  <div class="bg-gradient-to-r from-green-50 via-emerald-100 to-green-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center">
    <h2 class="text-2xl font-extrabold text-green-800 dark:text-green-300 mb-6">Our Schools in Siaya County 🌱</h2>
    
    <svg viewBox="0 0 320 360" class="w-72 h-72 md:w-96 md:h-96 mb-6" aria-labelledby="kenya-map">
      <title id="kenya-map">Map of Kenya with Siaya schools</title>
      
      <!-- Kenya Outline -->
      <path 
        d="M90 40 L230 40 Q250 90 200 150 Q250 200 180 320 Q110 250 80 200 Q60 130 90 40Z" 
        fill="url(#kenyaGradient)" 
        stroke="#047857" 
        stroke-width="3"
        class="transition-transform duration-500 hover:scale-105"
      />

      <!-- Gradient for Kenya -->
      <defs>
        <linearGradient id="kenyaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#bbf7d0"/>
          <stop offset="100%" stop-color="#34d399"/>
        </linearGradient>
      </defs>

      <!-- Siaya Schools -->
      <circle cx="140" cy="160" r="10" fill="#10b981" class="animate-pulse"/>
      <text x="155" y="165" font-size="12" fill="#064e3b" class="font-semibold">Naya Primary School</text>

      <circle cx="150" cy="190" r="10" fill="#10b981" class="animate-pulse"/>
      <text x="165" y="195" font-size="12" fill="#064e3b" class="font-semibold">Naya Secondary School</text>

    </svg>

    <!-- Legend -->
    <div class="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md w-full max-w-md">
      <p class="text-green-800 dark:text-green-200 font-bold mb-2">📍 Partner Schools in Siaya:</p>
      <ul class="space-y-1 text-gray-700 dark:text-gray-200">
        <li>🌿 Naya Primary School</li>
        <li>🌿 Naya Secondary School</li>
        
      </ul>
    </div>
  </div>
</template>
