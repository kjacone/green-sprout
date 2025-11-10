<script setup lang="ts">
import appConfig from './app.config'
import { useHead } from '@vueuse/head';

useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} | ${appConfig.seo.siteName}` : appConfig.seo.siteName,
  meta: [

    { name: 'title', content: appConfig.seo.siteName },
    { name: 'description', content: appConfig.seo.description },
    { property: 'og:site_name', content: appConfig.seo.siteName },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: appConfig.seo.url },
    { property: 'og:title', content: appConfig.seo.siteName },
    { property: 'og:description', content: appConfig.seo.description },
    { property: 'og:image', content: appConfig.seo.image },
      { property: 'og:image', content: appConfig.seo.image },
      { property: 'og:image:secure_url', content: appConfig.seo.image }, 
      { property: 'og:image:width', content: '1200' }, 
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: appConfig.seo.description || 'Green Sprout Club Kenya' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: appConfig.seo.url },
    { name: 'twitter:title', content: appConfig.seo.siteName },
    { name: 'twitter:description', content: appConfig.seo.description },
    { name: 'twitter:image', content: appConfig.seo.image },
  ],
});

</script>


<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  </div>
</template>
