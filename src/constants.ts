import { Car } from './types';

export const CARS: Car[] = [
  {
    id: '1',
    make: 'Porsche',
    model: '911 Carrera',
    year: 2024,
    price: 114400,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000',
    category: 'Sport',
    specs: {
      engine: '3.0L Twin-Turbo Flat-6',
      power: '379 hp',
      acceleration: '4.0s (0-60 mph)',
      topSpeed: '182 mph'
    },
    description: 'The quintessential sports car, the 911 Carrera combines legendary performance with everyday usability.'
  },
  {
    id: '2',
    make: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2024,
    price: 114500,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000',
    category: 'Luxury',
    specs: {
      engine: '3.0L Inline-6 Turbo',
      power: '429 hp',
      acceleration: '4.8s (0-60 mph)',
      topSpeed: '130 mph'
    },
    description: 'The S-Class is the pinnacle of luxury, offering unparalleled comfort and cutting-edge technology.'
  },
  {
    id: '3',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2024,
    price: 89990,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1000',
    category: 'Electric',
    specs: {
      engine: 'Tri-Motor Electric',
      power: '1,020 hp',
      acceleration: '1.99s (0-60 mph)',
      topSpeed: '200 mph'
    },
    description: 'The Model S Plaid is the quickest accelerating car in production today, with insane electric performance.'
  },
  {
    id: '4',
    make: 'Range Rover',
    model: 'Autobiography',
    year: 2024,
    price: 141100,
    image: 'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80&w=1000',
    category: 'SUV',
    specs: {
      engine: '4.4L V8 Twin-Turbo',
      power: '523 hp',
      acceleration: '4.4s (0-60 mph)',
      topSpeed: '155 mph'
    },
    description: 'The Range Rover Autobiography defines modern luxury, combining off-road capability with exquisite refinement.'
  },
  {
    id: '5',
    make: 'Ferrari',
    model: 'Roma',
    year: 2023,
    price: 243360,
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1000',
    category: 'Sport',
    specs: {
      engine: '3.9L V8 Turbo',
      power: '612 hp',
      acceleration: '3.4s (0-60 mph)',
      topSpeed: '199 mph'
    },
    description: 'The Ferrari Roma is a contemporary representation of the carefree, pleasurable way of life that characterized Rome in the 1950s and 60s.'
  },
  {
    id: '6',
    make: 'Lucid',
    model: 'Air Sapphire',
    year: 2024,
    price: 249000,
    image: 'https://images.unsplash.com/photo-1669062394738-4663853e390c?auto=format&fit=crop&q=80&w=1000',
    category: 'Electric',
    specs: {
      engine: 'Tri-Motor Electric',
      power: '1,234 hp',
      acceleration: '1.89s (0-60 mph)',
      topSpeed: '205 mph'
    },
    description: 'The Lucid Air Sapphire is the world’s first luxury electric super-sports sedan, delivering unprecedented performance.'
  },
  {
    id: '7',
    make: 'BMW',
    model: 'M8 Competition',
    year: 2024,
    price: 138800,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000',
    category: 'Sport',
    specs: {
      engine: '4.4L V8 Twin-Turbo',
      power: '617 hp',
      acceleration: '3.0s (0-60 mph)',
      topSpeed: '190 mph'
    },
    description: 'The BMW M8 Competition Coupe is the pinnacle of the M lineup, offering track-ready performance in a luxurious package.'
  },
  {
    id: '8',
    make: 'Audi',
    model: 'RS e-tron GT',
    year: 2024,
    price: 147100,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000',
    category: 'Electric',
    specs: {
      engine: 'Dual Electric Motors',
      power: '637 hp',
      acceleration: '3.1s (0-60 mph)',
      topSpeed: '155 mph'
    },
    description: 'The Audi RS e-tron GT is a masterpiece of electric engineering, combining striking design with thrilling performance.'
  },
  {
    id: '9',
    make: 'Lamborghini',
    model: 'Urus Performante',
    year: 2024,
    price: 269885,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1000',
    category: 'SUV',
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '657 hp',
      acceleration: '3.3s (0-60 mph)',
      topSpeed: '190 mph'
    },
    description: 'The Lamborghini Urus Performante raises the bar for Super SUVs, delivering extreme performance on any road.'
  },
  {
    id: '10',
    make: 'Bentley',
    model: 'Continental GT',
    year: 2024,
    price: 238500,
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=1000',
    category: 'Luxury',
    specs: {
      engine: '6.0L W12 Twin-Turbo',
      power: '650 hp',
      acceleration: '3.5s (0-60 mph)',
      topSpeed: '208 mph'
    },
    description: 'The Bentley Continental GT is the definitive Grand Tourer, offering a perfect blend of power, craftsmanship, and luxury.'
  },
  {
    id: '11',
    make: 'Aston Martin',
    model: 'DB12',
    year: 2024,
    price: 245000,
    image: 'https://images.unsplash.com/photo-1603584173870-7f339f2b650b?auto=format&fit=crop&q=80&w=1000',
    category: 'Sport',
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '671 hp',
      acceleration: '3.5s (0-60 mph)',
      topSpeed: '202 mph'
    },
    description: 'The Aston Martin DB12 is the world’s first Super Tourer, redefining the grand touring experience with immense power.'
  },
  {
    id: '12',
    make: 'Rolls-Royce',
    model: 'Spectre',
    year: 2024,
    price: 420000,
    image: 'https://images.unsplash.com/photo-1631214524020-5e183976b971?auto=format&fit=crop&q=80&w=1000',
    category: 'Electric',
    specs: {
      engine: 'Dual Electric Motors',
      power: '577 hp',
      acceleration: '4.4s (0-60 mph)',
      topSpeed: '155 mph'
    },
    description: 'The Rolls-Royce Spectre is the first ultra-luxury electric super coupe, a spiritual successor to the Phantom Coupe.'
  },
  {
    id: '13',
    make: 'McLaren',
    model: '750S',
    year: 2024,
    price: 324000,
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=1000',
    category: 'Sport',
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '740 hp',
      acceleration: '2.7s (0-60 mph)',
      topSpeed: '206 mph'
    },
    description: 'The McLaren 750S is the new benchmark in supercar performance, lighter and more powerful than its predecessor.'
  },
  {
    id: '14',
    make: 'Bugatti',
    model: 'Chiron Super Sport',
    year: 2023,
    price: 3825000,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1000',
    category: 'Sport',
    specs: {
      engine: '8.0L W16 Quad-Turbo',
      power: '1,578 hp',
      acceleration: '2.4s (0-60 mph)',
      topSpeed: '273 mph'
    },
    description: 'The Bugatti Chiron Super Sport is the ultimate grand tourisme, delivering incomparable speed and luxury.'
  },
  {
    id: '15',
    make: 'Maserati',
    model: 'MC20',
    year: 2024,
    price: 212000,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000',
    category: 'Sport',
    specs: {
      engine: '3.0L V6 Twin-Turbo',
      power: '621 hp',
      acceleration: '2.9s (0-60 mph)',
      topSpeed: '202 mph'
    },
    description: 'The Maserati MC20 is a masterpiece of Italian engineering, marking a new era for the Trident brand.'
  },
  {
    id: '16',
    make: 'Porsche',
    model: 'Taycan Turbo S',
    year: 2024,
    price: 194900,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000',
    category: 'Electric',
    specs: {
      engine: 'Dual Electric Motors',
      power: '750 hp',
      acceleration: '2.6s (0-60 mph)',
      topSpeed: '161 mph'
    },
    description: 'The Porsche Taycan Turbo S is the soul of a Porsche, electrified. It delivers soul-stirring performance.'
  },
  {
    id: '17',
    make: 'Cadillac',
    model: 'Escalade-V',
    year: 2024,
    price: 149990,
    image: 'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80&w=1000',
    category: 'SUV',
    specs: {
      engine: '6.2L Supercharged V8',
      power: '682 hp',
      acceleration: '4.4s (0-60 mph)',
      topSpeed: '125 mph'
    },
    description: 'The Cadillac Escalade-V is the industry’s most powerful full-size SUV, combining luxury with raw power.'
  },
  {
    id: '18',
    make: 'Ferrari',
    model: 'Purosangue',
    year: 2024,
    price: 398350,
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1000',
    category: 'SUV',
    specs: {
      engine: '6.5L V12',
      power: '715 hp',
      acceleration: '3.3s (0-60 mph)',
      topSpeed: '193 mph'
    },
    description: 'The Ferrari Purosangue is the first ever four-door, four-seater car in Ferrari’s history, powered by a naturally aspirated V12.'
  },
  {
    id: '19',
    make: 'Rimac',
    model: 'Nevera',
    year: 2024,
    price: 2200000,
    image: 'https://images.unsplash.com/photo-1669062394738-4663853e390c?auto=format&fit=crop&q=80&w=1000',
    category: 'Electric',
    specs: {
      engine: 'Quad Electric Motors',
      power: '1,914 hp',
      acceleration: '1.81s (0-60 mph)',
      topSpeed: '258 mph'
    },
    description: 'The Rimac Nevera is an all-electric hypercar that redefines performance with its quad-motor setup.'
  },
  {
    id: '20',
    make: 'Pagani',
    model: 'Utopia',
    year: 2024,
    price: 2500000,
    image: 'https://images.unsplash.com/photo-1603584173870-7f339f2b650b?auto=format&fit=crop&q=80&w=1000',
    category: 'Sport',
    specs: {
      engine: '6.0L V12 Twin-Turbo',
      power: '852 hp',
      acceleration: '2.8s (0-60 mph)',
      topSpeed: '220 mph'
    },
    description: 'The Pagani Utopia is a work of art on wheels, combining timeless design with a powerful V12 engine.'
  },
  {
    id: '21',
    make: 'BMW',
    model: 'X5 M Competition',
    year: 2024,
    price: 122300,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000',
    category: 'SUV',
    specs: {
      engine: '4.4L V8 Twin-Turbo',
      power: '617 hp',
      acceleration: '3.7s (0-60 mph)',
      topSpeed: '177 mph'
    },
    description: 'The BMW X5 M Competition combines the versatility of an SUV with the heart-pounding performance of an M car.'
  },
  {
    id: '22',
    make: 'BMW',
    model: 'M4 Competition',
    year: 2024,
    price: 82200,
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=1000',
    category: 'Sport',
    specs: {
      engine: '3.0L Inline-6 Twin-Turbo',
      power: '503 hp',
      acceleration: '3.4s (0-60 mph)',
      topSpeed: '180 mph'
    },
    description: 'The BMW M4 Competition Coupe is a high-performance athlete, offering precision handling and explosive power.'
  },
  {
    id: '23',
    make: 'BMW',
    model: 'M3 Competition',
    year: 2024,
    price: 80200,
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=1000',
    category: 'Sport',
    specs: {
      engine: '3.0L Inline-6 Twin-Turbo',
      power: '503 hp',
      acceleration: '3.4s (0-60 mph)',
      topSpeed: '180 mph'
    },
    description: 'The BMW M3 Competition Sedan is the ultimate sports sedan, delivering track-ready performance in a four-door package.'
  }
];
