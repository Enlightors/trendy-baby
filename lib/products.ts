export interface Products {
  id: number;
  imageSrc: string;
  name: string;
  featured?: boolean;
}

export const productData: Products[] = [
  {
    id: 1,
    imageSrc: "/images/trending-baby-1.png",
    name: "Smart Formula Milk Maker O5",
    featured: true,
  },
  {
    id: 2,
    imageSrc: "/images/trending-baby-2.png",
    name: "Wavy Video Baby Monitor",
    featured: true,
  },
  {
    id: 3,
    imageSrc: "/images/trending-baby-3.png",
    name: "Mono Full HD Video Baby Monitor",
    featured: true,
  },
  {
    id: 4,
    imageSrc: "/images/Baby Strollers.png",
    name: "Baby Strollers",
    featured: true,
  },
  {
    id: 5,
    imageSrc: "/images/trending-baby-4.png",
    name: "Furniture",
    featured: true,
  },
  {
    id: 6,
    imageSrc: "/images/15.png",
    name: "Baby Carrycot",
    featured: true,
  },
];
