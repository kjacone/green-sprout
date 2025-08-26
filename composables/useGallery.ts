interface GalleryMedia {
  url: string;
  alt: string;
  caption: string;
}

export function useGallery() {
  const images: GalleryMedia[] = [
    {
      url: '/images/1.jpeg',
      alt: 'Children planting seedlings',
      caption: 'Students in Kenya taking part in a Green Sprout tree-planting event.'
    },
    {
      url: '/images/2.jpeg',
      alt: 'Lush green forest',
      caption: 'A reforested area after community restoration efforts.'
    },
    {
      url: '/images/3.jpeg',
      alt: 'Volunteer watering a young tree',
      caption: 'Volunteers caring for saplings during early growth.'
    },
    {
      url: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3',
      alt: 'School children with tree saplings',
      caption: 'School outreach: kids receiving free saplings and educational materials.'
    },
    {
      url: 'https://images.unsplash.com/photo-1462478448389-cf7bfc0b2c2e',
      alt: 'Team planting trees near river',
      caption: 'Green Sprout team reforesting along a local river.'
    }
  ];

  return {
    images
  };
}
