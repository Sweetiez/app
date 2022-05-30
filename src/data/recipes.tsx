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
    sleepTime: '5',
    cookingTime: '10',
    level: 'Débutant',
    cost: 50,
    portions: 4,
    steps: [
      {
        id: '1',
        number: 1,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam culpa, delectus expedita fugit ipsum laboriosam maiores maxime numquam reprehenderit, rerum sint unde vero! Accusamus id quod repudiandae?',
      },
      {
        id: '2',
        number: 2,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam culpa, delectus expedita fugit ipsum laboriosam maiores maxime numquam reprehenderit, rerum sint unde vero! Accusamus id quod repudiandae?',
      },
      {
        id: '3',
        number: 3,
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
    sleepTime: '5',
    cookingTime: '10',
    level: 'Débutant',
    cost: 50,
    portions: 4,
    steps: [
      {
        id: '1',
        number: 1,
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
    sleepTime: '5',
    cookingTime: '10',
    level: 'Normal',
    cost: 50,
    portions: 4,
    steps: [
      {
        id: '1',
        number: 1,
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
    sleepTime: '5',
    cookingTime: '10',
    level: 'Difficile',
    cost: 50,
    portions: 4,
    steps: [
      {
        id: '1',
        number: 1,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam culpa, delectus expedita fugit ipsum laboriosam maiores maxime numquam reprehenderit, rerum sint unde vero! Accusamus id quod repudiandae?',
      },
    ],
  },
];
