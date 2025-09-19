<template>
  <section
    class="bg-gradient-to-br from-green-50 to-green-100 
           dark:from-gray-900 dark:to-gray-800 
            border border-green-200 dark:border-gray-700 
           p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8"
  >
    <!-- Image -->
    <div class="w-full md:w-1/2">
      <img
        src="/images/5.jpeg"
        alt="African Nightshade (Osuga)"
        class="rounded-xl shadow-md object-cover w-[600px] h-[400px] "
       
      />
    </div>

    <!-- Content -->
    <div class="w-full md:w-1/2">
      <h2
        class="text-2xl sm:text-3xl font-extrabold tracking-tight 
               text-green-800 dark:text-green-300 mb-4"
      >
        🌿 AFRICAN INDIGENOUS LEAFY VEGETABLES:  
        <span class="block text-green-700 dark:text-green-400">
          Growing Health and Hope with Osuga (African Nightshade)
        </span>
      </h2>

      <p class="text-lg leading-relaxed text-green-900 dark:text-gray-200 mb-4">
        In 2023, when <span class="font-semibold text-green-700 dark:text-green-400">Green Sprout Kenya</span> 
        was still taking its first steps, we began an ambitious school project at Naya Secondary School. 
        The goal was simple but powerful: to prove that African Indigenous Leafy Vegetables (AILVs) are not just food, 
        but a source of health, income, and sustainability for our communities.
      </p>

      <p class="text-lg leading-relaxed text-green-900 dark:text-gray-200 mb-6">
        We chose one of the most cherished vegetables in Kenya — the African Nightshade 
        (<span class="italic">Solanum nigrum complex</span>). Known as 
        <span class="font-semibold">Osuga</span> in Luo, 
        <span class="font-semibold">Mnavu</span> in Swahili, and 
        <span class="font-semibold">Managu</span> in Kikuyu, this leafy green has long been part of African diets and traditions. 
        Its edible leaves and berries carry both cultural and nutritional significance.
      </p>

      <!-- Read More Button -->
      <NuxtLink to="/blog/1963373872691145062">
        <button
          class="px-6 py-3 rounded-xl font-semibold text-white 
                 bg-green-600 hover:bg-green-700 
                 dark:bg-green-500 dark:hover:bg-green-600 
                 shadow-md transition"
        >
          Read More →
        </button>
      </NuxtLink>
    </div>
  </section>
</template>
