<script setup lang="ts">
import appConfig from './app.config'

useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} | ${appConfig.seo.siteName}` : appConfig.seo.siteName,
  meta: [
    { name: 'description', content: appConfig.seo.description },
    { property: 'og:site_name', content: appConfig.seo.siteName },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: appConfig.seo.image },
    { name: 'twitter:card', content: 'summary_large_image' },
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
