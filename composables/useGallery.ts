interface GalleryMedia {
  url: string;
  alt: string;
  caption: string;
}

export function useGallery() {
  const media: GalleryMedia[] = [
    {
      url: 'https://images.unsplash.com/photo-1464983953574-0892a716854b',
      alt: 'Children planting seedlings',
      caption: 'Students in Kenya taking part in a Green Sprout tree-planting event.'
    },
    {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      alt: 'Lush green forest',
      caption: 'A reforested area after community restoration efforts.'
    },
    {
      url: 'https://images.unsplash.com/photo-1606788075761-4694c9b68ac7',
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
    media
  };
}
