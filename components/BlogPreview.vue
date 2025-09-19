<script setup lang="ts">
import { useBlog } from '~/composables/useBlog';

const { posts, loading, error } = useBlog();


const props = defineProps<{
  preview?: boolean;
  count?: number;
}>();

// Limit posts if preview mode is enabled
const displayedPosts = computed(() => {
  const filtered = posts.value.filter(post => post.title !== "");
  if (props.preview && props.count) {
    return filtered.slice(0, props.count);
  }
  return filtered;
});




</script>

<template>
  <div class="dark:bg-gray-900">
    <div v-if="loading" class="text-gray-500 dark:text-gray-300">Loading blog posts...</div>
    <div v-else-if="error" class="text-red-500 dark:text-red-300">{{ error }}</div>
    <div v-else class="grid gap-6 sm:grid-cols-3">
      <div
        v-for="(post, idx) in displayedPosts"
        :key="post.id"
        class=" dark:bg-gray-900 rounded-lg shadow hover:shadow-lg border border-green-600 dark:border-green-500 p-5 flex flex-col justify-between h-full"
      >
        <div>
          <h3>
            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="text-xl font-semibold text-green-700 hover:underline focus:outline-none focus:ring-2 focus:ring-green-400 dark:text-green-300 dark:hover:text-green-400"
            >
              {{ post.title }}
            </NuxtLink>
          </h3>
          <p class="text-xs text-green-500 mb-2 dark:text-green-300">{{ new Date(post.date).toDateString() }}</p>
          <p class="text-green-800 mb-3 line-clamp-3 dark:text-green-500">{{ post.excerpt }}</p>
        </div>
        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="mt-auto text-sm font-semibold text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-500"
        >
          Read More
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
