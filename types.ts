export interface Feature {
  id: number;
  name: string;
  image: string;
}

export interface Product {
  id: number;
  imageSrc: string;
  name: string;
  featured: boolean;
  category_id: number;
  description: string;
  brandId: number | null;
  colors: string[];
  features: Feature[];
  category: {
    id: number;
    name: string;
  };
  brand: {
    id: number;
    name: string;
  } | null;
}

export interface Brand {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}
