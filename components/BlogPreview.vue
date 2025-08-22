<script setup lang="ts">
import { useBlog } from '~/composables/useBlog';

const { latestPosts } = useBlog();
</script>

<template>
  <div class="grid gap-6 sm:grid-cols-2">
    <div v-for="post in latestPosts" :key="post.id" class="bg-white rounded-lg shadow p-5 flex flex-col justify-between h-full">
      <div>
        <h3>
          <NuxtLink :to="`/blog/${post.slug}`" class="text-xl font-semibold text-green-700 hover:underline focus:outline-none focus:ring-2 focus:ring-green-400">
            {{ post.title }}
          </NuxtLink>
        </h3>
        <p class="text-xs text-green-500 mb-2">{{ post.date }}</p>
        <p class="text-green-800 mb-3">{{ post.excerpt }}</p>
      </div>
      <NuxtLink :to="`/blog/${post.slug}`" class="mt-auto text-sm font-semibold text-green-600 hover:text-green-800">Read More</NuxtLink>
    </div>
  </div>
</template>
