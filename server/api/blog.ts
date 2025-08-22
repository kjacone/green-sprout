import { defineEventHandler } from 'h3';

const DEMO_POSTS = [
  {
    id: 1,
    title: 'How Native Trees Are Changing Kenya',
    excerpt: 'Discover the impact of indigenous tree planting initiatives on communities and ecosystems in Kenya.',
    date: '2024-05-18',
    content: 'Native trees offer a host of ecological benefits, including support for biodiversity and resilience against climate change. Our latest projects highlight...' 
  },
  {
    id: 2,
    title: 'Volunteers Making a Difference',
    excerpt: 'Meet some of our passionate volunteers and see how they contribute to local tree planting drives and youth education.',
    date: '2024-05-12',
    content: "Our volunteers inspire us every day. From school visits to hands-on planting events, they're creating lasting change. Learn how you can join them!"
  },
  {
    id: 3,
    title: 'Why Partner With Green Sprout Kenya?',
    excerpt: 'Collaboration leads to greater impact. Explore the benefits of joining hands with us and how partnerships power our mission.',
    date: '2024-05-01',
    content: "Partnerships amplify our reach and resources, allowing us to plant more trees and educate more youths. Read success stories of our recent collaborations."
  }
];

export default defineEventHandler((event) => {
  if (event.method !== 'GET') {
    return { error: 'Method Not Allowed' };
  }
  return DEMO_POSTS;
});
