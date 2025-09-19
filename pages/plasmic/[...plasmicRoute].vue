<template>
  <div v-if="componentName">
    <component :is="plasmicComponent" v-bind="plasmicProps" />
  </div>
  <div v-else>
    <p>Page not found</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { PLASMIC } from '../plasmic-init.js';  // adjust path
// Note: actual API names might differ
// Hypothetical functions

const route = useRoute();

const plasmicPath = route.params.plasmicRoute
  ? `/${route.params.plasmicRoute.join('/')}`
  : '/';

let pageData, componentName, plasmicProps;

onMounted(async () => {
  pageData = await PLASMIC.fetchComponentData(plasmicPath);
  if (pageData && pageData.entryCompMetas.length > 0) {
    const meta = pageData.entryCompMetas[0];
    componentName = meta.displayName;
    plasmicProps = {};  // or meta.boundProps etc.
    plasmicComponent = PLASMIC.resolveComponent(componentName);
  } else {
    componentName = null;
  }
});
</script>
