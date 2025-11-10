<script setup lang="ts">
import { useRoute } from 'vue-router'; // Make sure useHead is imported
import { ref, onMounted, computed } from 'vue';
import { useHead } from '@vueuse/head';

const route = useRoute();
const slug = route.params.slug as string;

const post = ref<any>(null);
const loading = ref(false);
const error = ref<string | null>(null);

// Extract first image URL from HTML content
const extractFirstImage = (htmlContent: string): string | null => {
  if (!htmlContent) return null;
  
  // Match img src attribute
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/i;
  const match = htmlContent.match(imgRegex);
  
  return match ? match[1] : null;
};

// Computed property for the cover image
const coverImage = computed(() => {
  if (!post.value) return 'https://www.greensprout.club/images/logo.jpeg';
  
  // Try to get from coverUrl first, then extract from content
  return post.value.coverUrl || 
         extractFirstImage(post.value.content) || 
         'https://www.greensprout.club/images/logo.jpeg';
});

onMounted(async () => {
  loading.value = true;
  try {
    const postId = slug.split('-')[0];
    const res = await fetch(`/api/blog/${postId}`);
    const data = await res.json();
    if (data.error) {
      error.value = data.error;
    } else {
      post.value = data;
      console.log(JSON.stringify(data), data);
    }
  } catch (e: any) {
    error.value = e.message || 'Something went wrong';
  } finally {
    loading.value = false;
  }
});

// SEO tags for individual post - only set when post is loaded
useHead(() => {
  if (!post.value) {
    return {
      title: 'Loading...',
      meta: []
    };
  }
  
  return {
    title: post.value.title || 'Blog Post',
    meta: [
      { name: 'description', content: post.value.excerpt || '' },
      { property: 'og:title', content: post.value.title || 'Blog Post' },
      { property: 'og:description', content: post.value.excerpt || '' },
      { property: 'og:image', content: coverImage.value },
      { property: 'og:url', content: `https://www.greensprout.club/blog/${slug}` },
      { property: 'og:type', content: 'article' },
      { name: 'twitter:title', content: post.value.title || 'Blog Post' },
      { name: 'twitter:description', content: post.value.excerpt || '' },
      { name: 'twitter:image', content: coverImage.value },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  };
});
</script>

<template>
  <div class="p-6 max-w-3xl mx-auto dark:bg-gray-800">
    <div v-if="loading" class="text-gray-500 dark:text-gray-300">Loading blog post...</div>
    <div v-else-if="error" class="text-red-500 dark:text-red-300">{{ error }}</div>
    <div v-else-if="post">
      <h1 class="text-3xl font-bold text-green-700 dark:text-green-300 mb-3">{{ post.title }}</h1>
      <p class="text-sm text-gray-500 dark:text-gray-300 mb-6">
        By {{ post.author }} • {{ new Date(post.date).toDateString() }}
      </p>
      <!-- Render Blogger HTML safely -->
      <div class="prose max-w-none dark:prose-invert" v-html="post.content"></div>
    </div>
  </div>
</template>