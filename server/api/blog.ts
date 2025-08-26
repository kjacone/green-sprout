import { defineEventHandler } from 'h3';

export default defineEventHandler(async () => {
  try {
    // Fetch Blogger JSON feed
    const res = await fetch('https://greensproutkenya.blogspot.com/feeds/posts/default?alt=json');
    if (!res.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    const data = await res.json();

    // Map Blogger data to your BlogPost structure
    const posts = data.feed.entry.map((entry: any, index: number) => ({
      id: index,
      title: entry.title.$t,
      excerpt: entry.summary?.$t || '',
      coverUrl: entry['media$thumbnail']?.url || '',
      author: entry.author?.[0]?.name?.$t || 'Unknown',
      date: entry.published.$t,
      slug: entry.id.$t.split('post-')[1], // crude slug from Blogger
    }));

    return posts;
  } catch (error: any) {
    return { error: error.message || 'Something went wrong' };
  }
});
