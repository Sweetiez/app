import {Recipe} from '../model';

export const fakeRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Tartelette daim caramel',
    images: [
      'https://picsum.photos/4000/1600',
      'https://picsum.photos/4000/1600',
    ],
    rating: 3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam culpa, delectus expedita fugit ipsum laboriosam maiores maxime numquam reprehenderit, rerum sint unde vero! Accusamus id quod repudiandae?',
    totalTime: '30',
    preparationTime: '15',
    chillTime: '5',
    cookTime: '10',
    difficulty: 'Débutant',
    cost: 50,
    people: 4,
    steps: [
      {
        id: '1',
        order: 1,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam culpa, delectus expedita fugit ipsum laboriosam maiores maxime numquam reprehenderit, rerum sint unde vero! Accusamus id quod repudiandae?',
      },
      {
        id: '2',
        order: 2,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam culpa, delectus expedita fugit ipsum laboriosam maiores maxime numquam reprehenderit, rerum sint unde vero! Accusamus id quod repudiandae?',
      },
      {
        id: '3',
        order: 3,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam culpa, delectus expedita fugit ipsum laboriosam maiores maxime numquam reprehenderit, rerum sint unde vero! Accusamus id quod repudiandae?',
      },
    ],
  },
  {
    id: '2',
    name: 'Tartelete Citron meringué',
    images: ['https://picsum.photos/4000/1600'],
    rating: 5,
    description:
      'Sahhh ... une masterclass !! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam culpa, delectus expedita fugit ipsum laboriosam maiores maxime numquam reprehenderit, rerum sint unde vero! Accusamus id quod repudiandae?',
    totalTime: '30',
    preparationTime: '15',
    chillTime: '5',
    cookTime: '10',
    difficulty: 'Débutant',
    cost: 50,
    people: 4,
    steps: [
      {
        id: '1',
        order: 1,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam culpa, delectus expedita fugit ipsum laboriosam maiores maxime numquam reprehenderit, rerum sint unde vero! Accusamus id quod repudiandae?',
      },
    ],
  },
  {
    id: '3',
    name: 'Mini burgers',
    images: ['https://picsum.photos/4000/1600'],
    rating: 5,
    description:
      'Sahhh ... une masterclass !! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam culpa, delectus expedita fugit ipsum laboriosam maiores maxime numquam reprehenderit, rerum sint unde vero! Accusamus id quod repudiandae?',
    totalTime: '30',
    preparationTime: '15',
    chillTime: '5',
    cookTime: '10',
    difficulty: 'Normal',
    cost: 50,
    people: 4,
    steps: [
      {
        id: '1',
        order: 1,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam culpa, delectus expedita fugit ipsum laboriosam maiores maxime numquam reprehenderit, rerum sint unde vero! Accusamus id quod repudiandae?',
      },
    ],
  },
  {
    id: '4',
    name: 'Jai vraiment faim',
    images: ['https://picsum.photos/4000/1600'],
    rating: 0,
    description:
      'laboriosam maiores maxime numquam reprehenderit, rerum sint unde vero! Accusamus id quod repudiandae?',
    totalTime: '30',
    preparationTime: '15',
    chillTime: '5',
    cookingTime: '10',
    difficulty: 'Difficile',
    cost: 50,
    people: 4,
    steps: [
      {
        id: '1',
        order: 1,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam culpa, delectus expedita fugit ipsum laboriosam maiores maxime numquam reprehenderit, rerum sint unde vero! Accusamus id quod repudiandae?',
      },
    ],
  },
];
