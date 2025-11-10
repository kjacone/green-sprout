<script setup lang="ts">
import { useBlog } from '~/composables/useBlog';
import { useHead } from '@vueuse/head';

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

// Function to generate SEO meta tags
const generateSEO = (post: any) => {
  const metaTitle = post.title;
  const metaDescription = post.title || 'Find out how Greensprout is changing the ecosystem in Kenya';
  const metaImage = post.coverUrl || 'https://www.greensprout.club/images/4.jpeg'; 

  return {
    title: metaTitle,
    description: metaDescription,
    image: metaImage,
    url: `/blog/${(post.title)
      .replace(/[^\w-]/g, '-')
      .replace(/[\s_]+/g, '-')
      .toLowerCase()}`,
  };
};

// Dynamically update SEO meta tags when needed
const setSEO = (post: any) => {
  const seo = generateSEO(post);
  useHead({
    title: seo.title,
    meta: [
      { name: 'description', content: seo.description },
      { property: 'og:title', content: seo.description },
      { property: 'og:description', content: seo.description },
      { property: 'og:image', content: seo.image },
      { property: 'og:url', content: seo.url },
      { name: 'twitter:title', content: seo.description },
      { name: 'twitter:description', content: seo.description },
      { name: 'twitter:image', content: seo.image },
      // { name: 'twitter:card', content:seo.image },
    ],
  });
};
</script>

<template>
  <div class="dark:bg-gray-900">
    <div v-if="loading" class="text-gray-500 dark:text-gray-300">Loading blog posts...</div>
    <div v-else-if="error" class="text-red-500 dark:text-red-300">{{ error }}</div>

    <div v-else class="grid gap-6 sm:grid-cols-3">
      <div
        v-for="(post, idx) in displayedPosts"
        :key="post.id"
        class="dark:bg-gray-900 rounded-lg shadow hover:shadow-lg border border-green-600 dark:border-green-500 p-5 flex flex-col justify-between h-full"
        @click="setSEO(post)"
      >
        <!-- Cover Image -->
        <div v-if="post.coverUrl" class="mb-4">
          <NuxtLink
            :to="`/blog/${(post.title)
              .replace(/[^\w-]/g, '-')
              .replace(/[\s_]+/g, '-')
              .toLowerCase()}`"
          >
            <img
              :src="post.coverUrl"
              :alt="post.title"
              class="w-full h-48 object-cover rounded-md border border-green-500"
              loading="lazy"
            />
          </NuxtLink>
        </div>

        <div>
          <h3>
           <NuxtLink
   :to="`/blog/${ post.slug + (`-`)+(post.title)
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .toLowerCase()}`"
  class="text-xl font-semibold text-green-700 hover:underline focus:outline-none focus:ring-2 focus:ring-green-400 dark:text-green-300 dark:hover:text-green-400"
>
  {{ post.title }}
</NuxtLink>
          </h3>
          <p class="text-xs text-green-500 mb-2 dark:text-green-300">
            {{ new Date(post.date).toDateString() }}
          </p>
          <p class="text-green-800 mb-3 line-clamp-3 dark:text-green-500">
            {{ post.excerpt }}
          </p>
        </div>

        <NuxtLink
          :to="`/blog/${ post.slug + (`-`)+(post.title)
            .replace(/[^\w-]/g, '-')
            .replace(/[\s_]+/g, '-')
            .toLowerCase()}`"
          class="mt-auto text-sm font-semibold text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-500"
        >
          Read More
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
