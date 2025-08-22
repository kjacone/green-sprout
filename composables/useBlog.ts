import { ref, onMounted } from 'vue';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  coverUrl: string;
  author: string;
  date: string;
}

export function useBlog() {
  const posts = ref<BlogPost[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const getLatestPosts = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch('/api/blog');
      if (!response.ok) {
        throw new Error('Could not fetch blog posts');
      }
      const data = await response.json();
      posts.value = Array.isArray(data) ? data : [];
    } catch (e: any) {
      error.value = e.message || 'An error occurred.';
    } finally {
      loading.value = false;
    }
  };

  // Automatically fetch on mount
  onMounted(getLatestPosts);

  return {
    posts,
    loading,
    error,
    getLatestPosts,
  };
}
