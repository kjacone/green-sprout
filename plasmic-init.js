// plasmic-init.js
import { initPlasmicLoader } from "@plasmicapp/loader-vue";
import AboutStory from '~/components/AboutStory.vue';
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "greensprout",
      token: "ZOmmVcGW1lPiT3gTolq9ytOyKYZVO1vQcmAufXDv9AKIv9eT0T9NNlO2FCOt21Y7bc94wgqSwxuJ8jP4sA",
    },
  ],
  preview: true,  // optional, helpful for editing in Plasmic Studio
});

PLASMIC.substituteComponent(AboutStory, {
  name: 'AboutStory'
});