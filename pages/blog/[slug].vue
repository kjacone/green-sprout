<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted, computed } from 'vue';
import { useHead } from '@vueuse/head';
const route = useRoute();
const slug = route.params.slug as string;


const post = ref<any>(null);
const loading = ref(false);
const error = ref<string | null>(null);
const showShareMenu = ref(false);

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
  
  let imageUrl = post.value.coverUrl || 
                 extractFirstImage(post.value.content) || 
                 'https://www.greensprout.club/images/logo.jpeg';
  
  // Ensure absolute URL
  if (imageUrl && !imageUrl.startsWith('http')) {
    imageUrl = `https://www.greensprout.club${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
  }
  
  return imageUrl;
});

// Current page URL
const pageUrl = computed(() => `https://www.greensprout.club/blog/${slug}`);

// Share functions
const shareToWhatsApp = () => {
  const text = `${post.value.title}\n\n${pageUrl.value}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
};

const shareToFacebook = () => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl.value)}`, '_blank');
};

const shareToTwitter = () => {
  const text = post.value.title;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(pageUrl.value)}`, '_blank');
};

const shareToLinkedIn = () => {
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl.value)}`, '_blank');
};

const shareToTelegram = () => {
  const text = post.value.title;
  window.open(`https://t.me/share/url?url=${encodeURIComponent(pageUrl.value)}&text=${encodeURIComponent(text)}`, '_blank');
};

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(pageUrl.value);
    alert('Link copied to clipboard!');
    showShareMenu.value = false;
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};

// Native Web Share API (mobile devices)
const shareNative = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: post.value.title,
        text: post.value.excerpt,
        url: pageUrl.value,
      });
      showShareMenu.value = false;
    } catch (err) {
      console.error('Error sharing:', err);
    }
  } else {
    showShareMenu.value = !showShareMenu.value;
  }
};

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
      console.log('Cover image:', coverImage.value);
    }
  } catch (e: any) {
    error.value = e.message || 'Something went wrong';
  } finally {
    loading.value = false;
  }
});

// SEO tags for individual post
useHead(() => {
  if (!post.value) {
    return {
      title: 'Loading...',
      meta: []
    };
  }
  
  const imageUrl = coverImage.value;
  
  return {
    title: post.value.title || 'Blog Post',
    meta: [
      { name: 'description', content: post.value.excerpt || '' },
      
      // Open Graph tags (Facebook, WhatsApp, LinkedIn)
      { property: 'og:title', content: post.value.title || 'Blog Post' },
      { property: 'og:description', content: post.value.excerpt || '' },
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:secure_url', content: imageUrl },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: post.value.title || 'Blog Post' },
      { property: 'og:url', content: pageUrl.value },
      { property: 'og:type', content: 'article' },
      { property: 'og:site_name', content: 'Green Sprout Club' },
      
      // Twitter tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: post.value.title || 'Blog Post' },
      { name: 'twitter:description', content: post.value.excerpt || '' },
      { name: 'twitter:image', content: imageUrl },
      { name: 'twitter:image:alt', content: post.value.title || 'Blog Post' },
    ],
  };
});
</script>

<template>
  <div class="p-6 max-w-3xl mx-auto dark:bg-gray-800">
    <div v-if="loading" class="text-gray-500 dark:text-gray-300">Loading blog post...</div>
    <div v-else-if="error" class="text-red-500 dark:text-red-300">{{ error }}</div>
    <div v-else-if="post">
      <!-- Header with title and share button -->
      <div class="flex items-start justify-between mb-3">
        <h1 class="text-3xl font-bold text-green-700 dark:text-green-300 flex-1">{{ post.title }}</h1>
        
        <!-- Share Button -->
        <div class="relative ml-4">
          <button 
            @click="shareNative"
            class="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share
          </button>
          
          <!-- Share Menu Dropdown -->
          <div 
            v-if="showShareMenu"
            class="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-700 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 z-10"
          >
            <div class="py-2">
              <button 
                @click="shareToWhatsApp"
                class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center gap-3"
              >
                <svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span class="text-gray-700 dark:text-gray-200">WhatsApp</span>
              </button>
              
              <button 
                @click="shareToFacebook"
                class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center gap-3"
              >
                <svg class="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span class="text-gray-700 dark:text-gray-200">Facebook</span>
              </button>
              
              <button 
                @click="shareToTwitter"
                class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center gap-3"
              >
                <svg class="h-5 w-5 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span class="text-gray-700 dark:text-gray-200">Twitter / X</span>
              </button>
              
              <button 
                @click="shareToLinkedIn"
                class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center gap-3"
              >
                <svg class="h-5 w-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span class="text-gray-700 dark:text-gray-200">LinkedIn</span>
              </button>
              
              <button 
                @click="shareToTelegram"
                class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center gap-3"
              >
                <svg class="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span class="text-gray-700 dark:text-gray-200">Telegram</span>
              </button>
              
              <hr class="my-2 border-gray-200 dark:border-gray-600">
              
              <button 
                @click="copyLink"
                class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center gap-3"
              >
                <svg class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
                <span class="text-gray-700 dark:text-gray-200">Copy Link</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <p class="text-sm text-gray-500 dark:text-gray-300 mb-6">
        By {{ post.author }} • {{ new Date(post.date).toDateString() }}
      </p>
      
      <!-- Render Blogger HTML safely -->
      <div class="prose max-w-none dark:prose-invert" v-html="post.content"></div>
      
      <!-- Share buttons at bottom -->
      <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">Share this article:</p>
        <div class="flex flex-wrap gap-3">
          <button 
            @click="shareToWhatsApp"
            class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center gap-2 transition-colors"
          >
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </button>
          
          <button 
            @click="shareToFacebook"
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-colors"
          >
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </button>
          
          <button 
            @click="shareToTwitter"
            class="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg flex items-center gap-2 transition-colors"
          >
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Twitter
          </button>
          
          <button 
            @click="copyLink"
            class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg flex items-center gap-2 transition-colors"
          >
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
            Copy Link
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Close dropdown when clicking outside */
</style>