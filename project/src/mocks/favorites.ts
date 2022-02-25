import { Favorite } from '../types/favorites';
export const favorites: Favorite[] = [
  {
    bedrooms: 3,
    city: {
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating',
    ],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: [
      'img/1.png',
    ],
    isFavorite: true,
    isPremium: false,
    maxAdults: 4,
    previewImage: 'img/1.png',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
];
