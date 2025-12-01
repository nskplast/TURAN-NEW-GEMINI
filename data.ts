

import { Product, BlogPost } from './types';

export const PRODUCTS: Product[] = [
  // --- PET STRAP (Embossed) ---
  // 9mm Series
  { 
    id: 'pet-9-06', 
    name: 'PET Strap 9.0x0.6mm 3400m Embossed', 
    name_ru: 'Лента ПЭТ 9,0*0,6мм 3400м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1595852804349-23c0655110b4?auto=format&fit=crop&w=800&q=80', 
    description: 'Standard strap. Break: 190 kgf.', 
    description_ru: 'Стандартная лента. Нагрузка: 190 кгс.',
    price: 3650.00,
    specs: { 'Size': '9.0x0.6mm', 'Length': '3400m', 'Break Strength': '1860 N (190 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '9,0х0,6мм', 'Намотка': '3400м', 'Разрывная нагрузка': '190 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-9-062', 
    name: 'PET Strap 9.0x0.62mm 3350m Embossed', 
    name_ru: 'Лента ПЭТ 9,0*0,62мм 3350м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1595852804349-23c0655110b4?auto=format&fit=crop&w=800&q=80', 
    description: 'Standard strap. Break: 195 kgf.', 
    description_ru: 'Стандартная лента. Нагрузка: 195 кгс.',
    price: 3700.00,
    specs: { 'Size': '9.0x0.62mm', 'Length': '3350m', 'Break Strength': '1910 N (195 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '9,0х0,62мм', 'Намотка': '3350м', 'Разрывная нагрузка': '195 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-95-06', 
    name: 'PET Strap 9.5x0.6mm 3000m Embossed', 
    name_ru: 'Лента ПЭТ 9,5*0,6мм 3000м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1595852804349-23c0655110b4?auto=format&fit=crop&w=800&q=80', 
    description: 'Standard strap. Break: 195 kgf.', 
    description_ru: 'Стандартная лента. Нагрузка: 195 кгс.',
    price: 3550.00,
    specs: { 'Size': '9.5x0.6mm', 'Length': '3000m', 'Break Strength': '1930 N (195 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '9,5х0,6мм', 'Намотка': '3000м', 'Разрывная нагрузка': '195 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-95-065', 
    name: 'PET Strap 9.5x0.65mm 2800m Embossed', 
    name_ru: 'Лента ПЭТ 9,5*0,65мм 2800м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1595852804349-23c0655110b4?auto=format&fit=crop&w=800&q=80', 
    description: 'Standard strap. Break: 200 kgf.', 
    description_ru: 'Стандартная лента. Нагрузка: 200 кгс.',
    price: 3600.00,
    specs: { 'Size': '9.5x0.65mm', 'Length': '2800m', 'Break Strength': '1950 N (200 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '9,5х0,65мм', 'Намотка': '2800м', 'Разрывная нагрузка': '200 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  // 10-11mm Series
  { 
    id: 'pet-105-052', 
    name: 'PET Strap 10.5x0.52mm 3350m Embossed', 
    name_ru: 'Лента ПЭТ 10,5*0,52мм 3350м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1595852804349-23c0655110b4?auto=format&fit=crop&w=800&q=80', 
    description: 'Economy strap. Break: 175 kgf.', 
    description_ru: 'Эконом лента. Нагрузка: 175 кгс.',
    price: 3500.00,
    specs: { 'Size': '10.5x0.52mm', 'Length': '3350m', 'Break Strength': '1700 N (175 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '10,5х0,52мм', 'Намотка': '3350м', 'Разрывная нагрузка': '175 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-11-06', 
    name: 'PET Strap 11.0x0.6mm 2700m Embossed', 
    name_ru: 'Лента ПЭТ 11,0*0,6мм 2700м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1595852804349-23c0655110b4?auto=format&fit=crop&w=800&q=80', 
    description: 'Standard strap. Break: 225 kgf.', 
    description_ru: 'Стандартная лента. Нагрузка: 225 кгс.',
    price: 3600.00,
    specs: { 'Size': '11.0x0.6mm', 'Length': '2700m', 'Break Strength': '2205 N (225 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '11,0х0,6мм', 'Намотка': '2700м', 'Разрывная нагрузка': '225 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-11-076', 
    name: 'PET Strap 11.0x0.76mm 2100m Embossed', 
    name_ru: 'Лента ПЭТ 11,0*0,76мм 2100м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1595852804349-23c0655110b4?auto=format&fit=crop&w=800&q=80', 
    description: 'Heavy duty. Break: 285 kgf.', 
    description_ru: 'Усиленная лента. Нагрузка: 285 кгс.',
    price: 3650.00,
    specs: { 'Size': '11.0x0.76mm', 'Length': '2100m', 'Break Strength': '2795 N (285 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '11,0х0,76мм', 'Намотка': '2100м', 'Разрывная нагрузка': '285 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  // 12mm Series
  { 
    id: 'pet-12-055', 
    name: 'PET Strap 12.0x0.55mm 2700m Embossed', 
    name_ru: 'Лента ПЭТ 12,0*0,55мм 2700м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1595852804349-23c0655110b4?auto=format&fit=crop&w=800&q=80', 
    description: 'Auto machine strap. Break: 225 kgf.', 
    description_ru: 'Для автоматов. Нагрузка: 225 кгс.',
    price: 3600.00,
    specs: { 'Size': '12.0x0.55mm', 'Length': '2700m', 'Break Strength': '2205 N (225 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '12,0х0,55мм', 'Намотка': '2700м', 'Разрывная нагрузка': '225 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-12-06', 
    name: 'PET Strap 12.0x0.6mm 2500m Embossed', 
    name_ru: 'Лента ПЭТ 12,0*0,6мм 2500м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1595852804349-23c0655110b4?auto=format&fit=crop&w=800&q=80', 
    description: 'Popular size. Break: 245 kgf.', 
    description_ru: 'Популярный размер. Нагрузка: 245 кгс.',
    price: 3650.00,
    specs: { 'Size': '12.0x0.6mm', 'Length': '2500m', 'Break Strength': '2400 N (245 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '12,0х0,6мм', 'Намотка': '2500м', 'Разрывная нагрузка': '245 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-12-07', 
    name: 'PET Strap 12.0x0.7mm 2200m Embossed', 
    name_ru: 'Лента ПЭТ 12,0*0,7мм 2200м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1595852804349-23c0655110b4?auto=format&fit=crop&w=800&q=80', 
    description: 'High strength. Break: 285 kgf.', 
    description_ru: 'Высокая прочность. Нагрузка: 285 кгс.',
    price: 3700.00,
    specs: { 'Size': '12.0x0.7mm', 'Length': '2200m', 'Break Strength': '2795 N (285 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '12,0х0,7мм', 'Намотка': '2200м', 'Разрывная нагрузка': '285 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-12-08', 
    name: 'PET Strap 12.0x0.8mm 1900m Embossed', 
    name_ru: 'Лента ПЭТ 12,0*0,8мм 1900м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1595852804349-23c0655110b4?auto=format&fit=crop&w=800&q=80', 
    description: 'Heavy duty. Break: 325 kgf.', 
    description_ru: 'Усиленная. Нагрузка: 325 кгс.',
    price: 3750.00,
    specs: { 'Size': '12.0x0.8mm', 'Length': '1900m', 'Break Strength': '3185 N (325 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '12,0х0,8мм', 'Намотка': '1900м', 'Разрывная нагрузка': '325 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-12-09', 
    name: 'PET Strap 12.0x0.9mm 1700m Embossed', 
    name_ru: 'Лента ПЭТ 12,0*0,9мм 1700м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1595852804349-23c0655110b4?auto=format&fit=crop&w=800&q=80', 
    description: 'Extra heavy. Break: 365 kgf.', 
    description_ru: 'Особо прочная. Нагрузка: 365 кгс.',
    price: 3800.00,
    specs: { 'Size': '12.0x0.9mm', 'Length': '1700m', 'Break Strength': '3575 N (365 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '12,0х0,9мм', 'Намотка': '1700м', 'Разрывная нагрузка': '365 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  // 15.5mm Series
  { 
    id: 'pet-155-06', 
    name: 'PET Strap 15.5x0.6mm 1800m Embossed', 
    name_ru: 'Лента ПЭТ 15,5*0,6мм 1800м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&w=800&q=80', 
    description: 'Construction strap. Break: 315 kgf.', 
    description_ru: 'Строительная лента. Нагрузка: 315 кгс.',
    price: 3600.00,
    specs: { 'Size': '15.5x0.6mm', 'Length': '1800m', 'Break Strength': '3085 N (315 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '15,5х0,6мм', 'Намотка': '1800м', 'Разрывная нагрузка': '315 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-155-07', 
    name: 'PET Strap 15.5x0.7mm 1600m Embossed', 
    name_ru: 'Лента ПЭТ 15,5*0,7мм 1600м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&w=800&q=80', 
    description: 'Construction strap. Break: 370 kgf.', 
    description_ru: 'Строительная лента. Нагрузка: 370 кгс.',
    price: 3650.00,
    specs: { 'Size': '15.5x0.7mm', 'Length': '1600m', 'Break Strength': '3625 N (370 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '15,5х0,7мм', 'Намотка': '1600м', 'Разрывная нагрузка': '370 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-155-08', 
    name: 'PET Strap 15.5x0.8mm 1400m Embossed', 
    name_ru: 'Лента ПЭТ 15,5*0,8мм 1400м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&w=800&q=80', 
    description: 'Brick/Block strap. Break: 420 kgf.', 
    description_ru: 'Лента для кирпича. Нагрузка: 420 кгс.',
    price: 3700.00,
    specs: { 'Size': '15.5x0.8mm', 'Length': '1400m', 'Break Strength': '4115 N (420 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '15,5х0,8мм', 'Намотка': '1400м', 'Разрывная нагрузка': '420 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-155-089', 
    name: 'PET Strap 15.5x0.89mm 1250m Embossed', 
    name_ru: 'Лента ПЭТ 15,5*0,89мм 1250м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&w=800&q=80', 
    description: 'Premium heavy duty. Break: 470 kgf.', 
    description_ru: 'Премиум усиленная. Нагрузка: 470 кгс.',
    price: 3750.00,
    specs: { 'Size': '15.5x0.89mm', 'Length': '1250m', 'Break Strength': '4605 N (470 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '15,5х0,89мм', 'Намотка': '1250м', 'Разрывная нагрузка': '470 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  // 16mm Series
  { 
    id: 'pet-16-08', 
    name: 'PET Strap 16.0x0.8mm 1400m Embossed', 
    name_ru: 'Лента ПЭТ 16,0*0,8мм 1400м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&w=800&q=80', 
    description: 'Heavy duty. Break: 465 kgf.', 
    description_ru: 'Усиленная. Нагрузка: 465 кгс.',
    price: 3750.00,
    specs: { 'Size': '16.0x0.8mm', 'Length': '1400m', 'Break Strength': '4550 N (465 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '16,0х0,8мм', 'Намотка': '1400м', 'Разрывная нагрузка': '465 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-16-10', 
    name: 'PET Strap 16.0x1.0mm 1100m Embossed', 
    name_ru: 'Лента ПЭТ 16,0*1,0мм 1100м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&w=800&q=80', 
    description: 'Extra Heavy duty. Break: 545 kgf.', 
    description_ru: 'Особо прочная. Нагрузка: 545 кгс.',
    price: 3800.00,
    specs: { 'Size': '16.0x1.0mm', 'Length': '1100m', 'Break Strength': '5350 N (545 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '16,0х1,0мм', 'Намотка': '1100м', 'Разрывная нагрузка': '545 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  // 18-19mm Series
  { 
    id: 'pet-185-08', 
    name: 'PET Strap 18.5x0.8mm 1200m Embossed', 
    name_ru: 'Лента ПЭТ 18,5*0,8мм 1200м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Wide strap. Break: 495 kgf.', 
    description_ru: 'Широкая лента. Нагрузка: 495 кгс.',
    price: 3750.00,
    specs: { 'Size': '18.5x0.8mm', 'Length': '1200m', 'Break Strength': '4850 N (495 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '18,5х0,8мм', 'Намотка': '1200м', 'Разрывная нагрузка': '495 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-185-09', 
    name: 'PET Strap 18.5x0.9mm 1050m Embossed', 
    name_ru: 'Лента ПЭТ 18,5*0,9мм 1050м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Wide strap. Break: 515 kgf.', 
    description_ru: 'Широкая лента. Нагрузка: 515 кгс.',
    price: 3800.00,
    specs: { 'Size': '18.5x0.9mm', 'Length': '1050m', 'Break Strength': '5050 N (515 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '18,5х0,9мм', 'Намотка': '1050м', 'Разрывная нагрузка': '515 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-19-08', 
    name: 'PET Strap 19.0x0.8mm 1100m Embossed', 
    name_ru: 'Лента ПЭТ 19,0*0,8мм 1100м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Standard 19mm. Break: 515 kgf.', 
    description_ru: 'Стандарт 19мм. Нагрузка: 515 кгс.',
    price: 3800.00,
    specs: { 'Size': '19.0x0.8mm', 'Length': '1100m', 'Break Strength': '5050 N (515 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '19,0х0,8мм', 'Намотка': '1100м', 'Разрывная нагрузка': '515 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-19-09', 
    name: 'PET Strap 19.0x0.9mm 1000m Embossed', 
    name_ru: 'Лента ПЭТ 19,0*0,9мм 1000м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Heavy 19mm. Break: 580 kgf.', 
    description_ru: 'Усиленная 19мм. Нагрузка: 580 кгс.',
    price: 3850.00,
    specs: { 'Size': '19.0x0.9mm', 'Length': '1000m', 'Break Strength': '5700 N (580 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '19,0х0,9мм', 'Намотка': '1000м', 'Разрывная нагрузка': '580 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-19-10', 
    name: 'PET Strap 19.0x1.0mm 900m Embossed', 
    name_ru: 'Лента ПЭТ 19,0*1,0мм 900м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Extra Heavy 19mm. Break: 650 kgf.', 
    description_ru: 'Особо прочная 19мм. Нагрузка: 650 кгс.',
    price: 3900.00,
    specs: { 'Size': '19.0x1.0mm', 'Length': '900m', 'Break Strength': '6350 N (650 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '19,0х1,0мм', 'Намотка': '900м', 'Разрывная нагрузка': '650 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-19-127', 
    name: 'PET Strap 19.0x1.27mm 700m Embossed', 
    name_ru: 'Лента ПЭТ 19,0*1,27мм 700м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Ultra Heavy 19mm. Break: 765 kgf.', 
    description_ru: 'Ультра прочная 19мм. Нагрузка: 765 кгс.',
    price: 3950.00,
    specs: { 'Size': '19.0x1.27mm', 'Length': '700m', 'Break Strength': '7500 N (765 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '19,0х1,27мм', 'Намотка': '700м', 'Разрывная нагрузка': '765 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  // 25-32mm Series
  { 
    id: 'pet-25-10', 
    name: 'PET Strap 25.0x1.0mm 700m Embossed', 
    name_ru: 'Лента ПЭТ 25,0*1,0мм 700м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1589822466118-686113c34fb3?auto=format&fit=crop&w=800&q=80', 
    description: 'Industrial 25mm. Break: 845 kgf.', 
    description_ru: 'Промышленная 25мм. Нагрузка: 845 кгс.',
    price: 4200.00,
    specs: { 'Size': '25.0x1.0mm', 'Length': '700m', 'Break Strength': '8300 N (845 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '25,0х1,0мм', 'Намотка': '700м', 'Разрывная нагрузка': '845 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-25-127', 
    name: 'PET Strap 25.0x1.27mm 550m Embossed', 
    name_ru: 'Лента ПЭТ 25,0*1,27мм 550м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1589822466118-686113c34fb3?auto=format&fit=crop&w=800&q=80', 
    description: 'Industrial 25mm. Break: 1070 kgf.', 
    description_ru: 'Промышленная 25мм. Нагрузка: 1070 кгс.',
    price: 4300.00,
    specs: { 'Size': '25.0x1.27mm', 'Length': '550m', 'Break Strength': '10500 N (1070 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '25,0х1,27мм', 'Намотка': '550м', 'Разрывная нагрузка': '1070 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-25-13', 
    name: 'PET Strap 25.0x1.3mm 550m Embossed', 
    name_ru: 'Лента ПЭТ 25,0*1,3мм 550м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1589822466118-686113c34fb3?auto=format&fit=crop&w=800&q=80', 
    description: 'Max Strength 25mm. Break: 1100 kgf.', 
    description_ru: 'Макс прочность 25мм. Нагрузка: 1100 кгс.',
    price: 4350.00,
    specs: { 'Size': '25.0x1.3mm', 'Length': '550m', 'Break Strength': '10800 N (1100 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '25,0х1,3мм', 'Намотка': '550м', 'Разрывная нагрузка': '1100 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-32-127', 
    name: 'PET Strap 32.0x1.27mm 700m Embossed', 
    name_ru: 'Лента ПЭТ 32,0*1,27мм 700м Рифленая',
    category: 'PET Strap', 
    subcategory: 'embossed',
    imageUrl: 'https://images.unsplash.com/photo-1589822466118-686113c34fb3?auto=format&fit=crop&w=800&q=80', 
    description: 'Jumbo Strap 32mm. Break: 1375 kgf.', 
    description_ru: 'Джамбо Лента 32мм. Нагрузка: 1375 кгс.',
    price: 5500.00,
    specs: { 'Size': '32.0x1.27mm', 'Length': '700m', 'Break Strength': '13500 N (1375 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '32,0х1,27мм', 'Намотка': '700м', 'Разрывная нагрузка': '1375 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },

  // --- PET STRAP (Smooth) ---
  // 9mm Series
  { 
    id: 'pet-9-06-sm', 
    name: 'PET Strap 9.0x0.6mm 3400m Smooth', 
    name_ru: 'Лента ПЭТ 9,0*0,6мм 3400м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'High tensile smooth. Break: 250 kgf.', 
    description_ru: 'Высокопрочная гладкая. Нагрузка: 250 кгс.',
    price: 3700.00,
    specs: { 'Size': '9.0x0.6mm', 'Length': '3400m', 'Break Strength': '2450 N (250 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '9,0х0,6мм', 'Намотка': '3400м', 'Разрывная нагрузка': '250 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-9-062-sm', 
    name: 'PET Strap 9.0x0.62mm 3350m Smooth', 
    name_ru: 'Лента ПЭТ 9,0*0,62мм 3350м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'High tensile smooth. Break: 260 kgf.', 
    description_ru: 'Высокопрочная гладкая. Нагрузка: 260 кгс.',
    price: 3750.00,
    specs: { 'Size': '9.0x0.62mm', 'Length': '3350m', 'Break Strength': '2550 N (260 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '9,0х0,62мм', 'Намотка': '3350м', 'Разрывная нагрузка': '260 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-95-06-sm', 
    name: 'PET Strap 9.5x0.6mm 3000m Smooth', 
    name_ru: 'Лента ПЭТ 9,5*0,6мм 3000м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'High tensile smooth. Break: 265 kgf.', 
    description_ru: 'Высокопрочная гладкая. Нагрузка: 265 кгс.',
    price: 3600.00,
    specs: { 'Size': '9.5x0.6mm', 'Length': '3000m', 'Break Strength': '2600 N (265 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '9,5х0,6мм', 'Намотка': '3000м', 'Разрывная нагрузка': '265 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-95-065-sm', 
    name: 'PET Strap 9.5x0.65mm 2800m Smooth', 
    name_ru: 'Лента ПЭТ 9,5*0,65мм 2800м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'High tensile smooth. Break: 270 kgf.', 
    description_ru: 'Высокопрочная гладкая. Нагрузка: 270 кгс.',
    price: 3650.00,
    specs: { 'Size': '9.5x0.65mm', 'Length': '2800m', 'Break Strength': '2650 N (270 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '9,5х0,65мм', 'Намотка': '2800м', 'Разрывная нагрузка': '270 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  // 10-12mm Series
  { 
    id: 'pet-105-052-sm', 
    name: 'PET Strap 10.5x0.52mm 3350m Smooth', 
    name_ru: 'Лента ПЭТ 10,5*0,52мм 3350м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 225 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 225 кгс.',
    price: 3550.00,
    specs: { 'Size': '10.5x0.52mm', 'Length': '3350m', 'Break Strength': '2200 N (225 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '10,5х0,52мм', 'Намотка': '3350м', 'Разрывная нагрузка': '225 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-11-06-sm', 
    name: 'PET Strap 11.0x0.6mm 2700m Smooth', 
    name_ru: 'Лента ПЭТ 11,0*0,6мм 2700м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 290 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 290 кгс.',
    price: 3650.00,
    specs: { 'Size': '11.0x0.6mm', 'Length': '2700m', 'Break Strength': '2850 N (290 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '11,0х0,6мм', 'Намотка': '2700м', 'Разрывная нагрузка': '290 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-11-076-sm', 
    name: 'PET Strap 11.0x0.76mm 2100m Smooth', 
    name_ru: 'Лента ПЭТ 11,0*0,76мм 2100м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 370 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 370 кгс.',
    price: 3700.00,
    specs: { 'Size': '11.0x0.76mm', 'Length': '2100m', 'Break Strength': '3650 N (370 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '11,0х0,76мм', 'Намотка': '2100м', 'Разрывная нагрузка': '370 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-12-055-sm', 
    name: 'PET Strap 12.0x0.55mm 2700m Smooth', 
    name_ru: 'Лента ПЭТ 12,0*0,55мм 2700м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 290 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 290 кгс.',
    price: 3650.00,
    specs: { 'Size': '12.0x0.55mm', 'Length': '2700m', 'Break Strength': '2850 N (290 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '12,0х0,55мм', 'Намотка': '2700м', 'Разрывная нагрузка': '290 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-12-06-sm', 
    name: 'PET Strap 12.0x0.6mm 2500m Smooth', 
    name_ru: 'Лента ПЭТ 12,0*0,6мм 2500м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 320 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 320 кгс.',
    price: 3700.00,
    specs: { 'Size': '12.0x0.6mm', 'Length': '2500m', 'Break Strength': '3150 N (320 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '12,0х0,6мм', 'Намотка': '2500м', 'Разрывная нагрузка': '320 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-12-07-sm', 
    name: 'PET Strap 12.0x0.7mm 2200m Smooth', 
    name_ru: 'Лента ПЭТ 12,0*0,7мм 2200м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 375 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 375 кгс.',
    price: 3750.00,
    specs: { 'Size': '12.0x0.7mm', 'Length': '2200m', 'Break Strength': '3700 N (375 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '12,0х0,7мм', 'Намотка': '2200м', 'Разрывная нагрузка': '375 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-12-08-sm', 
    name: 'PET Strap 12.0x0.8mm 1900m Smooth', 
    name_ru: 'Лента ПЭТ 12,0*0,8мм 1900м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 430 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 430 кгс.',
    price: 3800.00,
    specs: { 'Size': '12.0x0.8mm', 'Length': '1900m', 'Break Strength': '4200 N (430 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '12,0х0,8мм', 'Намотка': '1900м', 'Разрывная нагрузка': '430 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-12-09-sm', 
    name: 'PET Strap 12.0x0.9mm 1700m Smooth', 
    name_ru: 'Лента ПЭТ 12,0*0,9мм 1700м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 485 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 485 кгс.',
    price: 3850.00,
    specs: { 'Size': '12.0x0.9mm', 'Length': '1700m', 'Break Strength': '4750 N (485 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '12,0х0,9мм', 'Намотка': '1700м', 'Разрывная нагрузка': '485 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  // 15.5mm Series
  { 
    id: 'pet-155-06-sm', 
    name: 'PET Strap 15.5x0.6mm 1800m Smooth', 
    name_ru: 'Лента ПЭТ 15,5*0,6мм 1800м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 420 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 420 кгс.',
    price: 3650.00,
    specs: { 'Size': '15.5x0.6mm', 'Length': '1800m', 'Break Strength': '4100 N (420 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '15,5х0,6мм', 'Намотка': '1800м', 'Разрывная нагрузка': '420 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-155-07-sm', 
    name: 'PET Strap 15.5x0.7mm 1600m Smooth', 
    name_ru: 'Лента ПЭТ 15,5*0,7мм 1600м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 490 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 490 кгс.',
    price: 3700.00,
    specs: { 'Size': '15.5x0.7mm', 'Length': '1600m', 'Break Strength': '4800 N (490 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '15,5х0,7мм', 'Намотка': '1600м', 'Разрывная нагрузка': '490 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-155-08-sm', 
    name: 'PET Strap 15.5x0.8mm 1400m Smooth', 
    name_ru: 'Лента ПЭТ 15,5*0,8мм 1400м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 555 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 555 кгс.',
    price: 3750.00,
    specs: { 'Size': '15.5x0.8mm', 'Length': '1400m', 'Break Strength': '5450 N (555 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '15,5х0,8мм', 'Намотка': '1400м', 'Разрывная нагрузка': '555 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-155-089-sm', 
    name: 'PET Strap 15.5x0.89mm 1250m Smooth', 
    name_ru: 'Лента ПЭТ 15,5*0,89мм 1250м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 615 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 615 кгс.',
    price: 3800.00,
    specs: { 'Size': '15.5x0.89mm', 'Length': '1250m', 'Break Strength': '6030 N (615 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '15,5х0,89мм', 'Намотка': '1250м', 'Разрывная нагрузка': '615 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  // 16mm Series
  { 
    id: 'pet-16-08-sm', 
    name: 'PET Strap 16.0x0.8mm 1400m Smooth', 
    name_ru: 'Лента ПЭТ 16,0*0,8мм 1400м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 665 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 665 кгс.',
    price: 3800.00,
    specs: { 'Size': '16.0x0.8mm', 'Length': '1400m', 'Break Strength': '6500 N (665 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '16,0х0,8мм', 'Намотка': '1400м', 'Разрывная нагрузка': '665 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-16-10-sm', 
    name: 'PET Strap 16.0x1.0mm 1100m Smooth', 
    name_ru: 'Лента ПЭТ 16,0*1,0мм 1100м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 715 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 715 кгс.',
    price: 3850.00,
    specs: { 'Size': '16.0x1.0mm', 'Length': '1100m', 'Break Strength': '7000 N (715 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '16,0х1,0мм', 'Намотка': '1100м', 'Разрывная нагрузка': '715 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  // 18-19mm Series
  { 
    id: 'pet-185-08-sm', 
    name: 'PET Strap 18.5x0.8mm 1200m Smooth', 
    name_ru: 'Лента ПЭТ 18,5*0,8мм 1200м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 660 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 660 кгс.',
    price: 3800.00,
    specs: { 'Size': '18.5x0.8mm', 'Length': '1200m', 'Break Strength': '6450 N (660 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '18,5х0,8мм', 'Намотка': '1200м', 'Разрывная нагрузка': '660 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-185-09-sm', 
    name: 'PET Strap 18.5x0.9mm 1050m Smooth', 
    name_ru: 'Лента ПЭТ 18,5*0,9мм 1050м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 685 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 685 кгс.',
    price: 3850.00,
    specs: { 'Size': '18.5x0.9mm', 'Length': '1050m', 'Break Strength': '6700 N (685 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '18,5х0,9мм', 'Намотка': '1050м', 'Разрывная нагрузка': '685 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-19-08-sm', 
    name: 'PET Strap 19.0x0.8mm 1100m Smooth', 
    name_ru: 'Лента ПЭТ 19,0*0,8мм 1100м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 685 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 685 кгс.',
    price: 3850.00,
    specs: { 'Size': '19.0x0.8mm', 'Length': '1100m', 'Break Strength': '6700 N (685 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '19,0х0,8мм', 'Намотка': '1100м', 'Разрывная нагрузка': '685 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-19-09-sm', 
    name: 'PET Strap 19.0x0.9mm 1000m Smooth', 
    name_ru: 'Лента ПЭТ 19,0*0,9мм 1000м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 765 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 765 кгс.',
    price: 3900.00,
    specs: { 'Size': '19.0x0.9mm', 'Length': '1000m', 'Break Strength': '7500 N (765 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '19,0х0,9мм', 'Намотка': '1000м', 'Разрывная нагрузка': '765 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-19-10-sm', 
    name: 'PET Strap 19.0x1.0mm 900m Smooth', 
    name_ru: 'Лента ПЭТ 19,0*1,0мм 900м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 845 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 845 кгс.',
    price: 3950.00,
    specs: { 'Size': '19.0x1.0mm', 'Length': '900m', 'Break Strength': '8300 N (845 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '19,0х1,0мм', 'Намотка': '900м', 'Разрывная нагрузка': '845 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-19-127-sm', 
    name: 'PET Strap 19.0x1.27mm 700m Smooth', 
    name_ru: 'Лента ПЭТ 19,0*1,27мм 700м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1622287480427-6f9423479e3f?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 1080 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 1080 кгс.',
    price: 4100.00,
    specs: { 'Size': '19.0x1.27mm', 'Length': '700m', 'Break Strength': '10600 N (1080 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '19,0х1,27мм', 'Намотка': '700м', 'Разрывная нагрузка': '1080 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  // 25-32mm Series
  { 
    id: 'pet-25-10-sm', 
    name: 'PET Strap 25.0x1.0mm 700m Smooth', 
    name_ru: 'Лента ПЭТ 25,0*1,0мм 700м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1589822466118-686113c34fb3?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 1120 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 1120 кгс.',
    price: 4250.00,
    specs: { 'Size': '25.0x1.0mm', 'Length': '700m', 'Break Strength': '11000 N (1120 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '25,0х1,0мм', 'Намотка': '700м', 'Разрывная нагрузка': '1120 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-25-127-sm', 
    name: 'PET Strap 25.0x1.27mm 550m Smooth', 
    name_ru: 'Лента ПЭТ 25,0*1,27мм 550м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1589822466118-686113c34fb3?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 1430 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 1430 кгс.',
    price: 4350.00,
    specs: { 'Size': '25.0x1.27mm', 'Length': '550m', 'Break Strength': '14000 N (1430 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '25,0х1,27мм', 'Намотка': '550м', 'Разрывная нагрузка': '1430 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-25-13-sm', 
    name: 'PET Strap 25.0x1.3mm 550m Smooth', 
    name_ru: 'Лента ПЭТ 25,0*1,3мм 550м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1589822466118-686113c34fb3?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 1460 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 1460 кгс.',
    price: 4400.00,
    specs: { 'Size': '25.0x1.3mm', 'Length': '550m', 'Break Strength': '14300 N (1460 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '25,0х1,3мм', 'Намотка': '550м', 'Разрывная нагрузка': '1460 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },
  { 
    id: 'pet-32-127-sm', 
    name: 'PET Strap 32.0x1.27mm 700m Smooth', 
    name_ru: 'Лента ПЭТ 32,0*1,27мм 700м Гладкая',
    category: 'PET Strap', 
    subcategory: 'smooth',
    imageUrl: 'https://images.unsplash.com/photo-1589822466118-686113c34fb3?auto=format&fit=crop&w=800&q=80', 
    description: 'Smooth strap. Break: 805 kgf.', 
    description_ru: 'Гладкая лента. Нагрузка: 805 кгс.',
    price: 5500.00,
    specs: { 'Size': '32.0x1.27mm', 'Length': '700m', 'Break Strength': '7900 N (805 kgf)', 'Core': '406mm' },
    specs_ru: { 'Размер': '32,0х1,27мм', 'Намотка': '700м', 'Разрывная нагрузка': '805 кгс', 'Шпуля': '406мм' },
    inStock: true 
  },

  // --- STRETCH FILM ---
  {
    id: 'stretch-hand',
    name: 'Manual Stretch Film 17mic',
    name_ru: 'Стрейч-пленка Ручная 17мкм',
    category: 'Stretch Film',
    subcategory: 'manual',
    imageUrl: 'https://images.unsplash.com/photo-1606769313651-64c74c83a5d8?auto=format&fit=crop&w=800&q=80',
    description: 'Transparent LLDPE film for manual pallet wrapping.',
    description_ru: 'Прозрачная пленка LLDPE для ручной обмотки паллет.',
    fullDescription: 'High clarity, puncture-resistant stretch film. Produced from virgin granules to ensure consistent stretch capability (up to 150%). Ideal for standard warehouse operations.',
    fullDescription_ru: 'Высокопрозрачная, устойчивая к проколам пленка. Производится из первичной гранулы. Гарантированное престретч до 150%. Идеальна для складских операций.',
    price: 450.00, // RUB
    specs: { 'Thickness': '17 micron', 'Width': '500mm', 'Weight': '2.0 kg net', 'Stretch': '150%', 'Color': 'Transparent' },
    specs_ru: { 'Толщина': '17 мкм', 'Ширина': '500мм', 'Вес нетто': '2.0 кг', 'Растяжение': '150%', 'Цвет': 'Прозрачный' },
    inStock: true
  },
  {
    id: 'stretch-machine',
    name: 'Machine Grade Power Film',
    name_ru: 'Машинная Стрейч-пленка Power',
    category: 'Stretch Film',
    subcategory: 'machine',
    imageUrl: 'https://images.unsplash.com/photo-1507898082122-574b13093216?auto=format&fit=crop&w=800&q=80',
    description: 'High-performance film for automated pallet wrappers.',
    description_ru: 'Высокоэффективная пленка для паллетоупаковщиков.',
    fullDescription: 'Designed for high-speed automatic wrappers with pre-stretch carriages. Offers pre-stretch capability up to 300%, significantly reducing material cost per pallet.',
    fullDescription_ru: 'Создана для высокоскоростных автоматических упаковщиков. Обеспечивает престретч до 300%, существенно снижая расход материала на паллету.',
    price: 3200.00, // RUB
    specs: { 'Thickness': '23 micron', 'Width': '500mm', 'Weight': '16 kg', 'Pre-stretch': '300%', 'Core': '76mm' },
    specs_ru: { 'Толщина': '23 мкм', 'Ширина': '500мм', 'Вес': '16 кг', 'Престретч': '300%', 'Втулка': '76мм' },
    inStock: true
  },

  // --- BOXES (From Price Sheet) ---
  {
    id: 'box-970',
    name: 'Box 800x400x500 (Code 970)',
    name_ru: 'Гофроящик 800x400x500 (Арт 970)',
    category: 'Boxes',
    subcategory: '4-flap',
    imageUrl: 'https://images.unsplash.com/photo-1589822466118-686113c34fb3?auto=format&fit=crop&w=800&q=80',
    description: 'Volume: 160L. Area: 2.21 m2.',
    description_ru: 'Объем: 160л. Площадь: 2.21 м2.',
    price: 112.00,
    specs: { 'Dimensions': '800x400x500 mm', 'Code': '970', 'Volume': '160.0 L', 'Area': '2.21 m2', 'Grade': 'T-23' },
    specs_ru: { 'Размеры': '800x400x500 мм', 'Артикул': '970', 'Объем': '160.0 л', 'Площадь': '2.21 м2', 'Марка': 'Т-23' },
    inStock: true
  },
  {
    id: 'box-751',
    name: 'Box 750x360x430 (Code 751)',
    name_ru: 'Гофроящик 750x360x430 (Арт 751)',
    category: 'Boxes',
    subcategory: '4-flap',
    imageUrl: 'https://images.unsplash.com/photo-1589822466118-686113c34fb3?auto=format&fit=crop&w=800&q=80',
    description: 'Volume: 116.1L. Area: 1.806 m2.',
    description_ru: 'Объем: 116.1л. Площадь: 1.806 м2.',
    price: 92.00,
    specs: { 'Dimensions': '750x360x430 mm', 'Code': '751', 'Volume': '116.1 L', 'Area': '1.806 m2' },
    specs_ru: { 'Размеры': '750x360x430 мм', 'Артикул': '751', 'Объем': '116.1 л', 'Площадь': '1.806 м2' },
    inStock: true
  },
  {
    id: 'box-18',
    name: 'Box 630x320x340 (Code 18)',
    name_ru: 'Гофроящик 630x320x340 (Арт 18)',
    category: 'Boxes',
    subcategory: '4-flap',
    imageUrl: 'https://images.unsplash.com/photo-1598524374912-6b0fae3f0363?auto=format&fit=crop&w=800&q=80',
    description: 'Volume: 68.5L. Area: 1.298 m2.',
    description_ru: 'Объем: 68.5л. Площадь: 1.298 м2.',
    price: 66.00,
    specs: { 'Dimensions': '630x320x340 mm', 'Code': '18', 'Volume': '68.5 L', 'Grade': 'T-23' },
    specs_ru: { 'Размеры': '630x320x340 мм', 'Артикул': '18', 'Объем': '68.5 л', 'Марка': 'Т-23' },
    inStock: true
  },
  {
    id: 'box-670',
    name: 'Box 600x400x400 (Code 670)',
    name_ru: 'Гофроящик 600x400x400 (Арт 670)',
    category: 'Boxes',
    subcategory: '4-flap',
    imageUrl: 'https://images.unsplash.com/photo-1598524374912-6b0fae3f0363?auto=format&fit=crop&w=800&q=80',
    description: 'Volume: 96.0L. Area: 1.651 m2.',
    description_ru: 'Объем: 96.0л. Площадь: 1.651 м2.',
    price: 85.00,
    specs: { 'Dimensions': '600x400x400 mm', 'Code': '670', 'Volume': '96.0 L', 'Grade': 'T-23' },
    specs_ru: { 'Размеры': '600x400x400 мм', 'Артикул': '670', 'Объем': '96.0 л', 'Марка': 'Т-23' },
    inStock: true
  },
  {
    id: 'box-2631',
    name: 'Box 600x400x285 (Code 2631)',
    name_ru: 'Гофроящик 600x400x285 (Арт 2631)',
    category: 'Boxes',
    subcategory: '4-flap',
    imageUrl: 'https://images.unsplash.com/photo-1606170849160-537999974954?auto=format&fit=crop&w=800&q=80',
    description: 'Volume: 68.4L. Area: 1.416 m2.',
    description_ru: 'Объем: 68.4л. Площадь: 1.416 м2.',
    price: 72.00,
    specs: { 'Dimensions': '600x400x285 mm', 'Code': '2631', 'Volume': '68.4 L' },
    specs_ru: { 'Размеры': '600x400x285 мм', 'Артикул': '2631', 'Объем': '68.4 л' },
    inStock: true
  },
  {
    id: 'box-4604',
    name: 'Box 600x300x230 (Code 4604)',
    name_ru: 'Гофроящик 600x300x230 (Арт 4604)',
    category: 'Boxes',
    subcategory: '4-flap',
    imageUrl: 'https://images.unsplash.com/photo-1589822466118-686113c34fb3?auto=format&fit=crop&w=800&q=80',
    description: 'Volume: 41.4L. Area: 0.991 m2.',
    description_ru: 'Объем: 41.4л. Площадь: 0.991 м2.',
    price: 45.00,
    specs: { 'Dimensions': '600x300x230 mm', 'Code': '4604', 'Volume': '41.4 L' },
    specs_ru: { 'Размеры': '600x300x230 мм', 'Артикул': '4604', 'Объем': '41.4 л' },
    inStock: true
  },
  {
    id: 'box-b76',
    name: 'Box 450x350x250 (Code B-76)',
    name_ru: 'Гофроящик 450x350x250 (Арт Б-76)',
    category: 'Boxes',
    subcategory: '4-flap',
    imageUrl: 'https://images.unsplash.com/photo-1606170849160-537999974954?auto=format&fit=crop&w=800&q=80',
    description: 'Volume: 39.4L. Area: 0.999 m2.',
    description_ru: 'Объем: 39.4л. Площадь: 0.999 м2.',
    price: 51.00,
    specs: { 'Dimensions': '450x350x250 mm', 'Code': 'B-76', 'Volume': '39.4 L' },
    specs_ru: { 'Размеры': '450x350x250 мм', 'Артикул': 'Б-76', 'Объем': '39.4 л' },
    inStock: true
  },
  {
    id: 'box-722',
    name: 'Box 390x330x290 (Code 722)',
    name_ru: 'Гофроящик 390x330x290 (Арт 722)',
    category: 'Boxes',
    subcategory: '4-flap',
    imageUrl: 'https://images.unsplash.com/photo-1606170849160-537999974954?auto=format&fit=crop&w=800&q=80',
    description: 'Volume: 37.3L. Area: 0.932 m2.',
    description_ru: 'Объем: 37.3л. Площадь: 0.932 м2.',
    price: 47.50,
    specs: { 'Dimensions': '390x330x290 mm', 'Code': '722', 'Volume': '37.3 L' },
    specs_ru: { 'Размеры': '390x330x290 мм', 'Артикул': '722', 'Объем': '37.3 л' },
    inStock: true
  },
  {
    id: 'box-38',
    name: 'Box 380x304x285 (Code 38)',
    name_ru: 'Гофроящик 380x304x285 (Арт 38)',
    category: 'Boxes',
    subcategory: '4-flap',
    imageUrl: 'https://images.unsplash.com/photo-1606170849160-537999974954?auto=format&fit=crop&w=800&q=80',
    description: 'Volume: 32.9L. Area: 0.843 m2.',
    description_ru: 'Объем: 32.9л. Площадь: 0.843 м2.',
    price: 43.00,
    specs: { 'Dimensions': '380x304x285 mm', 'Code': '38', 'Volume': '32.9 L' },
    specs_ru: { 'Размеры': '380x304x285 мм', 'Артикул': '38', 'Объем': '32.9 л' },
    inStock: true
  },
  {
    id: 'box-self-cdek-3711',
    name: 'Self-Assembling Box 227x187x84',
    name_ru: 'Коробка самосборная 227x187x84 (Тип СДЭК)',
    category: 'Boxes',
    subcategory: 'self-assembling',
    imageUrl: 'https://images.unsplash.com/photo-1566635285666-30a4e569eb9b?auto=format&fit=crop&w=800&q=80',
    description: 'CDEK Type (Code 3711/1).',
    description_ru: 'Тип СДЭК (Арт 3711/1). Самосборная.',
    price: 23.10,
    specs: { 'Dimensions': '227x187x84 mm', 'Code': '3711/1', 'Type': 'Self-Assembling' },
    specs_ru: { 'Размеры': '227x187x84 мм', 'Артикул': '3711/1', 'Тип': 'Самосборная' },
    inStock: true
  },
  {
    id: 'box-self-c45',
    name: 'Self-Assembling Box 235x103x60',
    name_ru: 'Коробка самосборная 235x103x60 (С-45)',
    category: 'Boxes',
    subcategory: 'self-assembling',
    imageUrl: 'https://images.unsplash.com/photo-1566635285666-30a4e569eb9b?auto=format&fit=crop&w=800&q=80',
    description: 'Code C-45. Self-Assembling.',
    description_ru: 'Артикул С-45. Самосборная.',
    price: 13.00,
    specs: { 'Dimensions': '235x103x60 mm', 'Code': 'C-45', 'Type': 'Self-Assembling' },
    specs_ru: { 'Размеры': '235x103x60 мм', 'Артикул': 'С-45', 'Тип': 'Самосборная' },
    inStock: true
  },
  {
    id: 'box-self-mini',
    name: 'Self-Assembling Box "Mini" 100x100x100',
    name_ru: 'Коробка самосборная "Мини" 100x100x100',
    category: 'Boxes',
    subcategory: 'self-assembling',
    imageUrl: 'https://images.unsplash.com/photo-1566635285666-30a4e569eb9b?auto=format&fit=crop&w=800&q=80',
    description: 'Compact cubic box.',
    description_ru: 'Компактная кубическая коробка. Самосборная.',
    price: 15.00,
    specs: { 'Dimensions': '100x100x100 mm', 'Code': 'Mini', 'Type': 'Self-Assembling' },
    specs_ru: { 'Размеры': '100x100x100 мм', 'Артикул': 'Мини', 'Тип': 'Самосборная' },
    inStock: true
  },
  
  // Sheets
  {
    id: 'sheet-1200',
    name: 'Corrugated Pad 1200x800',
    name_ru: 'Прокладка 1200x800',
    category: 'Boxes',
    subcategory: 'sheets',
    imageUrl: 'https://images.unsplash.com/photo-1617788735124-6627609b054c?auto=format&fit=crop&w=800&q=80',
    description: 'Pallet layer pad.',
    description_ru: 'Прокладка на паллет.',
    price: 42.00,
    specs: { 'Dimensions': '1200x800 mm', 'Type': 'Pad' },
    specs_ru: { 'Размеры': '1200x800 мм', 'Тип': 'Прокладка' },
    inStock: true
  },
  {
    id: 'box-roll',
    name: 'Corrugated Roll 1050mm x 50m',
    name_ru: 'Рулонный гофрокартон 1050мм х 50м',
    category: 'Boxes',
    subcategory: 'sheets',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1677450281248-4b67694b5466?auto=format&fit=crop&w=800&q=80',
    description: 'Flexible protective packaging.',
    description_ru: 'Гибкая защитная упаковка.',
    price: 2200.00,
    specs: { 'Width': '1050 mm', 'Length': '50 m', 'Type': 'Roll' },
    specs_ru: { 'Ширина': '1050 мм', 'Длина': '50 м', 'Тип': 'Рулон' },
    inStock: true
  },

  // Trays
  {
    id: 'tray-143',
    name: 'Tray 565x377x111',
    name_ru: 'Гофролоток 565x377x111 (Арт 143)',
    category: 'Boxes',
    subcategory: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1605049299140-5909d14dbf3a?auto=format&fit=crop&w=800&q=80',
    description: 'Vegetable/Poultry Tray. For Chicken Meat.',
    description_ru: 'Лоток для овощей/птицы. Для мяса кур.',
    price: 43.00,
    specs: { 'Dimensions': '565x377x111 mm', 'Code': '143', 'Use': 'Chicken/Poultry' },
    specs_ru: { 'Размеры': '565x377x111 мм', 'Артикул': '143', 'Назначение': 'Мясо кур' },
    inStock: true
  },
  {
    id: 'tray-217',
    name: 'Tray 360x290x170',
    name_ru: 'Гофролоток 360x290x170 (Арт 217)',
    category: 'Boxes',
    subcategory: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1605049299140-5909d14dbf3a?auto=format&fit=crop&w=800&q=80',
    description: 'For Tomatoes, Cucumbers.',
    description_ru: 'Для помидоров, огурцов.',
    price: 36.00,
    specs: { 'Dimensions': '360x290x170 mm', 'Code': '217', 'Use': 'Tomatoes, Cucumbers' },
    specs_ru: { 'Размеры': '360x290x170 мм', 'Артикул': '217', 'Назначение': 'Помидоры, огурцы' },
    inStock: true
  },
  {
    id: 'tray-848',
    name: 'Tray 380x280x105 White',
    name_ru: 'Гофролоток 380x280x105 Белый (Арт 848)',
    category: 'Boxes',
    subcategory: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1605049299140-5909d14dbf3a?auto=format&fit=crop&w=800&q=80',
    description: 'Confectionery Tray. White.',
    description_ru: 'Кондитерский лоток. Белый.',
    price: 23.00,
    specs: { 'Dimensions': '380x280x105 mm', 'Code': '848', 'Use': 'Confectionery', 'Color': 'White' },
    specs_ru: { 'Размеры': '380x280x105 мм', 'Артикул': '848', 'Назначение': 'Кондитерский', 'Цвет': 'Белый' },
    inStock: true
  },

  // --- TOOLS ---
  {
    id: 'tool-battery',
    name: 'B-400 Battery Strapping Tool',
    name_ru: 'Аккумуляторный инструмент B-400',
    category: 'Tools',
    subcategory: 'battery',
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
    description: 'Portable friction weld tool for 13-19mm PET/PP.',
    description_ru: 'Портативный инструмент для ПЭТ/ПП 13-19мм.',
    fullDescription: 'The B-400 is our flagship battery-powered tool. It tensions, seals, and cuts the strap with a single button press. Includes 2 Li-Ion batteries and a rapid charger.',
    fullDescription_ru: 'B-400 - наш флагманский инструмент. Натягивает, сваривает и обрезает ленту одним нажатием кнопки. В комплекте 2 Li-Ion батареи и зарядное устройство.',
    price: 85000.00, // RUB
    specs: { 'Strap Width': '13-19mm', 'Tension': '4000N Max', 'Weight': '3.8 kg', 'Battery': '18V 4.0Ah', 'Sealing': 'Friction Weld' },
    specs_ru: { 'Ширина ленты': '13-19мм', 'Натяжение': '4000Н Макс', 'Вес': '3.8 кг', 'Аккумулятор': '18В 4.0Ач', 'Тип сварки': 'Трение' },
    inStock: true
  },
  {
    id: 'tool-pneumatic',
    name: 'Pneumatic Sealer for Steel',
    name_ru: 'Пневматический инструмент для стали',
    category: 'Tools',
    subcategory: 'pneumatic',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy duty air-powered tool for steel banding.',
    description_ru: 'Мощный пневмоинструмент для стальной ленты.',
    fullDescription: 'Industrial grade pneumatic sealer for use with 32mm steel strapping. Requires air compressor connection. Ideal for extremely heavy loads like pipe and timber.',
    fullDescription_ru: 'Промышленный пневматический инструмент для стальной ленты 32мм. Требует подключения компрессора. Идеален для труб и леса.',
    price: 42000.00, // RUB
    specs: { 'Type': 'Pusher Type', 'Pressure': '6 bar', 'Strap Width': '32mm', 'Joint': 'Double Notch', 'Weight': '4.5 kg' },
    specs_ru: { 'Тип': 'Толкающий', 'Давление': '6 бар', 'Ширина ленты': '32мм', 'Замок': 'Двойная просечка', 'Вес': '4.5 кг' },
    inStock: false
  },
  {
    id: 'tool-manual-h21',
    name: 'H-21 Heavy Duty Tensioner',
    name_ru: 'Натяжитель ручной H-21',
    category: 'Tools',
    subcategory: 'manual',
    imageUrl: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80',
    description: 'Manual tensioner for PET/PP strap up to 19mm.',
    description_ru: 'Ручной натяжитель для ПЭТ/ПП лент до 19мм.',
    fullDescription: 'Robust manual tensioner designed for demanding applications. Works with both polypropylene and polyester strapping. Features a high-quality cutter and bearings for smooth operation.',
    fullDescription_ru: 'Надежный ручной натяжитель для требовательных задач. Работает с полипропиленовой и полиэстеровой лентой. Оснащен качественным ножом и подшипниками.',
    price: 6500.00, // RUB
    specs: { 'Type': 'Manual Tensioner', 'Strap Width': '12-19mm', 'Weight': '1.3 kg', 'Material': 'Steel Body' },
    specs_ru: { 'Тип': 'Ручной натяжитель', 'Ширина ленты': '12-19мм', 'Вес': '1.3 кг', 'Материал': 'Стальной корпус' },
    inStock: true
  },
  {
    id: 'tool-manual-h36',
    name: 'Sealer H-36 (16mm)',
    name_ru: 'Клещи H-36 для ПЭТ 15-16 мм',
    category: 'Tools',
    subcategory: 'manual',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy duty sealer for serrated PET seals.',
    description_ru: 'Усиленные клещи для скрепления ПЭТ ленты скобой.',
    fullDescription: 'Professional long-handled sealer providing maximum leverage for crushing serrated seals onto PET strapping. Essential for heavy loads where seal integrity is critical.',
    fullDescription_ru: 'Профессиональные клещи с длинными рукоятками для максимального усилия при зажиме скобы. Необходимы для тяжелых грузов, где важна надежность соединения.',
    price: 7200.00, // RUB
    specs: { 'Strap Width': '15-16mm', 'Handle Length': '460mm', 'Weight': '2.4 kg', 'Seal Type': 'Serrated' },
    specs_ru: { 'Ширина ленты': '15-16мм', 'Длина рукояток': '460мм', 'Вес': '2.4 кг', 'Тип скобы': 'С насечкой' },
    inStock: true
  },
  {
    id: 'tool-manual-h42',
    name: 'Combined Tool H-42 (12-16mm)',
    name_ru: 'Комбинированное устройство H-42',
    category: 'Tools',
    subcategory: 'manual',
    imageUrl: 'https://images.unsplash.com/photo-1540104539488-92a51bbc0410?auto=format&fit=crop&w=800&q=80',
    description: '3-in-1 tool for PP strapping: tension, seal, cut.',
    description_ru: '3-в-1 для ПП ленты: натяжение, скрепление, обрезка.',
    fullDescription: 'Efficient manual combination tool that tensions, seals, and cuts polypropylene strap. Uses standard metal seals. Ideal for flat surface packing.',
    fullDescription_ru: 'Эффективное ручное устройство, которое натягивает, скрепляет скобой и обрезает полипропиленовую ленту. Идеально для упаковки на плоских поверхностях.',
    price: 14500.00, // RUB
    specs: { 'Strap Type': 'PP', 'Width': '12-16mm', 'Max Thickness': '0.8mm', 'Weight': '3.2 kg' },
    specs_ru: { 'Тип ленты': 'ПП', 'Ширина': '12-16мм', 'Макс. толщина': '0.8мм', 'Вес': '3.2 кг' },
    inStock: true
  },
  {
    id: 'tool-dispenser-h83',
    name: 'Dispenser Cart H-83',
    name_ru: 'Диспенсер H-83 (Ленторазмотчик)',
    category: 'Tools',
    subcategory: 'manual',
    imageUrl: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80',
    description: 'Mobile cart for PET/PP coils with tool box.',
    description_ru: 'Тележка для размотки бухт ПЭТ/ПП с ящиком для инструмента.',
    fullDescription: 'Robust steel cart designed for standard 406mm core coils. Features large rubber wheels for warehouse mobility, a built-in brake to prevent unraveling, and a spacious tray for tools and seals.',
    fullDescription_ru: 'Надежная стальная тележка для бухт с посадочным диаметром 406мм. Оснащена большими резиновыми колесами, тормозом от разматывания и ящиком для инструмента.',
    price: 9500.00, // RUB
    specs: { 'Core Size': '406mm', 'Wheels': 'Rubber', 'Brake': 'Included', 'Material': 'Steel' },
    specs_ru: { 'Посадочный диаметр': '406мм', 'Колеса': 'Резина', 'Тормоз': 'Есть', 'Материал': 'Сталь' },
    inStock: true
  },

  // --- CONSUMABLES (New) ---
  // Buckles
  {
    id: 'buckle-pr13',
    name: 'Wire Buckle PR 13 (12-13mm)',
    name_ru: 'Пряжка проволочная PR 13 (12-13мм)',
    category: 'Consumables',
    subcategory: 'buckles',
    imageUrl: 'https://images.unsplash.com/photo-1617788735124-6627609b054c?auto=format&fit=crop&w=800&q=80',
    description: 'For 12-13mm strapping. Pack of 1000.',
    description_ru: 'Для ленты 12-13мм. Упаковка 1000 шт.',
    price: 2500.00, // Estimated
    specs: { 'Strap Width': '12-13mm', 'Wire Diameter': '3mm', 'Quantity': '1000 pcs', 'Weight': '8.34 kg' },
    specs_ru: { 'Для ленты': '12-13мм', 'Диаметр проволоки': '3мм', 'Количество': '1000 шт', 'Вес упаковки': '8.34 кг' },
    inStock: true
  },
  {
    id: 'buckle-pr16',
    name: 'Wire Buckle PR 16 (15-16mm)',
    name_ru: 'Пряжка проволочная PR 16 (15-16мм)',
    category: 'Consumables',
    subcategory: 'buckles',
    imageUrl: 'https://images.unsplash.com/photo-1617788735124-6627609b054c?auto=format&fit=crop&w=800&q=80',
    description: 'For 15-16mm strapping. Pack of 1000.',
    description_ru: 'Для ленты 15-16мм. Упаковка 1000 шт.',
    price: 3200.00, // Estimated
    specs: { 'Strap Width': '15-16mm', 'Wire Diameter': '3.6mm', 'Quantity': '1000 pcs', 'Weight': '14.32 kg' },
    specs_ru: { 'Для ленты': '15-16мм', 'Диаметр проволоки': '3.6мм', 'Количество': '1000 шт', 'Вес упаковки': '14.32 кг' },
    inStock: true
  },
  {
    id: 'buckle-pr19',
    name: 'Wire Buckle PR 19 (19mm)',
    name_ru: 'Пряжка проволочная PR 19 (19мм)',
    category: 'Consumables',
    subcategory: 'buckles',
    imageUrl: 'https://images.unsplash.com/photo-1617788735124-6627609b054c?auto=format&fit=crop&w=800&q=80',
    description: 'For 19mm strapping. Pack of 500.',
    description_ru: 'Для ленты 19мм. Упаковка 500 шт.',
    price: 2100.00, // Estimated
    specs: { 'Strap Width': '19mm', 'Wire Diameter': '3.6mm', 'Quantity': '500 pcs', 'Weight': '7.69 kg' },
    specs_ru: { 'Для ленты': '19мм', 'Диаметр проволоки': '3.6мм', 'Количество': '500 шт', 'Вес упаковки': '7.69 кг' },
    inStock: true
  },
  // Seals
  {
    id: 'seal-pet16',
    name: 'PET Seal 16mm (1mm)',
    name_ru: 'Скоба для ПЭТ 16мм (1мм)',
    category: 'Consumables',
    subcategory: 'seals',
    imageUrl: 'https://images.unsplash.com/photo-1605317580181-898705262b8f?auto=format&fit=crop&w=800&q=80',
    description: 'Serrated seal for 16mm PET. 1000 pcs.',
    description_ru: 'С насечкой для ПЭТ 16мм. 1000 шт.',
    price: 1800.00, // Estimated
    specs: { 'Strap Width': '15-16mm', 'Length': '30mm', 'Thickness': '1mm', 'Quantity': '1000 pcs', 'Weight': '9.26 kg' },
    specs_ru: { 'Для ленты': '15-16мм', 'Длина замка': '30мм', 'Толщина': '1мм', 'Количество': '1000 шт', 'Вес упаковки': '9.26 кг' },
    inStock: true
  },
  {
    id: 'seal-pet16-9',
    name: 'PET Seal 16mm (0.9mm)',
    name_ru: 'Скоба для ПЭТ 16мм (0.9мм)',
    category: 'Consumables',
    subcategory: 'seals',
    imageUrl: 'https://images.unsplash.com/photo-1605317580181-898705262b8f?auto=format&fit=crop&w=800&q=80',
    description: 'Serrated seal for 16mm PET. 1000 pcs.',
    description_ru: 'С насечкой для ПЭТ 16мм. 1000 шт.',
    price: 1750.00, // Estimated
    specs: { 'Strap Width': '15-16mm', 'Length': '30mm', 'Thickness': '0.9mm', 'Quantity': '1000 pcs', 'Weight': '9.1 kg' },
    specs_ru: { 'Для ленты': '15-16мм', 'Длина замка': '30мм', 'Толщина': '0.9мм', 'Количество': '1000 шт', 'Вес упаковки': '9.1 кг' },
    inStock: true 
  },
  {
    id: 'seal-pet13',
    name: 'PET Seal 13mm',
    name_ru: 'Скоба для ПЭТ 13мм',
    category: 'Consumables',
    subcategory: 'seals',
    imageUrl: 'https://images.unsplash.com/photo-1605317580181-898705262b8f?auto=format&fit=crop&w=800&q=80',
    description: 'Serrated seal for 12-13mm PET. 1000 pcs.',
    description_ru: 'С насечкой для ПЭТ 12-13мм. 1000 шт.',
    price: 1500.00, // Estimated
    specs: { 'Strap Width': '12-13mm', 'Length': '30mm', 'Thickness': '0.7mm', 'Quantity': '1000 pcs', 'Weight': '5.47 kg' },
    specs_ru: { 'Для ленты': '12-13мм', 'Длина замка': '30мм', 'Толщина': '0.7мм', 'Количество': '1000 шт', 'Вес упаковки': '5.47 кг' },
    inStock: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Launch of PET Strap Production Line',
    title_ru: 'Запуск линии по производству ПЭТ ленты',
    date: 'Oct 15, 2023',
    date_ru: '15 Окт 2023',
    excerpt: 'We have successfully commissioned a third extrusion line, increasing our monthly output by 40%.',
    excerpt_ru: 'Мы успешно запустили третью экструзионную линию, увеличив ежемесячный объем выпуска на 40%.',
    imageUrl: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80',
    content: `
      <p class="mb-4">TuranPET proudly announces the launch of its first PET strap production line in Mary. Previously, the company specialized exclusively in recycling PET bottles into PET flakes. This strategic decision to manufacture the final product led to the acquisition of a modern extrusion line.</p>
      <h3 class="text-xl font-bold mb-2">Production Highlights</h3>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>First Line:</strong> This marks the beginning of PET strap manufacturing for our company.</li>
        <li><strong>Capacity:</strong> The line has a monthly production capacity of 120 tons.</li>
        <li><strong>Specifications:</strong> Core sizes produced are 12-19mm in width and 0.6-1.27mm in thickness.</li>
        <li><strong>Capability:</strong> The line is capable of producing straps from 9mm to 25mm wide and 0.5mm to 1.5mm thick.</li>
      </ul>
      
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div class="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between text-center">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Milestone</span>
              <div class="text-xl font-black text-emerald-600 my-2">1st Line</div>
              <span class="text-xs text-slate-600 font-medium">Start of Production</span>
          </div>
          <div class="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between text-center">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Capacity</span>
              <div class="text-xl font-black text-orange-600 my-2">120 Tons</div>
              <span class="text-xs text-slate-600 font-medium">Per Month</span>
          </div>
           <div class="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between text-center">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Capability</span>
              <div class="text-xl font-black text-blue-600 my-2">9-25mm</div>
              <span class="text-xs text-slate-600 font-medium">Width Range</span>
          </div>
      </div>

      <p>Product quality is strictly controlled by our in-house laboratory. Having our own PET flake production ensures the stability and consistency of our strap quality.</p>
    `,
    content_ru: `
      <p class="mb-4">TuranPET объявляет о запуске своей первой линии по производству ПЭТ ленты в г. Мары. Ранее компания специализировалась исключительно на переработке ПЭТ бутылок в ПЭТ флекс (хлопья). Стратегическое решение производить конечный продукт привело к приобретению и установке современной экструзионной линии.</p>
      <h3 class="text-xl font-bold mb-2">Ключевые моменты</h3>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Первая линия:</strong> Это событие знаменует начало эры производства ПЭТ ленты в нашей компании.</li>
        <li><strong>Мощность:</strong> Производственная мощность линии составляет 120 тонн в месяц.</li>
        <li><strong>Спецификации:</strong> Основные выпускаемые типоразмеры: ширина 12-19 мм, толщина 0,6-1,27 мм.</li>
        <li><strong>Возможности:</strong> Линия позволяет производить ленту шириной от 9 до 25 мм и толщиной от 0,5 до 1,5 мм.</li>
      </ul>
      
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div class="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between text-center">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Событие</span>
              <div class="text-xl font-black text-emerald-600 my-2">1-я Линия</div>
              <span class="text-xs text-slate-600 font-medium">Начало производства</span>
          </div>
          <div class="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between text-center">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Мощность</span>
              <div class="text-xl font-black text-orange-600 my-2">120 Тонн</div>
              <span class="text-xs text-slate-600 font-medium">В месяц</span>
          </div>
           <div class="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between text-center">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Возможности</span>
              <div class="text-xl font-black text-blue-600 my-2">9-25мм</div>
              <span class="text-xs text-slate-600 font-medium">Диапазон ширины</span>
          </div>
      </div>

      <p>Качество продукции строго контролируется собственной лабораторией. Наличие собственного производства ПЭТ флекса является гарантом стабильности качества нашей ленты.</p>
    `
  },
  {
    id: '2',
    title: 'PET vs Steel: Why Make the Switch?',
    title_ru: 'ПЭТ против Стали: Зачем менять?',
    date: 'Nov 02, 2023',
    date_ru: '02 Ноя 2023',
    excerpt: 'Polyester strapping offers higher shock absorption and safety compared to traditional steel banding.',
    excerpt_ru: 'Полиэстеровая лента обеспечивает лучшую амортизацию ударов и безопасность по сравнению со стальной.',
    imageUrl: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&w=800&q=80',
    content: `
      <p class="mb-4">For decades, steel strapping was the gold standard for heavy loads. However, advances in polyester (PET) extrusion technology have made PET strap a superior alternative for 90% of industrial applications, including brick, lumber, and metal sheets.</p>
      
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-left text-sm border-collapse">
            <thead>
                <tr class="bg-slate-900 text-white">
                    <th class="p-3">Feature</th>
                    <th class="p-3">PET Strap</th>
                    <th class="p-3">Steel Strap</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
                <tr class="bg-emerald-50">
                    <td class="p-3 font-bold">Elasticity</td>
                    <td class="p-3">High (Absorbs shock)</td>
                    <td class="p-3">Low (Snaps under shock)</td>
                </tr>
                <tr>
                    <td class="p-3 font-bold">Safety</td>
                    <td class="p-3">No sharp edges, safe recoil</td>
                    <td class="p-3">Sharp edges, dangerous recoil</td>
                </tr>
                <tr class="bg-emerald-50">
                    <td class="p-3 font-bold">Weight</td>
                    <td class="p-3">Lightweight (Easy handling)</td>
                    <td class="p-3">Heavy (Risk of injury)</td>
                </tr>
                <tr>
                    <td class="p-3 font-bold">Corrosion</td>
                    <td class="p-3">Rust-proof</td>
                    <td class="p-3">Rusts, stains cargo</td>
                </tr>
                 <tr class="bg-emerald-50">
                    <td class="p-3 font-bold">Cost</td>
                    <td class="p-3 text-emerald-700 font-bold">$$ (Economical)</td>
                    <td class="p-3 text-red-700 font-bold">$$$$ (Expensive)</td>
                </tr>
            </tbody>
        </table>
      </div>

      <h3 class="text-xl font-bold mb-2">The "Rubber Band" Effect</h3>
      <p class="mb-4">Unlike steel, PET has "elongation recovery". If your load settles or shifts during transport, PET strap contracts to keep the tension tight. Steel strap simply becomes loose, risking load failure.</p>
      
      <p>Making the switch reduces injury risk for your workers and lowers material costs by up to 50%.</p>
    `,
    content_ru: `
      <p class="mb-4">На протяжении десятилетий стальная лента была золотым стандартом для тяжелых грузов. Однако достижения в технологии экструзии полиэстера (ПЭТ) сделали ПЭТ-ленту превосходной альтернативой для 90% промышленных применений, включая кирпич, пиломатериалы и металлические листы.</p>
      
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-left text-sm border-collapse">
            <thead>
                <tr class="bg-slate-900 text-white">
                    <th class="p-3">Характеристика</th>
                    <th class="p-3">ПЭТ Лента</th>
                    <th class="p-3">Стальная Лента</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
                <tr class="bg-emerald-50">
                    <td class="p-3 font-bold">Эластичность</td>
                    <td class="p-3">Высокая (Гасит удары)</td>
                    <td class="p-3">Низкая (Рвется при ударе)</td>
                </tr>
                <tr>
                    <td class="p-3 font-bold">Безопасность</td>
                    <td class="p-3">Нет острых краев, безопасная отдача</td>
                    <td class="p-3">Острые края, опасная отдача</td>
                </tr>
                <tr class="bg-emerald-50">
                    <td class="p-3 font-bold">Вес</td>
                    <td class="p-3">Легкая (Удобно работать)</td>
                    <td class="p-3">Тяжелая (Риск травм)</td>
                </tr>
                <tr>
                    <td class="p-3 font-bold">Коррозия</td>
                    <td class="p-3">Не ржавеет</td>
                    <td class="p-3">Ржавеет, пачкает груз</td>
                </tr>
                 <tr class="bg-emerald-50">
                    <td class="p-3 font-bold">Стоимость</td>
                    <td class="p-3 text-emerald-700 font-bold">$$ (Экономично)</td>
                    <td class="p-3 text-red-700 font-bold">$$$$ (Дорого)</td>
                </tr>
            </tbody>
        </table>
      </div>

      <h3 class="text-xl font-bold mb-2">Эффект "Резинки"</h3>
      <p class="mb-4">В отличие от стали, у ПЭТ есть "возвратное удлинение". Если ваш груз усаживается или смещается во время транспортировки, ПЭТ-лента сжимается, сохраняя натяжение. Стальная лента просто провисает, создавая риск аварии.</p>
      
      <p>Переход на ПЭТ снижает риск травм для ваших сотрудников и сокращает затраты на материалы до 50%.</p>
    `
  },
  {
    id: '3',
    title: 'Production Volume Increase',
    title_ru: 'Наращивание объемов производства',
    date: 'Dec 10, 2023',
    date_ru: '10 Дек 2023',
    excerpt: 'In 2025, the company reached a monthly production volume of 120 tons of finished PET strap.',
    excerpt_ru: 'В 2025 компания вышла на ежемесячный объем в 120 тонн готовой продукции ПЭТ ленты в месяц',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    content: `
  <p class="mb-4">TuranPET continues its steady growth trajectory. Following the optimization of our existing lines and the implementation of 24/7 automated shifts, we are proud to report a record-breaking production milestone.</p>
  
  <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
    <h3 class="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
        Production Growth Trajectory
        <span class="text-xs font-normal bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">Verified Data</span>
    </h3>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 2023 Card -->
        <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-slate-300">
            <div class="text-slate-500 text-sm font-bold mb-1">2023 (Baseline)</div>
            <div class="flex items-end gap-2">
                <span class="text-3xl font-black text-slate-700">60</span>
                <span class="text-sm text-slate-400 mb-1">tons/mo</span>
            </div>
            <div class="mt-3 h-1 w-full bg-slate-100 rounded overflow-hidden">
                <div class="h-full bg-slate-300 w-[50%]"></div>
            </div>
        </div>

        <!-- 2024 Card -->
        <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
            <div class="flex justify-between items-center mb-1">
                <div class="text-slate-500 text-sm font-bold">2024</div>
                <span class="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">+50%</span>
            </div>
            <div class="flex items-end gap-2">
                <span class="text-3xl font-black text-slate-800">90</span>
                <span class="text-sm text-slate-400 mb-1">tons/mo</span>
            </div>
             <div class="mt-3 h-1 w-full bg-slate-100 rounded overflow-hidden">
                <div class="h-full bg-blue-400 w-[75%]"></div>
            </div>
        </div>

        <!-- 2025 Card -->
        <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-emerald-500 relative overflow-hidden">
             <div class="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl">CURRENT</div>
            <div class="flex justify-between items-center mb-1">
                <div class="text-slate-500 text-sm font-bold">2025</div>
                <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">+33%</span>
            </div>
            <div class="flex items-end gap-2">
                <span class="text-4xl font-black text-emerald-700">120</span>
                <span class="text-sm text-slate-400 mb-1">tons/mo</span>
            </div>
             <div class="mt-3 h-1 w-full bg-slate-100 rounded overflow-hidden">
                <div class="h-full bg-emerald-500 w-full"></div>
            </div>
            <p class="text-xs text-emerald-600 mt-2 font-medium flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Target Achieved
            </p>
        </div>
    </div>
    
    <div class="mt-6 p-4 bg-white rounded border border-slate-100">
        <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Production Efficiency</div>
        <div class="flex items-center gap-4">
             <div class="flex-1">
                 <div class="flex justify-between text-xs mb-1">
                     <span>Machine Utilization</span>
                     <span class="font-bold">92%</span>
                 </div>
                 <div class="w-full bg-slate-100 rounded-full h-2">
                     <div class="bg-slate-800 h-2 rounded-full" style="width: 92%"></div>
                 </div>
             </div>
             <div class="w-px h-8 bg-slate-200"></div>
             <div class="flex-1">
                 <div class="flex justify-between text-xs mb-1">
                     <span>Scrap Rate</span>
                     <span class="font-bold text-emerald-600">&lt; 1.5%</span>
                 </div>
                 <div class="w-full bg-slate-100 rounded-full h-2">
                     <div class="bg-emerald-500 h-2 rounded-full" style="width: 98%"></div>
                 </div>
             </div>
        </div>
    </div>
  </div>

  <p class="mb-4">Reaching <strong>120 tons per month</strong> signifies our transition from a regional supplier to a major player in the CIS industrial packaging sector. This volume allows us to:</p>
  <ul class="list-disc pl-5 space-y-2">
    <li>Guarantee stock availability for all standard sizes (12mm - 19mm).</li>
    <li>Reduce lead times for custom orders.</li>
    <li>Maintain price stability despite raw material fluctuations.</li>
  </ul>
`,
    content_ru: `
  <p class="mb-4">TuranPET продолжает траекторию устойчивого роста. Вслед за оптимизацией наших существующих линий и внедрением круглосуточных автоматизированных смен, мы с гордостью сообщаем о рекордном производственном рубеже.</p>
  
  <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
    <h3 class="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
        Динамика Роста Производства
        <span class="text-xs font-normal bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">Проверенные данные</span>
    </h3>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 2023 Card -->
        <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-slate-300">
            <div class="text-slate-500 text-sm font-bold mb-1">2023 (Старт)</div>
            <div class="flex items-end gap-2">
                <span class="text-3xl font-black text-slate-700">60</span>
                <span class="text-sm text-slate-400 mb-1">тонн/мес</span>
            </div>
            <div class="mt-3 h-1 w-full bg-slate-100 rounded overflow-hidden">
                <div class="h-full bg-slate-300 w-[50%]"></div>
            </div>
        </div>

        <!-- 2024 Card -->
        <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
            <div class="flex justify-between items-center mb-1">
                <div class="text-slate-500 text-sm font-bold">2024</div>
                <span class="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">+50%</span>
            </div>
            <div class="flex items-end gap-2">
                <span class="text-3xl font-black text-slate-800">90</span>
                <span class="text-sm text-slate-400 mb-1">тонн/мес</span>
            </div>
             <div class="mt-3 h-1 w-full bg-slate-100 rounded overflow-hidden">
                <div class="h-full bg-blue-400 w-[75%]"></div>
            </div>
        </div>

        <!-- 2025 Card -->
        <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-emerald-500 relative overflow-hidden">
             <div class="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl">ТЕКУЩИЙ</div>
            <div class="flex justify-between items-center mb-1">
                <div class="text-slate-500 text-sm font-bold">2025</div>
                <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">+33%</span>
            </div>
            <div class="flex items-end gap-2">
                <span class="text-4xl font-black text-emerald-700">120</span>
                <span class="text-sm text-slate-400 mb-1">тонн/мес</span>
            </div>
             <div class="mt-3 h-1 w-full bg-slate-100 rounded overflow-hidden">
                <div class="h-full bg-emerald-500 w-full"></div>
            </div>
            <p class="text-xs text-emerald-600 mt-2 font-medium flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Цель достигнута
            </p>
        </div>
    </div>
    
    <div class="mt-6 p-4 bg-white rounded border border-slate-100">
        <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Эффективность производства</div>
        <div class="flex items-center gap-4">
             <div class="flex-1">
                 <div class="flex justify-between text-xs mb-1">
                     <span>Загрузка линий</span>
                     <span class="font-bold">92%</span>
                 </div>
                 <div class="w-full bg-slate-100 rounded-full h-2">
                     <div class="bg-slate-800 h-2 rounded-full" style="width: 92%"></div>
                 </div>
             </div>
             <div class="w-px h-8 bg-slate-200"></div>
             <div class="flex-1">
                 <div class="flex justify-between text-xs mb-1">
                     <span>Брак</span>
                     <span class="font-bold text-emerald-600">&lt; 1.5%</span>
                 </div>
                 <div class="w-full bg-slate-100 rounded-full h-2">
                     <div class="bg-emerald-500 h-2 rounded-full" style="width: 98%"></div>
                 </div>
             </div>
        </div>
    </div>
  </div>

  <p class="mb-4">Достижение показателя в <strong>120 тонн в месяц</strong> знаменует наш переход от регионального поставщика к статусу крупного игрока в секторе промышленной упаковки СНГ. Этот объем позволяет нам:</p>
  <ul class="list-disc pl-5 space-y-2">
    <li>Гарантировать наличие на складе всех стандартных типоразмеров (12мм - 19мм).</li>
    <li>Сократить сроки выполнения индивидуальных заказов.</li>
    <li>Поддерживать стабильность цен, несмотря на колебания стоимости сырья.</li>
  </ul>
`
  },
  {
    id: '4',
    title: 'Strategic Expansion Plan 2026',
    title_ru: 'Стратегический план расширения 2026',
    date: 'Jan 15, 2024',
    date_ru: '15 Янв 2024',
    excerpt: 'In 2026, we plan to expand production by another 240 tons. Total capacity will reach 360 tons per month.',
    excerpt_ru: 'В 2026 году планируется расширение производства еще на 240 тонн. Общая мощность составит 360 тонн в месяц.',
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    content: `
      <p class="mb-4">Looking ahead, TuranPET has approved an ambitious investment plan for the fiscal year 2026. Responding to the increasing demand for high-quality recycled PET strapping in Russia and Central Asia, we are preparing for our largest expansion to date.</p>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-emerald-900 text-white p-6 rounded-lg shadow-xl">
             <h4 class="text-lg font-bold mb-2 uppercase tracking-widest text-emerald-400">The Goal</h4>
             <div class="text-5xl font-black mb-1">360 <span class="text-xl font-normal">tons/mo</span></div>
             <p class="text-emerald-200 text-sm">Target Total Capacity by End of 2026</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg border border-slate-200">
             <h4 class="font-bold text-slate-900 mb-4">Capacity Addition Breakdown</h4>
             <div class="space-y-4">
                 <div>
                    <div class="flex justify-between text-xs font-bold mb-1">
                        <span>Current (2025)</span>
                        <span>120t</span>
                    </div>
                    <div class="w-full bg-slate-200 rounded-full h-2">
                        <div class="bg-slate-400 h-2 rounded-full" style="width: 33%"></div>
                    </div>
                 </div>
                 <div>
                    <div class="flex justify-between text-xs font-bold mb-1">
                        <span class="text-orange-600">Expansion (2026)</span>
                        <span class="text-orange-600">+240t</span>
                    </div>
                    <div class="w-full bg-orange-100 rounded-full h-2">
                        <div class="bg-orange-500 h-2 rounded-full" style="width: 66%"></div>
                    </div>
                 </div>
                 <div class="pt-2 border-t border-slate-100">
                    <div class="flex justify-between font-bold">
                        <span>TOTAL</span>
                        <span>360 Tons</span>
                    </div>
                 </div>
             </div>
          </div>
      </div>

      <h3 class="text-xl font-bold mb-4">Key Objectives for 2026</h3>
      <p class="mb-4">This massive scale-up involves the installation of two additional heavy-duty extrusion lines and the expansion of our warehouse facilities in Novosibirsk to handle the increased throughput.</p>
      
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li class="bg-slate-50 p-4 rounded border border-slate-100">
            <strong>Market Dominance:</strong> Securing 15% of the regional market share for PET strapping.
        </li>
        <li class="bg-slate-50 p-4 rounded border border-slate-100">
            <strong>New Formats:</strong> Introduction of "Jumbo" coils (80kg+) for fully automated industrial lines.
        </li>
        <li class="bg-slate-50 p-4 rounded border border-slate-100">
            <strong>Logistics:</strong> Opening a new distribution hub in Moscow to serve Western Russia.
        </li>
      </ul>
    `,
    content_ru: `
      <p class="mb-4">Глядя в будущее, TuranPET утвердил амбициозный инвестиционный план на 2026 финансовый год. Реагируя на растущий спрос на высококачественную ПЭТ-ленту из вторичного сырья в России и Центральной Азии, мы готовимся к нашему самому масштабному расширению.</p>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-emerald-900 text-white p-6 rounded-lg shadow-xl">
             <h4 class="text-lg font-bold mb-2 uppercase tracking-widest text-emerald-400">Цель</h4>
             <div class="text-5xl font-black mb-1">360 <span class="text-xl font-normal">тонн/мес</span></div>
             <p class="text-emerald-200 text-sm">Плановая общая мощность к концу 2026</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg border border-slate-200">
             <h4 class="font-bold text-slate-900 mb-4">Структура расширения мощностей</h4>
             <div class="space-y-4">
                 <div>
                    <div class="flex justify-between text-xs font-bold mb-1">
                        <span>Текущее (2025)</span>
                        <span>120т</span>
                    </div>
                    <div class="w-full bg-slate-200 rounded-full h-2">
                        <div class="bg-slate-400 h-2 rounded-full" style="width: 33%"></div>
                    </div>
                 </div>
                 <div>
                    <div class="flex justify-between text-xs font-bold mb-1">
                        <span class="text-orange-600">Расширение (2026)</span>
                        <span class="text-orange-600">+240т</span>
                    </div>
                    <div class="w-full bg-orange-100 rounded-full h-2">
                        <div class="bg-orange-500 h-2 rounded-full" style="width: 66%"></div>
                    </div>
                 </div>
                 <div class="pt-2 border-t border-slate-100">
                    <div class="flex justify-between font-bold">
                        <span>ИТОГО</span>
                        <span>360 Тонн</span>
                    </div>
                 </div>
             </div>
          </div>
      </div>

      <h3 class="text-xl font-bold mb-4">Ключевые задачи на 2026</h3>
      <p class="mb-4">Это масштабное увеличение включает в себя установку двух дополнительных мощных экструзионных линий и расширение наших складских мощностей в Новосибирске для обработки возросшего грузопотока.</p>
      
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li class="bg-slate-50 p-4 rounded border border-slate-100">
            <strong>Рыночная доля:</strong> Обеспечение 15% регионального рынка ПЭТ-ленты.
        </li>
        <li class="bg-slate-50 p-4 rounded border border-slate-100">
            <strong>Новые форматы:</strong> Внедрение намотки "Джамбо" (80кг+) для полностью автоматизированных промышленных линий.
        </li>
        <li class="bg-slate-50 p-4 rounded border border-slate-100">
            <strong>Логистика:</strong> Открытие нового распределительного центра в Москве для обслуживания Западной России.
        </li>
      </ul>
    `
  }
];
