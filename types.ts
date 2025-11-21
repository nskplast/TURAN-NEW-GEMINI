
export type ProductCategory = 'PET Strap' | 'Stretch Film' | 'Boxes' | 'Tools' | 'Consumables';

export interface Product {
  id: string;
  name: string;
  name_ru?: string;
  category: ProductCategory;
  subcategory?: string;
  imageUrl: string;
  description: string;
  description_ru?: string;
  fullDescription?: string;
  fullDescription_ru?: string;
  price?: number; // Optional, B2B often requires quote
  specs: Record<string, string>;
  specs_ru?: Record<string, string>;
  inStock: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  title_ru?: string;
  date: string;
  date_ru?: string;
  excerpt: string;
  excerpt_ru?: string;
  imageUrl: string;
}

export interface StrapProduct {
  id: string;
  name: string;
  width: string;
  thickness: string;
  breakStrength: string;
  type: 'PET' | 'PP' | 'Steel' | 'Cord';
  imageUrl: string;
  description: string;
  price: number;
}

export interface ToolProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
}

export interface ImageGenerationState {
  isLoading: boolean;
  resultUrl: string | null;
  error: string | null;
}
