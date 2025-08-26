import { defineEventHandler, getRouterParam } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, 'slug');

    const res = await fetch('https://greensproutkenya.blogspot.com/feeds/posts/default?alt=json');
    if (!res.ok) throw new Error('Failed to fetch blog posts');

    const data = await res.json();

    const post = data.feed.entry.find((entry: any) =>
      entry.id.$t.includes(slug)
    );

    if (!post) {
      return { error: 'Post not found' };
    }

    return {
      id: post.id.$t,
      title: post.title.$t,
      content: post.content?.$t || '',
      author: post.author?.[0]?.name?.$t || 'Unknown',
      date: post.published.$t,
      slug,
    };
  } catch (error: any) {
    return { error: error.message || 'Something went wrong' };
  }
});
