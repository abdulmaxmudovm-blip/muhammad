/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Car as CarIcon, Gauge, Zap, Trophy, ArrowRight, X, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { CARS } from './constants';
import { Car, Category } from './types';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const filteredCars = useMemo(() => {
    return CARS.filter((car) => {
      const matchesSearch = 
        car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.model.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Sidebar */}
      <aside className="w-72 sidebar-border p-10 flex flex-col justify-between shrink-0">
        <div className="space-y-16">
          <div className="flex items-center gap-2">
            <CarIcon className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold tracking-[0.2em] uppercase">MASHINALAR</span>
          </div>
          
          <nav>
            <ul className="space-y-6">
              {['All', 'Luxury', 'Sport', 'SUV', 'Electric'].map((cat) => (
                <li 
                  key={cat}
                  className={`nav-item cursor-pointer hover:opacity-100 ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat as Category)}
                >
                  {cat === 'All' ? 'Barchasi' : cat === 'Luxury' ? 'Lyuks' : cat === 'Sport' ? 'Sport' : cat === 'SUV' ? 'SUV' : 'Elektr'}
                </li>
              ))}
              <li className="nav-item cursor-pointer hover:opacity-100">Meros</li>
              <li className="nav-item cursor-pointer hover:opacity-100">Maxsus</li>
            </ul>
          </nav>
        </div>

        <div className="relative">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30" />
          <input 
            type="text"
            placeholder="QIDIRISH..."
            className="w-full bg-transparent border-b border-white/20 pb-2 pl-7 text-[10px] uppercase tracking-widest focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <ScrollArea className="h-full w-full">
          {/* Hero Section */}
          <section className="relative h-[80vh] p-16 flex flex-col justify-center overflow-hidden shrink-0">
            <div className="relative z-10 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="featured-tag block mb-4">Maxsus Taklif</span>
                <h1 className="car-title mb-8">
                  Mashinalar savdosiga<br />xush kelibsiz
                </h1>
                
                <div className="flex gap-12 mt-10">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">0-100 KM/S</span>
                    <span className="text-xl font-medium">2.8s</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Tezlik</span>
                    <span className="text-xl font-medium">342 KM/S</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Quvvat</span>
                    <span className="text-xl font-medium">720 HP</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Visual Placeholder / Background Image */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] h-[60%] pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-l-[200px] border border-white/5 flex items-center justify-center"
              >
                <span className="text-6xl font-serif italic opacity-10">2024 MODEL</span>
              </motion.div>
            </div>

            <button 
              className="absolute bottom-16 right-16 cta-circle"
              onClick={() => setSelectedCar(CARS[0])}
            >
              Batafsil
            </button>
          </section>

          {/* Car Grid Section */}
          <section className="p-16 pt-0">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold tracking-tight uppercase">Bizning To'plam</h2>
              <span className="text-xs uppercase tracking-widest opacity-40">{filteredCars.length} ta mashina</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              <AnimatePresence mode="popLayout">
                {filteredCars.map((car, index) => (
                  <motion.div
                    key={car.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="gallery-item aspect-square p-8 flex flex-col justify-end cursor-pointer group relative overflow-hidden border border-white/5"
                    onClick={() => setSelectedCar(car)}
                  >
                    <div className="relative z-10">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-primary mb-1">{car.make}</p>
                      <span className="block text-xl font-bold mb-1 group-hover:text-primary transition-colors">{car.model}</span>
                      <div className="flex gap-4 mt-2 opacity-60 text-[10px] uppercase tracking-widest">
                        <div className="flex items-center gap-1">
                          <Zap className="w-3 h-3 text-primary" />
                          <span>{car.specs.power}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Trophy className="w-3 h-3 text-primary" />
                          <span>{car.specs.topSpeed}</span>
                        </div>
                      </div>
                      <span className="block text-sm mt-3 font-medium text-primary/80">${car.price.toLocaleString()}</span>
                    </div>
                    {/* Image preview */}
                    <div className="absolute inset-0 opacity-30 group-hover:opacity-100 transition-all duration-500">
                      <img src={car.image} alt={car.model} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>

          {/* Footer inside scroll area */}
          <footer className="p-16 border-t border-white/10 opacity-40 text-[10px] uppercase tracking-widest flex justify-between items-center">
            <p>© 2024 MASHINALAR. Barcha huquqlar himoyalangan.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Maxfiylik siyosati</a>
              <a href="#" className="hover:text-primary transition-colors">Xizmat ko'rsatish shartlari</a>
            </div>
          </footer>
        </ScrollArea>
      </main>

      {/* Car Detail Dialog */}
      <Dialog open={!!selectedCar} onOpenChange={(open) => !open && setSelectedCar(null)}>
        <DialogContent className="max-w-5xl bg-background border-white/10 p-0 overflow-hidden">
          {selectedCar && (
            <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
              <div className="lg:w-3/5 relative h-64 lg:h-auto">
                <img 
                  src={selectedCar.image} 
                  alt={selectedCar.model}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden" />
              </div>
              
              <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col">
                <DialogHeader className="mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="border-white/20 text-white/60 text-[10px] uppercase tracking-widest">
                      {selectedCar.year}
                    </Badge>
                    <Badge variant="outline" className="border-white/20 text-white/60 text-[10px] uppercase tracking-widest">
                      {selectedCar.category}
                    </Badge>
                  </div>
                  <DialogTitle className="text-4xl font-bold mb-2">
                    {selectedCar.make} {selectedCar.model}
                  </DialogTitle>
                  <DialogDescription className="text-2xl text-white font-medium">
                    ${selectedCar.price.toLocaleString()}
                  </DialogDescription>
                </DialogHeader>

                <ScrollArea className="flex-1 pr-4">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4">Tavsif</h4>
                      <p className="text-white/60 leading-relaxed font-light">
                        {selectedCar.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4">Texnik Xususiyatlari</h4>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-[10px] uppercase text-white/40 mb-1">Dvigatel</p>
                          <p className="text-sm font-medium">{selectedCar.specs.engine}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase text-white/40 mb-1">Quvvat</p>
                          <p className="text-sm font-medium">{selectedCar.specs.power}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase text-white/40 mb-1">Tezlanish</p>
                          <p className="text-sm font-medium">{selectedCar.specs.acceleration}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase text-white/40 mb-1">Maks. Tezlik</p>
                          <p className="text-sm font-medium">{selectedCar.specs.topSpeed}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>

                <div className="mt-8 pt-8 border-t border-white/10 flex gap-4">
                  <Button className="flex-1 bg-white text-black hover:bg-white/90 uppercase tracking-widest text-xs font-bold h-12">
                    Sotib olish
                  </Button>
                  <Button variant="outline" className="flex-1 border-white/20 hover:bg-white/5 uppercase tracking-widest text-xs h-12">
                    Test drayv
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
