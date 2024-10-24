import { useParams } from 'next/navigation';
import React from 'react';

interface Product {
  id: number;
  imageSrc: string;
  name: string;
  description: string;
}

const productData: Product[] = [
  {
    id: 1,
    imageSrc: '/images/trendy-baby-1.webp',
    name: 'Automatic Bottle Maker',
    description: 'This is an automatic bottle maker.',
  },
  {
    id: 2,
    imageSrc: '/images/trendy-baby-2.webp',
    name: 'Sterilizers',
    description: 'Sterilizers to clean your baby’s bottles.',
  },
  {
    id: 3,
    imageSrc: '/images/trendy-baby-3.webp',
    name: 'Bottle Warmers',
    description: 'Warm your baby’s bottle quickly.',
  },
  {
    id: 4,
    imageSrc: '/images/trendy-baby-4.webp',
    name: 'Food Maker Deluxe',
    description: 'Make baby food with ease.',
  },
  {
    id: 5,
    imageSrc: '/images/trendy-baby-5.webp',
    name: 'Spare Parts',
    description: 'All the spare parts you need.',
  },
];

export default function ProductDetail() {
  const params = useParams();
  const id = params.id;

  const product = productData.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageSrc} alt={product.name} />
      <p>{product.description}</p>
    </div>
  );
}


