<template>
  <img src="/favicon.ico" :class="props.class ?? 'h-10 w-auto'" alt="Green Sprout Kenya logo: Two leaves emerging from soil, symbolizing new life and growth, in earthy greens and browns" />
</template>

<script setup>
const props = defineProps({
  class: { type: String, default: '' }
});
</script>
