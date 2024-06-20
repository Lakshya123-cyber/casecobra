// bg-blue-200 border-blue-200
// bg-pink-200 border-pink-200
// bg-yellow-200 border-yellow-200
// bg-green-200 border-green-200
// bg-zinc-700 border-zinc-700

import { PRODUCT_PRICES } from '@/config/products';

//! iPhone 15 colors
// #F1F6F7
// #FEE5E4
// #FEF9E0
// #F1F5E6
// #4C4F52

export const COLORS = [
  { label: 'Blue', value: 'blue', tw: 'blue-200' },
  { label: 'Pink', value: 'pink', tw: 'pink-200' },
  { label: 'Yellow', value: 'rose', tw: 'yellow-200' },
  { label: 'Green', value: 'green', tw: 'green-200' },
  { label: 'Black', value: 'black', tw: 'zinc-700' },
] as const;

export const MODELS = {
  name: 'models',
  options: [
    { label: 'iPhone 13', value: 'iphone13' },
    { label: 'iPhone 13 Pro', value: 'iphone13pro' },
    { label: 'iPhone 14', value: 'iphone14' },
    { label: 'iPhone 14 Pro', value: 'iphone14pro' },
    { label: 'iPhone 15', value: 'iphone15' },
    { label: 'iPhone 15 Pro', value: 'iphone15pro' },
  ],
} as const;

export const MATERIALS = {
  name: 'material',
  options: [
    {
      label: 'Silicone',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: 'Soft Polycarbonate',
      value: 'polycarbonate',
      description: 'Scratch-resistant coating',
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const;

export const FINISHES = {
  name: 'finish',
  options: [
    {
      label: 'Smooth Finish',
      value: 'smooth',
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: 'Textured Finish',
      value: 'textured',
      description: 'Soft grippy texture',
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
