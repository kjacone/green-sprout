<template>
  <section aria-labelledby="mission-vision-values" class="py-16">
    <h2
      id="mission-vision-values"
      class="text-3xl sm:text-4xl font-extrabold text-center text-green-800 dark:text-green-300 mb-12 tracking-tight drop-shadow"
    >
      Mission, Vision & Values
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div
        v-for="(item, index) in cards"
        :key="index"
        class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-green-400 hover:scale-105 transition-transform duration-300"
      >
        <div class="bg-green-100 dark:bg-gray-700 rounded-full p-4 mb-4 shadow">
          <component :is="item.icon" class="w-12 h-12 text-green-500" />
        </div>
        <h3 class="text-xl font-bold text-green-700 dark:text-green-300 mb-3">
          {{ item.title }}
        </h3>
        <p class="text-green-900 dark:text-green-100 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from "vue";

// Inline SVG components
const MissionIcon = {
  render() {
    return h("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M12 19V5m0 0L5 12m7-7l7 7",
      }),
    ]);
  },
};

const VisionIcon = {
  render() {
    return h("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [
      h("circle", { cx: "12", cy: "12", r: "10", "stroke-width": "2" }),
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M12 6v6l4 2",
      }),
    ]);
  },
};

const ValuesIcon = {
  render() {
    return h("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M17 9V7a5 5 0 00-10 0v2m10 0v5a5 5 0 01-10 0V9m10 0a5 5 0 01-10 0",
      }),
    ]);
  },
};

// Card data
const cards = [
  {
    title: "Mission",
    description:
      "To ignite a culture of environmental stewardship in Kenya’s youth through hands-on education and trees planted in every school ground.",
    icon: MissionIcon,
  },
  {
    title: "Vision",
    description:
      "A Kenya where every learner becomes a lifelong guardian of the natural world, and every school is a hub of green innovation and hope.",
    icon: VisionIcon,
  },
  {
    title: "Values",
    description:
      "Growth, inclusion, sustainability, and action—forging lasting bonds between people, schools, and nature.",
    icon: ValuesIcon,
  },
];
</script>
