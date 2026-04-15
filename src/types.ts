export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  category: 'Luxury' | 'Sport' | 'SUV' | 'Electric';
  specs: {
    engine: string;
    power: string;
    acceleration: string;
    topSpeed: string;
  };
  description: string;
}

export type Category = Car['category'] | 'All';
