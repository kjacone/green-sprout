import { useHead } from '@vueuse/head'

export const useDefaultSEO = () => {
  useHead({
    titleTemplate: (title?: string) =>
      title ? `${title} | Greensprout Kenya Blog` : 'Greensprout Kenya',
    meta: [
      { name: 'author', content: 'Greensprout Kenya' },
      { name: 'keywords', content: 'greensprout kenya, greensprout kenya blog, tree planting' },
      { property: 'og:greensprout', content: 'greensprout kenya' },
    ],
  })
}
