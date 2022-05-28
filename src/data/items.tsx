import {ProductCard} from '../model';

export const fakeProducts: ProductCard[] = [
  {
    id: '1',
    name: 'Tartelette daim caramel',
    price: 10,
    images: [
      'https://picsum.photos/1200/300',
      'https://picsum.photos/1220/300',
      'https://picsum.photos/4000/1600',
    ],
    rating: 4,
    shortDescription: 'ma petite description',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam culpa, delectus expedita fugit ipsum laboriosam maiores maxime numquam reprehenderit, rerum sint unde vero! Accusamus id quod repudiandae?',
    comments: [
      {
        id: '1',
        author: 'Aymeric',
        content:
          'Tu vas voir, avec du safran ce sera parfait. Gusteau ne jure que par le safran.',
        rating: 4,
        date: '16/03/2022',
      },
      {
        id: '2',
        author: 'Gwendal',
        content:
          'La grande cuisine n’est pas faite pour les timorés. Il faut avoir de l’imagination, de l’audace. Il faut prendre le risque de commettre des erreurs et personne n’a le droit de vous imposer des limites, quelles que soient vos origines, d’où que vous veniez. Votre seule limite, c’est votre âme. C’est la vérité, tout le monde peut cuisiner, mais le véritable génie, n’appartient qu’aux audacieux.',
        rating: 3,
        date: '20/03/2022',
      },
      {
        id: '3',
        author: 'Antonin',
        content:
          'A bien des égards la tache du critique est aisée. Nous ne risquons pas grand chose, et pourtant nous jouissons d’une position de supériorité par rapport a ceux qui se soumettent avec leur travail à notre jugement. Nous nous épanouissons dans la critique négative, plaisante à écrire et à lire. Mais l’amère vérité qu’il faut bien regarder en face c’est que, dans le grand ordre des choses, le met le plus médiocre a sans doute plus de valeur que notre critique qui le dénonce comme tel. Il est pourtant des circonstances où le critique prend un vrai risque. C’est lorsqu’il découvre et défend l’innovation. Le monde est souvent malveillant à l’encontre des nouveaux talents et de la création. Le nouveau a besoin d’amis. Hier soir j’ai vécu une expérience inédite et dégusté un plat extraordinaire d’une origine singulière s’il en est. Avancer que ce plat et son créateur ont radicalement changé l’idée que je me faisais de la grande cuisine serait peu dire. Ils m’ont bouleversé au plus profond de mon être. Je n’ai jamais fait mystère du mépris que m’inspirait la devise d’Auguste Gusteau « Tout le monde peut cuisiner ! ». Mais ce n’est qu’aujourd’hui, aujourd’hui seulement que je comprends vraiment ce qu’il voulait dire. Tout le monde ne peut pas devenir un grand artiste, mais un grand artiste peut surgir n’importe où. Il est difficile d’imaginer origine plus modeste que celle du génie qui officie maintenant chez Gusteau et qui est a nos yeux, rien moins que le plus grand cuisinier de France. Je retournerai bientôt chez Gusteau… plus affamé que jamais.',
        rating: 5,
        date: '27/03/2022',
      },
    ],
  },
  {
    id: '2',
    name: 'Tartelete Citron meringué',
    price: 10,
    images: ['https://picsum.photos/1220/300'],
    rating: 4,
    shortDescription:
      'large description large description large description large description large description large description large description large description large description',
    description: 'This is a test description',
    comments: [
      {
        id: '2',
        author: 'Aymeric',
        content: 'Miam',
        rating: 4,
        date: '20/03/2022',
      },
    ],
  },
  {
    id: '3',
    name: 'Mi-cuit chocolat',
    price: 10,
    images: ['https://picsum.photos/200/500'],
    rating: 4,
    shortDescription:
      'ma moyenne description ma moyenne description ma moyenne description',
    description:
      'This is a test large description This is a test large description',
    comments: [
      {
        id: '3',
        author: 'Aymeric',
        content: 'Miam',
        rating: 4,
        date: '27/03/2022',
      },
    ],
  },
  {
    id: '4',
    name: 'Crème brûlée',
    price: 10,
    images: ['https://picsum.photos/200/600'],
    rating: 5,
    shortDescription: 'ma petite description',
    description: 'This is a test description',
    comments: [
      {
        id: '4',
        author: 'Aymeric',
        content: 'Miam',
        rating: 4,
        date: '27/03/2022',
      },
    ],
  },
  {
    id: '5',
    name: 'Product 5',
    price: 10,
    images: ['https://picsum.photos/200/700'],
    rating: 1,
    shortDescription: 'ma petite description',
    description: 'This is a test description',
    comments: [
      {
        id: '5',
        author: 'Aymeric',
        content: 'Miam',
        rating: 4,
        date: '27/03/2022',
      },
    ],
  },
  {
    id: '6',
    name: 'Product 6',
    price: 10,
    images: ['https://picsum.photos/200/800'],
    rating: 2,
    shortDescription: 'ma petite description',
    description: 'This is a test description',
    comments: [
      {
        id: '6',
        author: 'Aymeric',
        content: 'Miam',
        rating: 4,
        date: '27/03/2022',
      },
    ],
  },
  {
    id: '7',
    name: 'Product 7',
    price: 10,
    shortDescription: 'ma petite description',
    images: ['https://picsum.photos/200/900'],
    rating: 3,
    description: 'This is a test description',
    comments: [
      {
        id: '7',
        author: 'Aymeric',
        content: 'Miam',
        rating: 4,
        date: '27/03/2022',
      },
    ],
  },
  {
    id: '8',
    name: 'Product 8',
    price: 10,
    images: ['https://picsum.photos/200/300'],
    rating: 3.3,
    shortDescription: 'ma petite description',
    description: 'This is a test description',
    comments: [
      {
        id: '8',
        author: 'Aymeric',
        content: 'Miam',
        rating: 4,
        date: '27/03/2022',
      },
    ],
  },
  {
    id: '9',
    name: 'Product 9',
    price: 10,
    images: ['https://picsum.photos/200/300'],
    rating: 4,
    shortDescription: 'ma petite description',
    description: 'This is a test description',
    comments: [
      {
        id: '9',
        author: 'Aymeric',
        content: 'Miam',
        rating: 4,
        date: '27/03/2022',
      },
    ],
  },
  {
    id: '10',
    name: 'Product 10',
    price: 10,
    images: ['https://picsum.photos/200/200'],
    rating: 4.5,
    shortDescription: 'ma petite description',
    description: 'This is a test description',
    comments: [
      {
        id: '10',
        author: 'Aymeric',
        content: 'Miam',
        rating: 4,
        date: '27/03/2022',
      },
    ],
  },
  {
    id: '11',
    name: 'Product 11',
    price: 10,
    images: ['https://picsum.photos/100/300'],
    rating: 0,
    shortDescription: 'ma petite description',
    description: 'This is a test description',
    comments: [
      {
        id: '11',
        author: 'Aymeric',
        content: 'Miam',
        rating: 4,
        date: '27/03/2022',
      },
    ],
  },
  {
    id: '12',
    name: 'Product 12',
    price: 10,
    images: ['https://picsum.photos/300/300'],
    rating: 1,
    shortDescription: 'ma petite description',
    description: 'This is a test description',
    comments: [
      {
        id: '12',
        author: 'Aymeric',
        content: 'Miam',
        rating: 4,
        date: '27/03/2022',
      },
    ],
  },
  {
    id: '13',
    name: 'Product 13',
    price: 10,
    images: ['https://picsum.photos/400/300'],
    rating: 2,
    shortDescription: 'ma petite description',
    description: 'This is a test description',
    comments: [
      {
        id: '13',
        author: 'Aymeric',
        content: 'Miam',
        rating: 4,
        date: '27/03/2022',
      },
    ],
  },
];
