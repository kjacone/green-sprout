<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const slug = route.params.slug as string;

const post = ref<any>(null);
const loading = ref(false);
const error = ref<string | null>(null);

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
    }
  } catch (e: any) {
    error.value = e.message || 'Something went wrong';
  } finally {
    loading.value = false;
  }
});


// SEO tags for individual post
useHead({
  title: post.value?.title,
  meta: [
    { name: 'description', content: post.value?.excerpt },
    { property: 'og:title', content: post.value?.title },
    { property: 'og:description', content: post.value?.excerpt },
    { property: 'og:image', content: post.value?.coverUrl || 'https://www.greensprout.club/images/logo.jpeg' },
    { property: 'og:url', content: `https://www.greensprout.club/blog/${slug}` },

   
    { name: 'twitter:title', content: post.value?.title },
    { name: 'twitter:description', content: post.value?.excerpt },
    { name: 'twitter:image', content: post.value?.coverUrl || 'https://www.greensprout.club/images/logo.jpeg' },
    //  { name: 'twitter:card', content: post.value?.coverUrl || '/logo.jpeg' },
    { name: 'twitter:url', content: `https://www.greensprout.club/blog/${slug}`},
    
  ],
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
      <div class="prose max-w-none" v-html="post.content"></div>
    </div>
  </div>
</template>
