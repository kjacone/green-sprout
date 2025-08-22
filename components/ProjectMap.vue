<template>
  <div class="bg-green-50 p-6 rounded-lg shadow flex flex-col items-center">
    <svg viewBox="0 0 320 360" class="w-64 h-64 mb-4" aria-labelledby="kenya-map">
      <title id="kenya-map">Map of Kenya showing school project locations</title>
      <path d="M90 40 L230 40 Q250 90 200 150 Q250 200 180 320 Q110 250 80 200 Q60 130 90 40Z" fill="#d1fae5" stroke="#047857" stroke-width="4"/>
      <!-- Example locations-->
      <circle cx="120" cy="110" r="8" fill="#10b981"/>
      <text x="130" y="113" font-size="12" fill="#065f46">Green Valley School</text>
      <circle cx="190" cy="200" r="8" fill="#10b981"/>
      <text x="200" y="203" font-size="12" fill="#065f46">Sunrise Academy</text>
      <circle cx="160" cy="260" r="8" fill="#10b981"/>
      <text x="170" y="263" font-size="12" fill="#065f46">Nairobi Primary</text>
    </svg>
    <div class="text-green-900 text-center">
      <p class="font-bold text-green-700 mb-1">Our partner schools and project sites are spread across Kenya—expanding every year!</p>
    </div>
  </div>
</template>
